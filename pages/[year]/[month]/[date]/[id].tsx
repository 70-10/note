import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import NextHeadSeo from "next-head-seo";
import { BaseUrl, SiteName } from "../../../../constants";
import { factory } from "../../../../factories/article-factory";
import { CMSArticle } from "../../../../models/api/articles";
import { createArticleRepository } from "../../../../repositories/article-repository";
import styles from "./article.module.css";

interface Props {
  cmsArticle: CMSArticle;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const repo = createArticleRepository();
  const paths = (await repo.getArticles()).map(factory).map((a) => a.path);
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const id = context.params?.id as string;
  const respo = createArticleRepository();

  return {
    props: {
      cmsArticle: await respo.getArticleById(id),
    },
  };
};

const ArticlePage: NextPage<Props> = ({ cmsArticle }) => {
  const article = factory(cmsArticle);
  const title = `${article.title} | ${SiteName}`;
  return (
    <>
      <NextHeadSeo
        title={title}
        canonical={`${BaseUrl}${article.path}`}
        og={{ title, url: `${BaseUrl}${article.path}` }}
      />

      <time className={styles.subtitle}>{article.publishAtString}</time>
      <h3 className={styles.title}>{article.title}</h3>
      <hr className={styles.line} />
      <article
        className={styles.article}
        dangerouslySetInnerHTML={{ __html: `${article.body}` }}
      />
    </>
  );
};

export default ArticlePage;
