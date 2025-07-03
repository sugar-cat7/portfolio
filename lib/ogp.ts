export interface OGPData {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

export async function fetchOGPData(url: string): Promise<OGPData> {
  try {
    // OGPデータを取得するためのエンドポイント
    const apiUrl = `/api/ogp?url=${encodeURIComponent(url)}`;
    const response = await fetch(apiUrl);
    
    if (!response.ok) {
      throw new Error('Failed to fetch OGP data');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching OGP data:', error);
    return {};
  }
}

export function getZennOGPImage(slug: string, title: string): string {
  // ZennのデフォルトOGP画像を使用
  return `https://res.cloudinary.com/zenn/image/upload/s--ew2BGBOT--/c_fit,g_north_west,l_text:notosansjp-medium.otf_55:${encodeURIComponent(title)},w_1010,x_90,y_100/g_south_west,l_text:notosansjp-medium.otf_37:${encodeURIComponent('king')},r_max,w_600,x_87,y_72/v1627283836/default/og-base-w1200-v2.png`;
}

export function getSpeakerDeckOGPImage(presentationId: string): string {
  // Speaker Deckのサムネイル画像URLパターン
  // presentationIdが取得できる場合のみ使用
  return `https://files.speakerdeck.com/presentations/${presentationId}/slide_0.jpg`;
}