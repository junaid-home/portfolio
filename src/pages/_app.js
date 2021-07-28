import React from "react";

import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "../styles/variables.scss";
import "../styles/base.scss";
import "../styles/app.scss";
// sections
import "../styles/sections/burger-menu.scss";
import "../styles/sections/hero.scss";
import "../styles/sections/wave.scss";
import "../styles/sections/hero-animation.scss";
import "../styles/sections/github-link.scss";
import "../styles/sections/linkedin-link.scss";
import "../styles/sections/resume-link.scss";
import "../styles/sections/header.scss";
import "../styles/sections/footer.scss";
import "../styles/sections/about-me.scss";
import "../styles/sections/animated-tech-icons.scss";
import "../styles/sections/profficient-with-arrow.scss";
import "../styles/sections/projects.scss";
import "../styles/sections/project.scss";
import "../styles/sections/custom-button.scss";
import "../styles/sections/tech-name-box.scss";
import "../styles/sections/resume-pdf.scss";
import "../styles/sections/contact/form.scss";
import "../styles/sections/contact/section.scss";
import "../styles/sections/contact/success.scss";

function App({ Component, pageProps }) {
  React.useEffect(() => {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", function () {
        navigator.serviceWorker.register("/service-worker.js").then(
          function (registration) {
            console.log(
              "Service Worker registration successful with scope: ",
              registration.scope
            );
          },
          function (err) {
            console.log("Service Worker registration failed: ", err);
          }
        );
      });
    }
  }, []);

  return <Component {...pageProps} />;
}

export default App;
