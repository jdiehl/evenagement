import { NextApiRequest, NextApiResponse } from 'next'

import mail from '../../lib/mail'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  // const { to, text } = req.body as { to: string, text: string }

  await mail.send({
    to: 'jonathan.diehl@gmail.com',
    from: 'no-reply@evenagement.com',
    subject: 'Test Email',
    text: 'nt'
  })

  res.status(200).json({ status: 'ok' })
}
