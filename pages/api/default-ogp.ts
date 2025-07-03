import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { platform, title } = req.query;
  
  // SVGでデフォルトOGP画像を生成
  const bgColor = platform === 'zenn' ? '#3ea8ff' : '#764ba2';
  const platformText = platform === 'zenn' ? 'Zenn' : 'Speaker Deck';
  const displayTitle = typeof title === 'string' ? title : `${platformText} Article`;
  
  const svg = `
    <svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
      <rect width="1200" height="630" fill="${bgColor}"/>
      <foreignObject width="1200" height="630">
        <div xmlns="http://www.w3.org/1999/xhtml" style="
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 60px;
          color: white;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        ">
          <div style="
            font-size: 28px;
            opacity: 0.8;
            margin-bottom: 20px;
            text-transform: uppercase;
            letter-spacing: 2px;
          ">${platformText}</div>
          <div style="
            font-size: 48px;
            font-weight: bold;
            text-align: center;
            line-height: 1.4;
            max-width: 900px;
          ">${displayTitle}</div>
        </div>
      </foreignObject>
    </svg>
  `;
  
  res.setHeader('Content-Type', 'image/svg+xml');
  res.setHeader('Cache-Control', 'public, max-age=86400');
  res.send(svg);
}