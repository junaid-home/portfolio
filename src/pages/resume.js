import React from "react";
import Head from "next/head";
import ResumePdf from "../containers/resume";

function Resume() {
  return (
    <React.Fragment>
      <Head>
        <title>Junaid Javed Resume</title>
        <meta
          name="description"
          content="Full-Stack JavaScript developer having hands on experience with React, React Native, Node.js, SQL, NoSQL, REST, GRAPHQL & DevOps"
        />
        <meta name="page-subject" content="Portfolio Home" />
      </Head>
      <ResumePdf />
    </React.Fragment>
  );
}

export default Resume;
