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
    const response = await fetch(url);
    const html = await response.text();
    const dom = new JSDOM(html);
    const document = dom.window.document;

    const getMetaContent = (property: string): string | undefined => {
      const meta = document.querySelector(`meta[property="${property}"]`) ||
                   document.querySelector(`meta[name="${property}"]`);
      return meta?.getAttribute('content') || undefined;
    };

    const ogpData = {
      title: getMetaContent('og:title') || document.title,
      description: getMetaContent('og:description') || getMetaContent('description'),
      image: getMetaContent('og:image'),
      url: getMetaContent('og:url') || url,
    };

    res.status(200).json(ogpData);
  } catch (error) {
    console.error('Error fetching OGP data:', error);
    res.status(500).json({ error: 'Failed to fetch OGP data' });
  }
}