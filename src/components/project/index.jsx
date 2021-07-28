import { motion, AnimatePresence } from "framer-motion";

import TechNameBox from "../tech-name-box";
import CustomButton from "../custom-button";

const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};
const projectContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delay: 0.5 },
  },
};

function Project({
  showProject,
  setProject,
  description,
  imageLink,
  title,
  tags,
  liveLink = false,
  codeLink,
}) {
  return (
    <AnimatePresence exitBeforeEnter>
      {showProject && (
        <motion.div
          className="backdrop"
          variants={backdrop}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="project-ztm"
            variants={projectContainer}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <img className="screenshot" src={imageLink} alt="project image" />
            <div className="details">
              <div className="x-button" onClick={() => setProject(false)}>
                <img src="/assets/icons/xIcon.svg" alt="exit icon" />
              </div>
              <h2 className="project-title">
                <span>{title[0]}</span>
                {title.slice(1)}
              </h2>
              <img
                className="screenshot-mobile"
                src={imageLink}
                alt="project image"
              />
              <div className="tech-stack">
                {tags.map((tag, index) => (
                  <TechNameBox text={tag} key={tag + index} />
                ))}
              </div>
              <p className="project-description">{description}</p>
              <div className="project-details-buttons">
                {liveLink && (
                  <CustomButton eye isLink LinkTo={liveLink} text="demo" />
                )}

                <CustomButton code isLink LinkTo={codeLink} text="code" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Project;
