import React, { FC } from "react";
import { graphql } from "gatsby";
import DefaultLayout from "../layout/default";
import { PostQuery } from "../../types/graphql-types";
import styles from "./post.module.css";

type Props = {
  data: PostQuery;
  location: {
    href: string;
  };
};

const PostTemplate: FC<Props> = ({ data, location }) => (
  <DefaultLayout
    title={data.markdownRemark?.frontmatter?.title || ""}
    location={location.href}
    description={data.markdownRemark?.excerpt || ""}
  >
    <time className={styles.subtitle}>
      {data.markdownRemark?.frontmatter?.date}
    </time>
    <h3 className={styles.title}>{data.markdownRemark?.frontmatter?.title}</h3>
    <hr className={styles.line} />
    <article
      className={styles.article}
      dangerouslySetInnerHTML={{ __html: data.markdownRemark?.html || "" }}
    />
  </DefaultLayout>
);

export default PostTemplate;

export const pageQuery = graphql`
  query Post($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "YYYY/MM/DD")
        title
      }
      excerpt(pruneLength: 200)
    }
  }
`;
