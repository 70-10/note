import React, { FC } from "react";
import { Helmet } from "react-helmet";
import { Link, StaticQuery, graphql } from "gatsby";
import { HeaderQuery } from "../../types/graphql-types";
import "@exampledev/new.css";

type Props = {
  title?: string;
  location?: string;
  description?: string;
};

const DefaultLayout: FC<Props> = ({
  children,
  title,
  location,
  description,
}) => (
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
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@70_10" />
          <meta property="og:url" content={location} />
          <meta
            property="og:title"
            content={
              title
                ? `${title} | ${data.site?.siteMetadata?.title}`
                : data.site?.siteMetadata?.title || ""
            }
          />
          {description && (
            <meta property="og:description" content={description} />
          )}
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
