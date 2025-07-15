import { contactFormSchema } from '@/lib/schema'
import type { NextRequest } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  const body = await req.json()
  console.log('Received contact form data:', body)

  if (!body) {
    return new Response(JSON.stringify({ error: 'Invalid request' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    })
  }

  const { name, email, phone, details } = contactFormSchema.parse(body)

  const { data, error } = await resend.emails.send({
    from: 'NestFix <office@nestfixcorp.com>',
    to: 'office@nestfixcorp.com',
    subject: 'New Contact Form Submission on NestFix',
    html:
      '<div><p>Name: ' +
      name +
      '</p><p>Email: ' +
      email +
      '</p><p>Phone: ' +
      phone +
      '</p><p>Details: ' +
      details +
      '</p></div>'
  })

  if (error) {
    console.error('Error sending email:', error)
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    })
  }

  return new Response(JSON.stringify(data), {
    status: 200
  })
}
