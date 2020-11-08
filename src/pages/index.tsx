import React, { FC } from "react";
import { graphql, Link } from "gatsby";
import { PostsQuery } from "../../types/graphql-types";
import DefaultLayout from "../layout/default";

type Props = {
  data: PostsQuery;
  location: {
    href: string;
  };
};

const Top: FC<Props> = ({ data, location }) => (
  <DefaultLayout location={location.href}>
    <h4>投稿</h4>
    <ul>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <li key={node.frontmatter?.slug}>
          <time>{node.frontmatter?.date}</time>{" "}
          <Link to={node.frontmatter?.slug || ""}>
            {node.frontmatter?.title}
          </Link>
        </li>
      ))}
    </ul>

    <h4>私について</h4>
    <p>ソフトウェアエンジニア</p>

    <h4>SNS</h4>
    <a href="https://github.com/70-10" target="__blank" rel="noopener">
      GitHub
    </a>
    {" / "}
    <a href="https://blog.70-10.net" target="__blank" rel="noopener">
      Blog
    </a>
    {" / "}
    <a href="https://twitter.com/70_10" target="__blank" rel="noopener">
      Twitter
    </a>
    {" / "}
    <a href="https://instagram.com/70_10" target="__blank" rel="noopener">
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
