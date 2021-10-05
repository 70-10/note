import type { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { factory } from "../factories/article-factory";
import { CMSArticle } from "../models/api/articles";
import { createArticleRepository } from "../repositories/article-repository";
import styles from "./index.module.css";

type Props = { cmsArticles: CMSArticle[] };

export const getStaticProps: GetStaticProps<Props> = async () => {
  const repository = createArticleRepository();

  return {
    props: {
      cmsArticles: await repository.getArticles(),
    },
  };
};

const Home: NextPage<Props> = ({ cmsArticles }) => {
  const articles = cmsArticles.map(factory);
  return (
    <div>
      <p className={styles.title}>Posts</p>
      <ul>
        {articles.map((a) => {
          return (
            <li key={a.id} className={styles.list_item}>
              <span className={styles.link}>
                <Link href={a.path}>{`${a.publishAtString}  ${a.title}`}</Link>
              </span>
            </li>
          );
        })}
      </ul>

      <p className={styles.title}>About me</p>
      <p>ソフトウェアエンジニア</p>

      <p className={styles.title}>SNS</p>
      <a
        href="https://github.com/70-10"
        target="__blank"
        rel="noopener"
        className={styles.link}
      >
        GitHub
      </a>
      {" / "}
      <a
        href="https://blog.70-10.net"
        target="__blank"
        rel="noopener"
        className={styles.link}
      >
        Blog
      </a>
      {" / "}
      <a
        href="https://twitter.com/70_10"
        target="__blank"
        rel="noopener"
        className={styles.link}
      >
        Twitter
      </a>
      {" / "}
      <a
        href="https://instagram.com/70_10"
        target="__blank"
        rel="noopener"
        className={styles.link}
      >
        Instagram
      </a>
    </div>
  );
};

export default Home;
