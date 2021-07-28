import { motion } from "framer-motion";
import SectionWave from "../../components/section-wave";
import ProfficientWithArrow from "../../components/profficient-with-arrow";
import {
  AnimatedReactIcon,
  AnimatedNpmIcon,
  AnimatedGitHubIcon,
  AnimatedGitIcon,
  AnimatedJavaScriptIcon,
  AnimatedSassIcon,
  AnimatedCss3Icon,
  AnimatedHtml5Icon,
  AnimatedNextIcon,
  AnimatedTailwindIcon,
  AnimatedDevOpsIcon,
  AnimatedNodejsIcon,
  AnimatedSqlIcon,
  AnimatedNoSqljsIcon,
  AnimatedCloudIcon,
} from "../../components/animated-tech-icons";

import {
  techIconsContainer,
  fadeInOut,
} from "../../animations/framer-animations";
import { useScroll } from "../../animations/useScroll";

const AboutMe = () => {
  const [element, controls] = useScroll();

  return (
    <section id="about" className="about-me">
      <motion.div
        className="section-title"
        variants={fadeInOut}
        initial="hidden"
        animate={controls}
        ref={element}
      >
        <h2>
          About <span>Me</span>
        </h2>
      </motion.div>
      <motion.div className="grids">
        <motion.div
          className="content-text"
          variants={techIconsContainer}
          initial="hidden"
          animate={controls}
          ref={element}
        >
          <motion.div className="content-area grid-area-2" variants={fadeInOut}>
            <p>
              Hello! My name is <span>Junaid</span> and I am a 
              <span>self-taught Javascript & DevOps developer</span> based in{" "}
              <span>Haripur Pakistan</span>. I love helping businesses and
              individuals make their online presence a smooth and visually
              appealing experience. When I am not coding or learning new
              technologies I spend quality time with my family.
            </p>
          </motion.div>
        </motion.div>
        <ProfficientWithArrow className="text-and-arrow" />
        <motion.div
          className="grid-icons-container"
          variants={techIconsContainer}
          initial="hidden"
          animate={controls}
          ref={element}
        >
          <AnimatedHtml5Icon className="html5-icon" />
          <AnimatedCss3Icon className="css3-icon" />
          <AnimatedSassIcon className="sass-icon" />
          <AnimatedTailwindIcon className="sass-icon" />
          <AnimatedJavaScriptIcon className="javascript-icon" />
          <AnimatedReactIcon className="react-icon" />
          <AnimatedNextIcon className="next-icon" />
          <AnimatedGitHubIcon className="github-icon" />
          <AnimatedGitIcon className="git-icon" />
          <AnimatedNpmIcon className="npm-icon" />
          <AnimatedNodejsIcon className="npm-icon" />
          <AnimatedSqlIcon className="npm-icon" />
          <AnimatedNoSqljsIcon className="npm-icon" />
          <AnimatedCloudIcon className="npm-icon" />
          <AnimatedDevOpsIcon className="npm-icon" />
        </motion.div>
      </motion.div>
      <SectionWave secondary />
    </section>
  );
};

export default AboutMe;
