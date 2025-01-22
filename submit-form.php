<?php
// Load environment variables
require_once __DIR__ . '/vendor/autoload.php';
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

// Security checks
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    exit('Method not allowed');
}

// CSRF Protection
if (!isset($_SERVER['HTTP_ORIGIN']) || $_SERVER['HTTP_ORIGIN'] !== 'https://primenevada.com') {
    http_response_code(403);
    exit('Forbidden');
}

// Validate required fields
$required_fields = ['name', 'email', 'message'];
foreach ($required_fields as $field) {
    if (!isset($_POST[$field]) || empty(trim($_POST[$field]))) {
        http_response_code(400);
        exit('Missing required fields');
    }
}

// Validate email
if (!filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    exit('Invalid email format');
}

// Honeypot check
if (!empty($_POST['_honey'])) {
    http_response_code(200); // Pretend success
    exit();
}

// Prepare data for FormSubmit
$formsubmit_url = 'https://formsubmit.co/' . $_ENV['FORMSUBMIT_KEY'];
$data = [
    'name' => strip_tags(trim($_POST['name'])),
    'email' => strip_tags(trim($_POST['email'])),
    'message' => strip_tags(trim($_POST['message'])),
    '_subject' => 'New Contact Form Submission - Prime Nevada',
    '_replyto' => strip_tags(trim($_POST['email'])),
    '_template' => 'box',
    '_next' => 'https://primenevada.com/thank-you',
    '_email' => $_ENV['RECIPIENT_EMAIL'] // The email address where form submissions should be sent
];

if (isset($_POST['company']) && !empty(trim($_POST['company']))) {
    $data['company'] = strip_tags(trim($_POST['company']));
}

// Forward to FormSubmit
$ch = curl_init($formsubmit_url);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($data));
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, true);
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);

$response = curl_exec($ch);
$status_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if ($status_code === 200) {
    header('Location: /thank-you');
    exit();
} else {
    http_response_code(500);
    exit('An error occurred');
}
