import React, { FC } from "react";
import { graphql, Link } from "gatsby";
import { PostsQuery } from "../../types/graphql-types";
import DefaultLayout from "../layout/default";

type Props = {
  data: PostsQuery;
};

const Top: FC<Props> = ({ data }) => (
  <DefaultLayout>
    <h3>Posts</h3>
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
    <hr />
    <h3>SNS</h3>
    <a href="https://blog.70-10.net" target="__blank">
      Blog
    </a>{" "}
    /{" "}
    <a href="https://twitter.com/70_10" target="__blank">
      Twitter
    </a>
  </DefaultLayout>
);

export default Top;

export const pageQuery = graphql`
  query Posts {
    allMarkdownRemark {
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
