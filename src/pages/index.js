import React from "react";
import HomeContainer from "../containers/home";
import Head from "next/head";

function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Junaid Javed</title>
        <meta
          name="description"
          content="Junaid Javed portfolio website featuring his best past and recent work."
        />
        <meta name="page-subject" content="Portfolio Home" />
      </Head>
      <HomeContainer />
    </React.Fragment>
  );
}

export default Home;
