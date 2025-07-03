import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { url } = req.query;

  if (!url || typeof url !== 'string') {
    return res.status(400).json({ error: 'URL is required' });
  }

  try {
    // Speaker DeckのページからHTMLを取得
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    });
    const html = await response.text();

    // OGP画像を抽出
    const ogImageMatch = html.match(/<meta property="og:image" content="([^"]+)"/);
    const twitterImageMatch = html.match(/<meta name="twitter:image:src" content="([^"]+)"/);
    
    const imageUrl = ogImageMatch?.[1] || twitterImageMatch?.[1];

    if (imageUrl) {
      // 画像をプロキシ
      const imageResponse = await fetch(imageUrl);
      const imageBuffer = await imageResponse.arrayBuffer();
      
      res.setHeader('Content-Type', imageResponse.headers.get('Content-Type') || 'image/jpeg');
      res.setHeader('Cache-Control', 'public, max-age=86400'); // 1日キャッシュ
      res.send(Buffer.from(imageBuffer));
    } else {
      // デフォルト画像を返す
      const basePath = process.env.GITHUB_ACTIONS ? '/portfolio' : '';
      res.redirect(`${basePath}/speaker-deck-default.png`);
    }
  } catch (error) {
    console.error('Error fetching thumbnail:', error);
    res.status(500).json({ error: 'Failed to fetch thumbnail' });
  }
}