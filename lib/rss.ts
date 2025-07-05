export interface RSSItem {
  title: string;
  link: string;
  pubDate: string;
  description?: string;
  enclosure?: {
    url: string;
  };
}

export interface Article {
  title: string;
  link: string;
  date: string;
  thumbnail?: string;
  description?: string;
  platform: 'zenn' | 'speakerdeck' | 'custom';
  emoji?: string;
}

export async function fetchRSSFeed(feedUrl: string): Promise<RSSItem[]> {
  try {
    const rss2jsonUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(feedUrl)}`;
    const response = await fetch(rss2jsonUrl);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch RSS feed: ${response.statusText}`);
    }
    
    const data = await response.json();
    return data.items || [];
  } catch (error) {
    console.error('Error fetching RSS feed:', error);
    return [];
  }
}

// ZennのOGP画像用のユーザーアバターURLをBase64エンコード
 function encodeAvatarUrl(username: string): string {
  // ZennのデフォルトアバターURLパターン
  const avatarUrl = `https://storage.googleapis.com/zenn-user-upload/avatar/${username}.jpeg`;
  return Buffer.from(avatarUrl).toString('base64');
}

// タイトルを適切にエンコード
function encodeTitle(title: string): string {
  // URLエンコード済みのタイトルをさらにエンコード
  return encodeURIComponent(title).replace(/%/g, '%25');
}

export async function fetchZennArticles(username: string): Promise<Article[]> {
  const feedUrl = `https://zenn.dev/${username}/feed?all=1`;
  const items = await fetchRSSFeed(feedUrl);
  
  return items.map(item => {
    // RSSフィードのenclosureからOGP画像を取得
    const thumbnail = item.enclosure?.url;
    
    return {
      title: item.title,
      link: item.link,
      date: item.pubDate,
      thumbnail,
      description: item.description,
      platform: 'zenn' as const
    };
  });
}

export async function fetchSpeakerDeckPresentations(username: string): Promise<Article[]> {
  const feedUrl = `https://speakerdeck.com/${username}.rss`;
  const items = await fetchRSSFeed(feedUrl);
  
  return items.map(item => {
    // Speaker DeckはRSSに画像が含まれないため、getStaticPropsで取得する
    return {
      title: item.title,
      link: item.link,
      date: item.pubDate,
      thumbnail: undefined,
      description: item.description,
      platform: 'speakerdeck' as const
    };
  });
}

export async function fetchAllArticles(zennUsername: string, speakerdeckUsername: string, customArticles: Article[] = []): Promise<Article[]> {
  const [zennArticles, speakerdeckPresentations] = await Promise.all([
    fetchZennArticles(zennUsername),
    fetchSpeakerDeckPresentations(speakerdeckUsername)
  ]);
  
  const allArticles = [...zennArticles, ...speakerdeckPresentations, ...customArticles];
  
  // Sort by date (newest first)
  return allArticles.sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return dateB - dateA;
  });
}