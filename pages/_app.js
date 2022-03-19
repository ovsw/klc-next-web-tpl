import { storyblokInit, apiPlugin } from "@storyblok/react";

import Head from "next/head";
import { Fragment, useEffect, useState } from "react";
import Preloader from "../src/layout/Preloader";
import "../styles/globals.css";

import Grid from "../src/components/grid";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  storyblokInit({
    accessToken: "5k9UI8gzBbYtJTqnb1mrJgtt",
    // accessToken: process.env.STORYBLOK_API_KEY,
    use: [apiPlugin],
    components: {
      grid: Grid,
    },
  });

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
