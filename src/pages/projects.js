import React from "react";
import Projects from "../containers/projects";
import Head from "next/head";

function Project() {
  return (
    <React.Fragment>
      <Head>
        <title>Junaid Javed Projects</title>
        <meta name="description" content="Junaid Javed portfolio projects." />
        <meta name="page-subject" content="Portfolio Home" />
      </Head>
      <Projects />
    </React.Fragment>
  );
}

export default Project;
