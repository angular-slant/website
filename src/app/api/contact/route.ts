import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

// Rate limiter: Map of IP -> { count, resetDate }
const rateLimitMap = new Map<string, { count: number; resetDate: number }>()
const MAX_REQUESTS_PER_DAY = 3

function getClientIP(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for')
  if (forwarded) {
    return forwarded.split(',')[0].trim()
  }
  const realIP = request.headers.get('x-real-ip')
  if (realIP) {
    return realIP
  }
  return 'unknown'
}

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const record = rateLimitMap.get(ip)

  if (!record || now > record.resetDate) {
    // Reset or create new record - resets at midnight
    const tomorrow = new Date()
    tomorrow.setHours(24, 0, 0, 0)
    rateLimitMap.set(ip, { count: 1, resetDate: tomorrow.getTime() })
    return false
  }

  if (record.count >= MAX_REQUESTS_PER_DAY) {
    return true
  }

  record.count++
  return false
}

function looksLikeSpam(text: string): boolean {
  if (!text || text.length < 3) return false
  // No spaces in text longer than 10 chars = likely gibberish
  if (!text.includes(' ') && text.length > 10) return true
  // Too many uppercase letters (>40%)
  const upperCount = (text.match(/[A-Z]/g) || []).length
  if (upperCount > text.length * 0.4) return true
  // Excessive consecutive consonants (common in random strings)
  if (/[bcdfghjklmnpqrstvwxyz]{5,}/i.test(text)) return true
  return false
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, company, service, message, website } = body

    // Honeypot check - bots fill this hidden field
    if (website) {
      // Silent success to not alert bots
      return NextResponse.json({ success: true })
    }

    // Spam content check
    if (looksLikeSpam(name) || looksLikeSpam(company) || looksLikeSpam(message)) {
      // Silent success to not alert bots
      return NextResponse.json({ success: true })
    }

    // Rate limiting
    const clientIP = getClientIP(request)
    if (isRateLimited(clientIP)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again tomorrow.' },
        { status: 429 }
      )
    }

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      )
    }

    // Send email to Korvol
    await resend.emails.send({
      from: 'Korvol Contact Form <noreply@korvol.com>',
      to: 'contact@korvol.com',
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || 'Not provided'}</p>
        <p><strong>Service Interest:</strong> ${service || 'Not specified'}</p>
        <hr />
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    })

    // Send confirmation email to user
    await resend.emails.send({
      from: 'Korvol <noreply@korvol.com>',
      to: email,
      subject: 'Thanks for contacting Korvol!',
      html: `
        <h2>Thanks for reaching out, ${name}!</h2>
        <p>We've received your message and will get back to you within 24 hours.</p>
        <p>In the meantime, feel free to check out our <a href="https://korvol.com/case-studies">case studies</a> to see how we've helped other businesses.</p>
        <br />
        <p>Best regards,</p>
        <p>The Korvol Team</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 }
    )
  }
}
