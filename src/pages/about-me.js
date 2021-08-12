import React from "react";
import Head from "next/head";
import AboutMe from "../containers/about";

function About() {
  return (
    <React.Fragment>
      <Head>
        <title>About Junaid Javed</title>
        <meta
          name="description"
          content="Full-Stack JavaScript developer having hands on experience in React, React Native, Node.js, SQL, NoSQL, REST, GRAPHQL & DevOps"
        />
        <meta name="page-subject" content="Portfolio Home" />
      </Head>
      <AboutMe minimal={false} />
    </React.Fragment>
  );
}

export default About;
