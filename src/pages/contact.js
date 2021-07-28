import React from "react";
import ContactMe from "../containers/contact";
import Head from "next/head";

function Contact() {
  return (
    <React.Fragment>
      <Head>
        <title>Contact to Junaid Javed</title>
        <meta
          name="description"
          content="Junaid Javed portfolio website featuring his best past and recent work."
        />
        <meta name="page-subject" content="Portfolio Home" />
      </Head>
      <ContactMe />
    </React.Fragment>
  );
}

export default Contact;
