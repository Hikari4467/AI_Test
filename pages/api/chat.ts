import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { message } = req.body;

  // ここではダミー応答を返します
  res.status(200).json({ reply: `あなたのメッセージ: ${message}` });
}
