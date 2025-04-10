import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(_: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    personality: {
      name: "気さくな友人",
      style: "フレンドリーで話しやすい会話スタイルです。"
    }
  });
}
