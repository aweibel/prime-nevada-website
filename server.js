require('dotenv').config();

const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const axios = require('axios');
const path = require('path');
const app = express();

// Middleware
app.use(express.static(path.join(__dirname))); // Serve static files from current directory
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Add CORS headers
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'https://primenevada.com');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

// Email configuration
const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // Use TLS
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    },
    tls: {
        rejectUnauthorized: false // Accept self-signed certificates
    }
});

// Verify email configuration
transporter.verify(function(error, success) {
    if (error) {
        console.error('Email configuration error:', error);
    } else {
        console.log('Email server is ready');
    }
});

// reCAPTCHA verification function
async function verifyRecaptcha(token) {
    try {
        console.log('Verifying reCAPTCHA token:', token);
        const response = await axios.post('https://www.google.com/recaptcha/api/siteverify', null, {
            params: {
                secret: process.env.RECAPTCHA_SECRET_KEY,
                response: token
            }
        });
        
        console.log('reCAPTCHA response:', response.data);
        
        if (response.data.success) {
            return response.data.score >= 0.5;
        }
        return false;
    } catch (error) {
        console.error('reCAPTCHA verification error:', error);
        return false;
    }
}

// Handle form submissions
app.post('/submit-form', async (req, res) => {
    console.log('Received form submission:', {
        name: req.body.name,
        email: req.body.email,
        company: req.body.company,
        recaptchaToken: !!req.body['g-recaptcha-response']
    });

    try {
        // Verify reCAPTCHA
        const recaptchaValid = await verifyRecaptcha(req.body['g-recaptcha-response']);
        if (!recaptchaValid) {
            console.log('reCAPTCHA validation failed');
            return res.status(400).json({ error: 'Invalid reCAPTCHA' });
        }

        // Prepare email
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: 'alan@primenevada.com',
            subject: 'New Contact Form Submission',
            text: `
                Name: ${req.body.name}
                Email: ${req.body.email}
                Company: ${req.body.company || 'Not provided'}
                Message: ${req.body.message}
            `
        };

        console.log('Sending email with options:', {
            from: mailOptions.from,
            to: mailOptions.to,
            subject: mailOptions.subject
        });

        // Send email
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
        res.status(200).json({ message: 'Message sent successfully' });
    } catch (error) {
        console.error('Error in form submission:', error);
        res.status(500).json({ error: 'Error sending message', details: error.message });
    }
});

// Add a test endpoint
app.get('/test', (req, res) => {
    res.json({ 
        status: 'ok',
        env: {
            nodeEnv: process.env.NODE_ENV,
            hasEmailUser: !!process.env.EMAIL_USER,
            hasEmailPass: !!process.env.EMAIL_PASS,
            hasRecaptchaKey: !!process.env.RECAPTCHA_SECRET_KEY
        }
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log('Environment:', {
        nodeEnv: process.env.NODE_ENV,
        hasEmailUser: !!process.env.EMAIL_USER,
        hasEmailPass: !!process.env.EMAIL_PASS,
        hasRecaptchaKey: !!process.env.RECAPTCHA_SECRET_KEY
    });
});
