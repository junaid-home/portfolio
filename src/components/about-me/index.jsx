import { motion } from "framer-motion";
import Link from "next/link";
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
  AnimatedLinuxIcon,
  AnimatedReactNativeIcon,
  AnimatedReduxCIcon,
  AnimatedReduxSagaCIcon,
  AnimatedWebRTCIcon,
  AnimatedWebpackIcon,
  AnimatedStyledComponentsIcon,
  AnimatedJestIcon,
  AnimatedMaterialUiIcon,
  AnimatedBootstrapIcon,
} from "../../components/animated-tech-icons";

import {
  techIconsContainer,
  fadeInOut,
} from "../../animations/framer-animations";
import { useScroll } from "../../animations/useScroll";

const AboutMe = ({ minimal = true }) => {
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
            {minimal ? (
              <p>
                Hello! My name is <span>Junaid</span> and I am a 
                <span>self-taught Javascript & DevOps developer</span> based in{" "}
                <span>Haripur Pakistan</span>. I love helping businesses and
                individuals make their online presence a smooth and visually
                appealing experience. When I am not coding or learning new
                technologies I spend quality time with my family.
              </p>
            ) : (
              <p>
                My name is <span>Junaid Javed</span>, A self-taught, passionate
                and fast-learner <span>full-stack developer</span> from{" "}
                <span>Pakistan</span>, 🇵🇰 🌎 who&apos;s passionate about{" "}
                <span>open source</span>. I love spending time on little
                details, trying out new stuff and playing with the code/project.
                Furthermore, I’m eager to make a difference and impact. I&apos;m
                a student of undergrad <span>Computer Science</span> 👨‍🎓. I love
                to work with new technologies and developing web / mobile
                applications 🔭. Currently, I am learning <span>DevOps</span>{" "}
                and all of it&apos;s fun stuff to automate Deployment process.
                🔭 I’m currently working on
                <span> React Native & MERN Stack</span>, 🌱 I’m currently
                learning DevOps, Docker, Kubernetes, Jenkins, Terraform,
                Ansible, Nexus, AWS/GCP. 💬 Ask me about #Javascript
                #React.JS/Native #NodeJS
              </p>
            )}
          </motion.div>
        </motion.div>
        <ProfficientWithArrow minimal={minimal} className="text-and-arrow" />
        <motion.div
          className="grid-icons-container"
          variants={techIconsContainer}
          initial="hidden"
          animate={controls}
          ref={element}
        >
          <AnimatedJavaScriptIcon className="javascript-icon" />
          <AnimatedReactIcon className="react-icon" />
          <AnimatedReduxCIcon className="npm-icon" />
          <AnimatedReduxSagaCIcon className="npm-icon" />
          <AnimatedReactNativeIcon className="npm-icon" />
          <AnimatedNodejsIcon className="npm-icon" />
          <AnimatedSqlIcon className="npm-icon" />
          <AnimatedNoSqljsIcon className="npm-icon" />
          <AnimatedNextIcon className="next-icon" />
          <AnimatedTailwindIcon className="sass-icon" />

          {!minimal && (
            <>
              <AnimatedSassIcon className="sass-icon" />
              <AnimatedCss3Icon className="css3-icon" />
              <AnimatedMaterialUiIcon className="npm-icon" />
              <AnimatedBootstrapIcon className="npm-icon" />
              <AnimatedStyledComponentsIcon className="npm-icon" />
              <AnimatedHtml5Icon className="html5-icon" />
              <AnimatedGitIcon className="git-icon" />
              <AnimatedGitHubIcon className="github-icon" />
              <AnimatedNpmIcon className="npm-icon" />
              <AnimatedLinuxIcon className="npm-icon" />
              <AnimatedWebRTCIcon className="npm-icon" />
              <AnimatedWebpackIcon className="npm-icon" />
              <AnimatedJestIcon className="npm-icon" />
              <AnimatedCloudIcon className="npm-icon" />
              <AnimatedDevOpsIcon className="npm-icon" />
            </>
          )}
        </motion.div>
        {minimal && (
          <Link passHref href="/about-me">
            <p className="view-more">View more ➡</p>
          </Link>
        )}
      </motion.div>
      <SectionWave secondary />
    </section>
  );
};

export default AboutMe;
