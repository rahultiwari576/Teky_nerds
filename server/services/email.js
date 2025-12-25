import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.MAIL_PORT || '587'),
    secure: false, // true for 465, false for other ports
    auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD
    }
});

export const sendContactEmail = async ({ name, email, phone, subject, message }) => {
    const mailOptions = {
        from: `"${name}" <${email}>`,
        to: 'hello@tekynerds.com',
        subject: `New Contact Form Submission: ${subject}`,
        html: `
            <!DOCTYPE html>
            <html>
            <head>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        line-height: 1.6;
                        color: #333;
                    }
                    .container {
                        max-width: 600px;
                        margin: 0 auto;
                        padding: 20px;
                    }
                    .header {
                        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                        color: white;
                        padding: 20px;
                        text-align: center;
                    }
                    .content {
                        background: #f9f9f9;
                        padding: 20px;
                        margin-top: 20px;
                    }
                    .field {
                        margin-bottom: 15px;
                    }
                    .field-label {
                        font-weight: bold;
                        color: #667eea;
                    }
                    .field-value {
                        margin-top: 5px;
                        padding: 10px;
                        background: white;
                        border-left: 3px solid #667eea;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header">
                        <h2>New Contact Form Submission</h2>
                    </div>
                    <div class="content">
                        <div class="field">
                            <div class="field-label">Name:</div>
                            <div class="field-value">${name}</div>
                        </div>
                        <div class="field">
                            <div class="field-label">Email:</div>
                            <div class="field-value">${email}</div>
                        </div>
                        ${phone ? `
                        <div class="field">
                            <div class="field-label">Phone:</div>
                            <div class="field-value">${phone}</div>
                        </div>
                        ` : ''}
                        <div class="field">
                            <div class="field-label">Subject:</div>
                            <div class="field-value">${subject}</div>
                        </div>
                        <div class="field">
                            <div class="field-label">Message:</div>
                            <div class="field-value">${message.replace(/\n/g, '<br>')}</div>
                        </div>
                    </div>
                </div>
            </body>
            </html>
        `
    };

    return transporter.sendMail(mailOptions);
};

