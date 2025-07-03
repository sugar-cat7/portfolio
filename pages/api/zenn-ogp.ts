import type { NextApiRequest, NextApiResponse } from 'next';
import { JSDOM } from 'jsdom';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { url } = req.query;

  if (!url || typeof url !== 'string') {
    return res.status(400).json({ error: 'URL is required' });
  }

  try {
    // Zennの記事ページからHTMLを取得
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      }
    });
    
    if (!response.ok) {
      throw new Error(`Failed to fetch page: ${response.statusText}`);
    }
    
    const html = await response.text();
    const dom = new JSDOM(html);
    const document = dom.window.document;
    
    // OGP画像を抽出
    const ogImageMeta = document.querySelector('meta[property="og:image"]');
    const twitterImageMeta = document.querySelector('meta[name="twitter:image"]');
    
    let imageUrl = ogImageMeta?.getAttribute('content') || twitterImageMeta?.getAttribute('content');
    
    if (!imageUrl) {
      // フォールバック: 記事内の最初の画像を探す
      const firstImage = document.querySelector('article img');
      imageUrl = firstImage?.getAttribute('src');
    }
    
    if (imageUrl) {
      // 相対パスを絶対パスに変換
      if (imageUrl.startsWith('/')) {
        imageUrl = `https://zenn.dev${imageUrl}`;
      }
      
      // 画像をプロキシ
      const imageResponse = await fetch(imageUrl);
      const imageBuffer = await imageResponse.arrayBuffer();
      
      res.setHeader('Content-Type', imageResponse.headers.get('Content-Type') || 'image/jpeg');
      res.setHeader('Cache-Control', 'public, max-age=86400'); // 1日キャッシュ
      res.send(Buffer.from(imageBuffer));
    } else {
      // デフォルト画像にリダイレクト
      res.redirect('/api/default-ogp?platform=zenn');
    }
  } catch (error) {
    console.error('Error fetching Zenn OGP:', error);
    res.redirect('/api/default-ogp?platform=zenn');
  }
}