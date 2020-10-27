import React, { FC } from "react";
import { graphql } from "gatsby";
import DefaultLayout from "../layout/default";
import { PostQuery } from "../../types/graphql-types";

type Props = {
  data: PostQuery;
};

const PostTemplate: FC<Props> = ({ data }) => (
  <DefaultLayout title={data.markdownRemark?.frontmatter?.title || ""}>
    <time>{data.markdownRemark?.frontmatter?.date}</time>
    <h3>{data.markdownRemark?.frontmatter?.title}</h3>

    <hr />

    <div
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
    }
  }
`;
