import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

const resend = new Resend(process.env.API_KEY_RESEND as string); // Make sure API key is correctly typed

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email } = req.body;

    // Basic validation for email
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      return res.status(400).json({ error: 'Invalid email address' });
    }

    try {
      // Send email using Resend
      await resend.emails.send({
        from: 'onboarding@resend.dev', // Make sure this email is verified in your Resend account
        to: email,
        subject: 'Hello World',
        html: '<p>Congrats on sending your <strong>first email</strong>!</p>',
      });

      // Return success response
      return res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ error: 'Failed to send email' });
    }
  } else {
    // If not POST, return method not allowed
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
}
