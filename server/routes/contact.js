import express from 'express';
import { body, validationResult } from 'express-validator';
import { sendContactEmail } from '../services/email.js';

const router = express.Router();

// Contact form submission
router.post('/', [
    body('name').trim().notEmpty().withMessage('Name is required').isLength({ max: 255 }),
    body('email').trim().isEmail().withMessage('Valid email is required').isLength({ max: 255 }),
    body('phone').optional().trim().isLength({ max: 20 }),
    body('subject').trim().notEmpty().withMessage('Subject is required').isLength({ max: 255 }),
    body('message').trim().notEmpty().withMessage('Message is required').isLength({ max: 5000 })
], async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({
                success: false,
                errors: errors.array()
            });
        }

        const { name, email, phone, subject, message } = req.body;

        // Send email (database removed)
        try {
            await sendContactEmail({ name, email, phone, subject, message });
        } catch (emailError) {
            console.error('Email sending failed:', emailError);
            // Continue even if email fails
        }

        res.json({
            success: true,
            message: 'Thank you for contacting us! We will get back to you soon.'
        });
    } catch (error) {
        console.error('Error processing contact form:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to send message. Please try again later.'
        });
    }
});

export default router;

