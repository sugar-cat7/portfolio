import { ReactElement, useEffect, useState } from "react";
import { Layout } from "../components";
import type { NextPageWithLayout } from "./_app";
import Image from "next/image";
import { useRouter } from "next/router";
import { fetchAllArticles, Article } from "../lib/rss";
import styles from "../components/Blog.module.scss";

const BlogPage: NextPageWithLayout = () => {
  const router = useRouter();
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadArticles = async () => {
      setLoading(true);
      try {
        const zennUsername = process.env.NEXT_PUBLIC_ZENN_USERNAME || 'king';
        const speakerdeckUsername = process.env.NEXT_PUBLIC_SPEAKERDECK_USERNAME || 'sugarcat7';
        const fetchedArticles = await fetchAllArticles(zennUsername, speakerdeckUsername);
        setArticles(fetchedArticles);
      } catch (error) {
        console.error('Failed to fetch articles:', error);
      } finally {
        setLoading(false);
      }
    };

    loadArticles();
  }, []);

  return (
    <div className={styles.Blog}>
      <h1>登壇 / 記事</h1>
      {loading ? (
        <p>読み込み中...</p>
      ) : (
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
                    <div className={styles.Platform}>{article.platform === 'zenn' ? 'Zenn' : 'Speaker Deck'}</div>
                    <div className={styles.Title}>{article.title}</div>
                  </div>
                </div>
              </div>
              <h2>{article.title}</h2>
              <p className={styles.Date}>{new Date(article.date).toLocaleDateString('ja-JP')}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

BlogPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default BlogPage;