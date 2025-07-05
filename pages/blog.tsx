import { ReactElement } from "react";
import { Layout } from "../components";
import type { NextPageWithLayout } from "./_app";
import Image from "next/image";
import { useRouter } from "next/router";
import { fetchAllArticles, Article } from "../lib/rss";
import { customArticles } from "../types/data";
import styles from "../components/Blog.module.scss";
import type { GetStaticProps } from "next";

interface BlogPageProps {
  articles: Article[];
}

const BlogPage: NextPageWithLayout<BlogPageProps> = ({ articles }) => {
  const router = useRouter();

  return (
    <div className={styles.Blog}>
      <h1>登壇 / 記事</h1>
      <div className={styles.GridArticles}>
        {articles.map((article, i) => (
            <div
              className={styles.ArticleContainer}
              key={i}
              onClick={() => router.push(article.link)}
            >
              <div className={styles.ImageWrapper}>
                {article.thumbnail ? (
                  <Image
                    src={article.thumbnail}
                    width={16}
                    height={9}
                    alt={article.title}
                    sizes="(max-width: 767px) 50vw, (max-width: 500px) 100vw, 33vw"
                    style={{ 
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                    onError={(e) => {
                      const wrapper = e.currentTarget.closest(`.${styles.ImageWrapper}`);
                      if (wrapper) {
                        e.currentTarget.style.display = 'none';
                        wrapper.querySelector(`.${styles.NoImage}`)?.classList.remove(styles.hidden);
                      }
                    }}
                  />
                ) : null}
                <div className={`${styles.NoImage} ${article.thumbnail ? styles.hidden : ''}`}>
                  <div className={styles.NoImageContent}>
                    <div className={styles.Platform}>{article.platform === 'zenn' ? 'Zenn' : article.platform === 'speakerdeck' ? 'Speaker Deck' : 'Article'}</div>
                    <div className={styles.Title}>{article.title}</div>
                  </div>
                </div>
              </div>
              <h2>{article.title}</h2>
              <p className={styles.Date}>{new Date(article.date).toLocaleDateString('ja-JP')}</p>
            </div>
          ))}
        </div>
    </div>
  );
};

BlogPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export const getStaticProps: GetStaticProps<BlogPageProps> = async () => {
  try {
    const zennUsername = process.env.NEXT_PUBLIC_ZENN_USERNAME || 'king';
    const speakerdeckUsername = process.env.NEXT_PUBLIC_SPEAKERDECK_USERNAME || 'sugarcat7';
    
    // サーバーサイドで記事を取得
    const articles = await fetchAllArticles(zennUsername, speakerdeckUsername, customArticles);
    
    // OGP画像を実際に取得する
    const articlesWithOgp = await Promise.all(
      articles.map(async (article) => {
        if (article.platform === 'zenn' && !article.thumbnail && article.link) {
          try {
            // ZennのOGP画像を取得
            const response = await fetch(article.link);
            const html = await response.text();
            const ogImageMatch = html.match(/<meta property="og:image" content="([^"]+)"/);
            if (ogImageMatch) {
              article.thumbnail = ogImageMatch[1];
            }
          } catch (error) {
            console.error('Failed to fetch OGP for Zenn article:', error);
          }
        } else if (article.platform === 'speakerdeck' && article.link) {
          try {
            // Speaker DeckのOGP画像を取得
            const response = await fetch(article.link);
            const html = await response.text();
            const ogImageMatch = html.match(/<meta property="og:image" content="([^"]+)"/);
            if (ogImageMatch) {
              article.thumbnail = ogImageMatch[1];
            }
          } catch (error) {
            console.error('Failed to fetch OGP for Speaker Deck:', error);
          }
        }
        return article;
      })
    );
    
    return {
      props: {
        articles: articlesWithOgp,
      },
      // 1時間ごとに再生成
      revalidate: 3600,
    };
  } catch (error) {
    console.error('Failed to fetch articles:', error);
    return {
      props: {
        articles: [],
      },
      revalidate: 3600,
    };
  }
};

export default BlogPage;