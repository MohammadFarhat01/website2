const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const nodemailer = require('nodemailer');

const app = express();
const PORT = 3007;
const DATA_FILE = path.join(__dirname, 'data.json');

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


// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (your HTML, CSS, and client-side JavaScript)
app.use(express.static(path.join(__dirname, 'public')));

// Handle form submission
app.post('/submit-form', (req, res) => {
    const { name, email, message } = req.body;

    // Read existing data
    fs.readFile(DATA_FILE, (err, data) => {
        if (err) {
            return res.status(500).send('Error reading data file');
        }

        const jsonData = JSON.parse(data);
        if (!jsonData.contacts) {
            jsonData.contacts = [];
        }

        // Add new contact to data
        jsonData.contacts.push({ name, email, message });

        // Write updated data back to file
        fs.writeFile(DATA_FILE, JSON.stringify(jsonData, null, 2), err => {
            if (err) {
                return res.status(500).send('Error writing data file');
            }

            // Send email notification
            const mailOptions = {
                from: 'sandbox.smtp.mailtrap.io',
                to: 'mhmdfr12@gmail.com', // Replace with recipient email address
                subject: 'New Contact Form Submission',
                html: `
                    <p>You have received a new contact form submission:</p>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Message:</strong> ${message}</p>
                `
            };

            // Send email
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.error('Error sending email:', error);
                    res.status(500).send('Error sending email');
                } else {
                    console.log('Email sent successfully:', info.response);
                    res.status(200).send('Form submission successful');
                }
            });
        });
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
