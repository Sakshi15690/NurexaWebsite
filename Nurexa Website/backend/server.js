import express from 'express'
import cors from 'cors'
import nodemailer from 'nodemailer'
import { config } from 'dotenv'
import { buildGoogleFormPayload } from './googleForm.js'

config()

const app = express()
const PORT = process.env.PORT || 3001
const DESTINATION_EMAIL = process.env.DESTINATION_EMAIL || 'hello@nurexa.ca'

app.use(cors())
app.use(express.json())

app.post('/api/assessment', async (req, res) => {
  try {
    const { type = 'assessment', name, email, companySize, challenges, processes, company, message } = req.body || {}

    if (!name || !email) {
      return res.status(400).json({ success: false, message: 'Name and email are required.' })
    }

    const googleFormUrl = process.env.GOOGLE_FORM_ENDPOINT || 'https://docs.google.com/forms/d/e/1FAIpQLSdByRKkubmZXp_Com_9MvhlIFjIhthoEzoYpbznf_q4zl9MRg/formResponse'
    const googleFormPayload = buildGoogleFormPayload({ name, email, companySize, challenges, processes })

    try {
      const googleResponse = await fetch(googleFormUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        body: googleFormPayload.toString()
      })

      if (!googleResponse.ok) {
        console.warn('Google Form submission failed:', googleResponse.status, googleResponse.statusText)
      }
    } catch (googleError) {
      console.warn('Google Form submission error:', googleError.message)
    }

    const transporter = createTransporter()
    const subject = type === 'contact' ? 'New contact form submission' : 'New AI assessment request'
    const html = buildEmailHtml({ type, name, email, companySize, challenges, processes, company, message })

    if (transporter && process.env.SMTP_HOST && process.env.SMTP_HOST !== 'your_smtp_host') {
      await transporter.sendMail({
        from: process.env.SMTP_FROM || 'Nurexa Website <no-reply@nurexa.ca>',
        to: DESTINATION_EMAIL,
        replyTo: email,
        subject,
        html
      })
    } else {
      console.warn('SMTP not configured; skipping email delivery for submission.')
    }

    return res.json({ success: true, message: 'Submission received.' })
  } catch (error) {
    console.error('Submission failed:', error)
    return res.status(500).json({ success: false, message: 'Unable to send message right now.' })
  }
})

function createTransporter() {
  if (!process.env.SMTP_HOST || !process.env.SMTP_PORT || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
    return nodemailer.createTransport({
      streamTransport: true,
      newline: 'unix',
      buffer: true
    })
  }

  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  })
}

function buildEmailHtml({ type, name, email, companySize, challenges, processes, company, message }) {
  const sections = [
    `<p><strong>Type:</strong> ${type}</p>`,
    `<p><strong>Name:</strong> ${name}</p>`,
    `<p><strong>Email:</strong> ${email}</p>`
  ]

  if (company) sections.push(`<p><strong>Company:</strong> ${company}</p>`)
  if (companySize) sections.push(`<p><strong>Company size:</strong> ${companySize}</p>`)
  if (challenges) sections.push(`<p><strong>Current challenges:</strong> ${challenges}</p>`)
  if (processes) sections.push(`<p><strong>Processes to improve:</strong> ${processes}</p>`)
  if (message) sections.push(`<p><strong>Message:</strong> ${message}</p>`)

  return `<div>${sections.join('')}</div>`
}

app.listen(PORT, () => {
  console.log(`Backend listening on port ${PORT}`)
})
