require('dotenv').config();

const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const axios = require('axios');
const app = express();

// Middleware
app.use(express.static('.')); // Serve static files
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Email configuration
const transporter = nodemailer.createTransport({
    // Configure your email service here
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// reCAPTCHA verification function
async function verifyRecaptcha(token) {
    try {
        const response = await axios.post('https://www.google.com/recaptcha/api/siteverify', null, {
            params: {
                secret: process.env.RECAPTCHA_SECRET_KEY,
                response: token
            }
        });
        return response.data.success;
    } catch (error) {
        console.error('reCAPTCHA verification error:', error);
        return false;
    }
}

// Handle form submissions
app.post('/submit-form', async (req, res) => {
    try {
        // Verify reCAPTCHA
        const recaptchaValid = await verifyRecaptcha(req.body['g-recaptcha-response']);
        if (!recaptchaValid) {
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

        // Send email
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Message sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ error: 'Error sending message' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
