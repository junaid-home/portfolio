import style from "./styles.module.scss";
import { motion } from "framer-motion";
import {
  ContactSection,
  Header,
  Footer,
  GithubLink,
  LinkedInLink,
  ResumeLink,
} from "../../components";

import {
  pageAnimation,
  leftLinksAnimations,
} from "../../animations/framer-animations";

const Contact = () => {
  return (
    <motion.section
      className={style.projectsPage}
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <Header backgroundSecondary />
      <ContactSection />
      <Footer />

      <div className={style.fixedLinksProjectsPage}>
        <GithubLink hoverRight variants={leftLinksAnimations} />
        <LinkedInLink hoverRight variants={leftLinksAnimations} />
        <ResumeLink hoverRight variants={leftLinksAnimations} />
      </div>
    </motion.section>
  );
};

export default Contact;
