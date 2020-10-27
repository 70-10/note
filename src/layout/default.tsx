import React, { FC } from "react";
import { Helmet } from "react-helmet";
import { Link, StaticQuery, graphql } from "gatsby";
import { HeaderQuery } from "../../types/graphql-types";
import "@exampledev/new.css";

type Props = {
  title?: string;
};

const DefaultLayout: FC<Props> = ({ children, title }) => (
  <StaticQuery
    query={graphql`
      query Header {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={(data: HeaderQuery) => (
      <>
        <Helmet>
          <meta charSet="utf-8" />
          <title>
            {title ? `${title} | ` : ""}
            {data.site?.siteMetadata?.title}
          </title>
        </Helmet>
        <header>
          <h3>
            <Link to="/">{data.site?.siteMetadata?.title}</Link>
          </h3>
        </header>
        <div>{children}</div>
      </>
    )}
  />
);

export default DefaultLayout;
