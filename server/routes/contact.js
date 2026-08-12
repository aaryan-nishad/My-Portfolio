/* eslint-env node */
/* global process */
import express from 'express'
import nodemailer from 'nodemailer'

const router = express.Router()

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

router.post('/', async (req, res) => {
  const { name, email, message } = req.body || {}

  if (!name || typeof name !== 'string' || !name.trim() || name.trim().length > 100) {
    return res.status(400).json({ success: false, message: 'Invalid name' })
  }
  if (!email || typeof email !== 'string' || !isValidEmail(email) || email.length > 254) {
    return res.status(400).json({ success: false, message: 'Invalid email' })
  }
  if (!message || typeof message !== 'string' || message.trim().length < 5 || message.trim().length > 2000) {
    return res.status(400).json({ success: false, message: 'Invalid message' })
  }

  const GMAIL_USER = process.env.GMAIL_USER
  const GMAIL_APP_PASSWORD = process.env.GMAIL_APP_PASSWORD
  const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL

  if (!GMAIL_USER || !GMAIL_APP_PASSWORD || !CONTACT_TO_EMAIL) {
    // do not expose real config
    return res.status(500).json({ success: false, message: 'Email service not configured' })
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: GMAIL_USER,
        pass: GMAIL_APP_PASSWORD
      }
    })

    const mailOptions = {
      from: GMAIL_USER,
      to: CONTACT_TO_EMAIL,
      subject: 'New Portfolio Contact Message',
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    }

    await transporter.sendMail(mailOptions)
    return res.json({ success: true })
  } catch (err) {
    // log error server-side but do not reveal details to client
    console.error('Mail send error:', err && err.message ? err.message : err)
    return res.status(500).json({ success: false, message: 'Failed to send message' })
  }
})

export default router
