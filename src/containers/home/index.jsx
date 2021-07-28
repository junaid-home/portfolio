import { motion } from "framer-motion";
import style from "./styles.module.scss";
import { pageAnimation } from "../../animations/framer-animations";
import {
  HeroSection,
  AboutMeSection,
  ProjectsSection,
  ContactSection,
  Footer,
} from "../../components";

const Home = () => {
  return (
    <div className={style.homepage}>
      <motion.div
        className={style.content}
        variants={pageAnimation}
        initial="hidden"
        animate="show"
        exit="exit"
      />
      <HeroSection />
      <AboutMeSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Home;
