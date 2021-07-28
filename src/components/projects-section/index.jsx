import { useState } from "react";
import { motion } from "framer-motion";

import SectionWave from "../section-wave";
import CustomButton from "../custom-button";

import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import Project from "../project";

import {
  projectsContainer,
  fadeInOut,
} from "../../animations/framer-animations";

const ProjectsSection = () => {
  const [showEditorProject, setEditorProject] = useState(false);
  const [showEditorLightProject, setEditorLightProject] = useState(false);

  const controls = useAnimation();
  const [element, view] = useInView({ threshold: 0.3 });

  if (view) {
    controls.start("show");
  }

  return (
    <section id="projects" className="projects-section">
      <motion.h2
        variants={fadeInOut}
        initial="hidden"
        animate={controls}
        ref={element}
      >
        <span>P</span>rojects
      </motion.h2>
      <motion.p
        variants={fadeInOut}
        initial="hidden"
        animate={controls}
        ref={element}
      >
        These are my favorite projects I&#39;ve worked on for the past year.
        Have a look around!
      </motion.p>
      <motion.div
        className="grid-container"
        variants={projectsContainer}
        initial="hidden"
        animate={controls}
        ref={element}
      >
        <motion.div
          variants={fadeInOut}
          className="project-small-layout codepad-img" // go to project.css file to update image
        >
          <p className="preview-title">Multiuser Code Editor</p>
          <CustomButton
            text="View Project"
            eye
            onClick={() => setEditorProject(!showEditorProject)}
          />
        </motion.div>
        <motion.div
          variants={fadeInOut}
          className="project-small-layout codepad-img-light" // go to project.css file to update image
        >
          <p className="preview-title">Multiuser Code Editor</p>
          <CustomButton
            text="View Project"
            eye
            onClick={() => setEditorLightProject(!showEditorLightProject)}
          />
        </motion.div>
        <motion.div
          variants={fadeInOut}
          className="project-small-layout codepad-img-light" // go to project.css file to update image
        >
          <p className="preview-title">Multiuser Code Editor</p>
          <CustomButton
            text="View Project"
            eye
            onClick={() => setEditorLightProject(!showEditorLightProject)}
          />
        </motion.div>
        <motion.div
          variants={fadeInOut}
          className="project-small-layout codepad-img" // go to project.css file to update image
        >
          <p className="preview-title">Multiuser Code Editor</p>
          <CustomButton
            text="View Project"
            eye
            onClick={() => setEditorProject(!showEditorProject)}
          />
        </motion.div>
      </motion.div>

      <Project
        showProject={showEditorProject}
        setProject={setEditorProject}
        codeLink="https://github.com/junaid-home/codepad"
        title={`CODEPAD - Multiuser Code Editor`}
        imageLink="/assets/codepad.png"
        tags={[
          "typescript",
          "Context Api",
          "Styled Components",
          "react",
          "Socket.io",
          "Node.js",
          "MongoDB",
          "Express.js",
        ]}
        description={`This is a Multiuser Code Editing project, that features real world multiuser collaborative code editor platform functionalities like realtime code changes, saving tasks to database, invite selected users & reflect active users etc.`}
      />
      <Project
        showProject={showEditorLightProject}
        setProject={setEditorLightProject}
        codeLink="https://github.com/junaid-home/codepad"
        title={`CODEPAD - Multiuser Code Editor`}
        liveLink="http://github.com/junaid-home"
        imageLink="/assets/codepad-light.png"
        tags={[
          "typescript",
          "Context Api",
          "Styled Components",
          "react",
          "Socket.io",
          "Node.js",
          "MongoDB",
          "Express.js",
        ]}
        description={`This is a Multiuser Code Editing project, that features real world multiuser collaborative code editor platform functionalities like realtime code changes, saving tasks to database, invite selected users & reflect active users etc.`}
      />

      <SectionWave />
    </section>
  );
};

export default ProjectsSection;
