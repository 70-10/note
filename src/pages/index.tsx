import React, { FC } from "react";
import { graphql, Link } from "gatsby";
import { PostsQuery } from "../../types/graphql-types";
import DefaultLayout from "../layout/default";
import styles from "./index.module.css";

type Props = {
  data: PostsQuery;
  location: {
    href: string;
  };
};

const Top: FC<Props> = ({ data, location }) => (
  <DefaultLayout location={location.href}>
    <p className={styles.title}>Posts</p>

    <ul>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <li key={node.frontmatter?.slug} className={styles.list_item}>
          <Link to={node.frontmatter?.slug || ""} className={styles.link}>
            <time>{node.frontmatter?.date}</time> {node.frontmatter?.title}
          </Link>
        </li>
      ))}
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
  </DefaultLayout>
);

export default Top;

export const pageQuery = graphql`
  query Posts {
    allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
      edges {
        node {
          frontmatter {
            slug
            date(formatString: "YYYY/MM/DD")
            title
          }
        }
      }
    }
  }
`;
