import type { NextApiRequest, NextApiResponse } from 'next'
import mail from '../../services/mail'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  // const { to, text } = req.body as { to: string, text: string }

  await mail.send({
    to: 'jonathan.diehl@gmail.com',
    from: 'no-reply@evenagement.com',
    subject: 'Test from Evenagement',
    text: 'Hello how are you'
  })

  res.status(200).json({ status: 'ok' })
}
