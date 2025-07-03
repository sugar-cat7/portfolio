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
  platform: 'zenn' | 'speakerdeck';
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
    let thumbnail = item.enclosure?.url;
    
    // enclosureがない場合は、プロキシAPI経由で取得
    if (!thumbnail && item.link) {
      // Zennの記事ページからOGP画像を取得するエンドポイントを使用
      thumbnail = `/api/zenn-ogp?url=${encodeURIComponent(item.link)}`;
    }
    
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
  
  // Speaker Deckの各プレゼンテーションのOGP画像を取得
  const presentationsWithOGP = await Promise.all(
    items.map(async (item) => {
      try {
        // Speaker DeckのOGP画像を取得するためのエンドポイントを使用
        const thumbnail = `/api/speaker-deck-thumbnail?url=${encodeURIComponent(item.link)}`;
        
        return {
          title: item.title,
          link: item.link,
          date: item.pubDate,
          thumbnail,
          description: item.description,
          platform: 'speakerdeck' as const
        };
      } catch (error) {
        console.error('Error processing Speaker Deck presentation:', error);
        return {
          title: item.title,
          link: item.link,
          date: item.pubDate,
          thumbnail: undefined,
          description: item.description,
          platform: 'speakerdeck' as const
        };
      }
    })
  );
  
  return presentationsWithOGP;
}

export async function fetchAllArticles(zennUsername: string, speakerdeckUsername: string): Promise<Article[]> {
  const [zennArticles, speakerdeckPresentations] = await Promise.all([
    fetchZennArticles(zennUsername),
    fetchSpeakerDeckPresentations(speakerdeckUsername)
  ]);
  
  const allArticles = [...zennArticles, ...speakerdeckPresentations];
  
  // Sort by date (newest first)
  return allArticles.sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return dateB - dateA;
  });
}