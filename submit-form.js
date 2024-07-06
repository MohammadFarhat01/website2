const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: 'smtp.mailtrap.io',
    port: 2525,
    secure: false,
    auth: {
        user: '3a40e7d93f8beb', // Replace with your Mailtrap username
        pass: 'd98ddc366208ea' // Replace with your Mailtrap password
    }
});

module.exports = async (req, res) => {
    const { name, email, message } = req.body;

    const mailOptions = {
        from: 'sandbox.smtp.mailtrap.io',
        to: 'mhmdfr12@gmail.', // Replace with recipient email address
        subject: 'New Contact Form Submission',
        html: `
            <p>You have received a new contact form submission:</p>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong> ${message}</p>
        `
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).send('Form submission successful');
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).send('Error sending email');
    }
    
};
