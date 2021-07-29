import { motion } from "framer-motion";

import Header from "../header";
import SectionWave from "../section-wave";
import GithubLink from "../github-link";
import LinkedInLink from "../linkedin-link";
import ResumeLink from "../resume-link";

import {
  heroTextAnimation,
  heroTextContainer,
  heroImageAnimations,
  leftLinksAnimations,
} from "../../animations/framer-animations";

import {
  HeroSectionWaveAnimation,
  HeroSectionWaveAnimationMobile,
} from "../../components/hero-section-wave-animation";

const HeroSection = () => {
  return (
    <section id="home" className="hero-component">
      <Header />
      <div className="hero-section">
        <div className="content-container">
          <motion.div
            className="content"
            variants={heroTextContainer}
            initial="hidden"
            animate="show"
          >
            <motion.p className="p-hello" variants={heroTextAnimation}>
              HELLO, I&#39;m
            </motion.p>
            <motion.h1 variants={heroTextAnimation}>Mr,</motion.h1>
            <motion.h1 className="big" variants={heroTextAnimation}>
              JUNAID JAVED
            </motion.h1>
            <motion.p className="p-front" variants={heroTextAnimation}>
              Full-Stack Developer
            </motion.p>
          </motion.div>
        </div>
        <div className="hero-image-container">
          <motion.span
            variants={heroImageAnimations}
            initial="hidden"
            animate="show"
          >
            <motion.img
              className="hero-image lazyload"
              src="/assets/MyPhotoPNG.png"
              alt="Junaid Javed - website owner and creator"
              variants={heroImageAnimations}
              initial="hidden"
              animate="show"
            />
          </motion.span>
        </div>
      </div>

      <HeroSectionWaveAnimation secondary />
      <HeroSectionWaveAnimation />
      <HeroSectionWaveAnimationMobile />

      <motion.div
        className="fixed-links"
        variants={leftLinksAnimations}
        initial="hidden"
        animate="show"
      >
        <GithubLink hoverRight variants={leftLinksAnimations} />
        <LinkedInLink hoverRight variants={leftLinksAnimations} />
        <ResumeLink hoverRight variants={leftLinksAnimations} />
      </motion.div>
      <SectionWave className="section-wave-hero" />
    </section>
  );
};

export default HeroSection;
