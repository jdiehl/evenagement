import * as mail from '@sendgrid/mail'
import { NextApiRequest, NextApiResponse } from 'next'

mail.setApiKey(process.env.SENDGRID_API_KEY)

export default async function send(req: NextApiRequest, res: NextApiResponse) {
  // const { to, text } = req.body as { to: string, text: string }

  await mail.send({
    to: 'jonathan.diehl@gmail.com',
    from: 'no-reply@evenagement.com',
    subject: 'Test Email',
    text: 'nt'
  })

  res.status(200).json({ status: 'ok' })
}
