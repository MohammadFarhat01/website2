// server.js
const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');

module.exports = async (req, res) => {
    const { name, email, message } = req.body;

    // Nodemailer configuration
    const transporter = nodemailer.createTransport({
        host: 'smtp.mailtrap.io',
        port: 2525, // You can use port 25, 465, 587, or 2525
        secure: false, // true for 465, false for other ports
        auth: {
            user: '3a40e7d93f8beb', // Replace with your Mailtrap username
            pass: 'd98ddc366208ea' // Replace with your Mailtrap password
        }
    });

    // Send email
    try {
        const info = await transporter.sendMail({
            from: 'sandbox.smtp.mailtrap.io',
            to: 'mhmdfr12@gmail.com', // Replace with recipient email address
            subject: 'New Contact Form Submission',
            html: `
                <p>You have received a new contact form submission:</p>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong> ${message}</p>
            `
        });

        console.log('Email sent successfully:', info.response);
        res.status(200).send('Email sent successfully!');
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).send('Error sending email');
    }
};
