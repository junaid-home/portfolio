import { motion } from "framer-motion";
import style from "./styles.module.scss";
import {
  Header,
  Footer,
  GithubLink,
  LinkedInLink,
  ResumeLink,
  AboutMeSection,
} from "../../components";

import {
  pageAnimation,
  leftLinksAnimations,
} from "../../animations/framer-animations";

const About = ({ minimal }) => {
  return (
    <motion.section
      className={style.projectsPage}
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <Header backgroundSecondary />
      <AboutMeSection minimal={minimal} />
      <Footer />
      <div className={style.fixedLinksProjectsPage}>
        <GithubLink hoverRight variants={leftLinksAnimations} />
        <LinkedInLink hoverRight variants={leftLinksAnimations} />
        <ResumeLink hoverRight variants={leftLinksAnimations} />
      </div>
    </motion.section>
  );
};

export default About;
