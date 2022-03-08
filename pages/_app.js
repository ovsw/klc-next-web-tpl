import Head from "next/head";
import { Fragment, useEffect, useState } from "react";
import Preloader from "../src/layout/Preloader";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <Fragment>
      <Head>
        <title>Wellco UpSkill React NextJs Template</title>
        <link rel="icon" type="image/png" sizes="32x32" href="favicon.ico" />
      </Head>
      {loading && <Preloader />}
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
