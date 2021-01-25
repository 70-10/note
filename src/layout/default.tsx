import React, { FC } from "react";
import { Helmet } from "react-helmet";
import { StaticQuery, graphql } from "gatsby";
import { HeaderQuery } from "../../types/graphql-types";
import styles from "./default.module.css";
import Title from "../components/title";

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
        <div className={styles.body}>
          <header className={styles.header}>
            <Title title={data.site?.siteMetadata?.title}></Title>
          </header>
          <main className={styles.main}>{children}</main>
        </div>
      </>
    )}
  />
);

export default DefaultLayout;
