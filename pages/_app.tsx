import type { AppProps } from "next/app";
import Head from "next/head";
import Title from "../components/title";
import "../styles/globals.css";
import styles from "./_app.module.css";

function MyApp({ Component, pageProps }: AppProps) {
  const title = "Note";

  return (
    <>
      <Head>
        <title>Note</title>
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@70_10" />
        <meta property="og:title" content={title} />
      </Head>
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
