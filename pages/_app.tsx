import NextHeadSeo from "next-head-seo";
import type { AppProps } from "next/app";
import Title from "../components/title";
import { BaseUrl, SiteName } from "../constants";
import "../styles/globals.css";
import styles from "./_app.module.css";

function MyApp({ Component, pageProps }: AppProps) {
  const title = "Note";

  return (
    <>
      <NextHeadSeo
        title={title}
        canonical={BaseUrl}
        twitter={{ card: "summary", site: "@70_10" }}
        og={{ title, siteName: SiteName, url: BaseUrl }}
      />
      <div className={styles.body}>
        <header className={styles.header}>
          <Title title={title} />
        </header>
        <main className={styles.main}>
          <Component {...pageProps} />
        </main>
      </div>
    </>
  );
}
export default MyApp;
