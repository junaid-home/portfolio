import { motion } from "framer-motion";

const ReactIcon = "/assets/icons/reactLogo.svg";
const NpmIcon = "/assets/icons/npm.svg";
const GatsbyIcon = "/assets/icons/gatsbyLogo.svg";
const GitHubIcon = "/assets/icons/githubLogo.svg";
const GitIcon = "/assets/icons/gitLogo.svg";
const JavascriptIcon = "/assets/icons/javascriptLogo.svg";
const SassIcon = "/assets/icons/SassLogo.svg";
const Css3Icon = "/assets/icons/Css3Icon.svg";
const Html5Icon = "/assets/icons/Html5Icon.svg";
const NextJSLogo = "/assets/icons/next-js.svg";
const CircleThick = "/assets/icons/Circle.svg";
const TailwindIcon = "/assets/icons/tailwind.svg";
const DevOpsIcon = "/assets/icons/DevOps.jpeg";
const CloudIcon = "/assets/icons/cloud.svg";
const NoSqlIcon = "/assets/icons/nosql.svg";
const SqlIcon = "/assets/icons/sql.jpeg";
const NodejsIcon = "/assets/icons/nodejs.svg";
const WebRTCIcon = "/assets/icons/webrtc.svg";
const WebpackIcon = "/assets/icons/webpack.svg";
const ReduxIcon = "/assets/icons/redux.svg";
const ReduxSagaIcon = "/assets/icons/redux-saga.svg";
const ReactNativeIcon = "/assets/icons/react-native.svg";
const LinuxIcon = "/assets/icons/linux.svg";
const JestIcon = "/assets/icons/jest.svg";
const StyledComponentsIcon = "/assets/icons/styled-components.svg";
const MaterialUiIcon = "/assets/icons/material-ui.svg";
const BootstrapIcon = "/assets/icons/bootstrap.svg";

import { techIcons } from "../../animations/framer-animations";

export const AnimatedReactIcon = () => {
  return (
    <motion.div className="circle-container" variants={techIcons}>
      <img src={CircleThick} alt="Animated Cicle" className="circle lazyload" />
      <img src={ReactIcon} alt="React Logo" className="icon-inside lazyload" />
      <p>REACT JS</p>
    </motion.div>
  );
};

export const AnimatedNpmIcon = () => {
  return (
    <motion.div className="circle-container" variants={techIcons}>
      <img src={CircleThick} alt="Animated Cicle" className="circle lazyload" />
      <img src={NpmIcon} alt="Npm Logo" className="icon-inside lazyload" />
      <p>NPM</p>
    </motion.div>
  );
};
export const AnimatedNextIcon = () => {
  return (
    <motion.div className="circle-container" variants={techIcons}>
      <img src={CircleThick} alt="Animated Cicle" className="circle lazyload" />
      <img src={NextJSLogo} alt="React Logo" className="icon-inside lazyload" />
      <p>Next JS</p>
    </motion.div>
  );
};

export const AnimatedGatsbyIcon = () => {
  return (
    <motion.div className="circle-container" variants={techIcons}>
      <img src={CircleThick} alt="Animated Cicle" className="circle lazyload" />
      <img src={GatsbyIcon} alt="React Logo" className="icon-inside lazyload" />
      <p>Gatsby JS</p>
    </motion.div>
  );
};

export const AnimatedGitHubIcon = () => {
  return (
    <motion.div className="circle-container" variants={techIcons}>
      <img src={CircleThick} alt="Animated Cicle" className="circle lazyload" />
      <img src={GitHubIcon} alt="React Logo" className="icon-inside lazyload" />
      <p>GitHub</p>
    </motion.div>
  );
};

export const AnimatedGitIcon = () => {
  return (
    <motion.div className="circle-container" variants={techIcons}>
      <img src={CircleThick} alt="Animated Cicle" className="circle lazyload" />
      <img src={GitIcon} alt="React Logo" className="icon-inside lazyload" />
      <p>Git</p>
    </motion.div>
  );
};

export const AnimatedJavaScriptIcon = () => {
  return (
    <motion.div className="circle-container" variants={techIcons}>
      <img src={CircleThick} alt="Animated Cicle" className="circle lazyload" />
      <img
        src={JavascriptIcon}
        alt="React Logo"
        className="icon-inside lazyload"
      />
      <p>JavaScript</p>
    </motion.div>
  );
};

export const AnimatedSassIcon = () => {
  return (
    <motion.div className="circle-container" variants={techIcons}>
      <img src={CircleThick} alt="Animated Cicle" className="circle lazyload" />
      <img src={SassIcon} alt="React Logo" className="icon-inside lazyload" />
      <p>Sass</p>
    </motion.div>
  );
};

export const AnimatedCss3Icon = () => {
  return (
    <motion.div className="circle-container" variants={techIcons}>
      <img src={CircleThick} alt="Animated Cicle" className="circle lazyload" />
      <img src={Css3Icon} alt="React Logo" className="icon-inside lazyload" />
      <p>Css 3</p>
    </motion.div>
  );
};

export const AnimatedHtml5Icon = () => {
  return (
    <motion.div className="circle-container" variants={techIcons}>
      <img src={CircleThick} alt="Animated Cicle" className="circle lazyload" />
      <img src={Html5Icon} alt="React Logo" className="icon-inside lazyload" />
      <p>Html 5</p>
    </motion.div>
  );
};

export const AnimatedTailwindIcon = () => {
  return (
    <motion.div className="circle-container" variants={techIcons}>
      <img src={CircleThick} alt="Animated Cicle" className="circle lazyload" />
      <img
        src={TailwindIcon}
        alt="React Logo"
        className="icon-inside lazyload"
      />
      <p>Tailwind</p>
    </motion.div>
  );
};

export const AnimatedDevOpsIcon = () => {
  return (
    <motion.div className="circle-container" variants={techIcons}>
      <img src={CircleThick} alt="Animated Cicle" className="circle lazyload" />
      <img src={DevOpsIcon} alt="React Logo" className="icon-inside lazyload" />
      <p>DevOps</p>
    </motion.div>
  );
};

export const AnimatedCloudIcon = () => {
  return (
    <motion.div className="circle-container" variants={techIcons}>
      <img src={CircleThick} alt="Animated Cicle" className="circle lazyload" />
      <img src={CloudIcon} alt="React Logo" className="icon-inside lazyload" />
      <p>Aws/GCP</p>
    </motion.div>
  );
};

export const AnimatedNodejsIcon = () => {
  return (
    <motion.div className="circle-container" variants={techIcons}>
      <img src={CircleThick} alt="Animated Cicle" className="circle lazyload" />
      <img src={NodejsIcon} alt="React Logo" className="icon-inside lazyload" />
      <p>Node.js</p>
    </motion.div>
  );
};

export const AnimatedSqlIcon = () => {
  return (
    <motion.div className="circle-container" variants={techIcons}>
      <img src={CircleThick} alt="Animated Cicle" className="circle lazyload" />
      <img src={SqlIcon} alt="React Logo" className="icon-inside lazyload" />
      <p>SQL</p>
    </motion.div>
  );
};

export const AnimatedNoSqljsIcon = () => {
  return (
    <motion.div className="circle-container" variants={techIcons}>
      <img src={CircleThick} alt="Animated Cicle" className="circle lazyload" />
      <img src={NoSqlIcon} alt="React Logo" className="icon-inside lazyload" />
      <p>No Sql</p>
    </motion.div>
  );
};

export const AnimatedWebRTCIcon = () => {
  return (
    <motion.div className="circle-container" variants={techIcons}>
      <img src={CircleThick} alt="Animated Cicle" className="circle lazyload" />
      <img src={WebRTCIcon} alt="React Logo" className="icon-inside lazyload" />
      <p>WebRTC</p>
    </motion.div>
  );
};

export const AnimatedWebpackIcon = () => {
  return (
    <motion.div className="circle-container" variants={techIcons}>
      <img src={CircleThick} alt="Animated Cicle" className="circle lazyload" />
      <img
        src={WebpackIcon}
        alt="React Logo"
        className="icon-inside lazyload"
      />
      <p>Webpack</p>
    </motion.div>
  );
};

export const AnimatedReduxCIcon = () => {
  return (
    <motion.div className="circle-container" variants={techIcons}>
      <img src={CircleThick} alt="Animated Cicle" className="circle lazyload" />
      <img src={ReduxIcon} alt="React Logo" className="icon-inside lazyload" />
      <p>Redux</p>
    </motion.div>
  );
};

export const AnimatedReduxSagaCIcon = () => {
  return (
    <motion.div className="circle-container" variants={techIcons}>
      <img src={CircleThick} alt="Animated Cicle" className="circle lazyload" />
      <img
        src={ReduxSagaIcon}
        alt="React Logo"
        className="icon-inside lazyload"
      />
      <p>Redux Saga</p>
    </motion.div>
  );
};

export const AnimatedReactNativeIcon = () => {
  return (
    <motion.div className="circle-container" variants={techIcons}>
      <img src={CircleThick} alt="Animated Cicle" className="circle lazyload" />
      <img
        src={ReactNativeIcon}
        alt="React Logo"
        className="icon-inside lazyload"
      />
      <p>React.Native</p>
    </motion.div>
  );
};

export const AnimatedLinuxIcon = () => {
  return (
    <motion.div className="circle-container" variants={techIcons}>
      <img src={CircleThick} alt="Animated Cicle" className="circle lazyload" />
      <img src={LinuxIcon} alt="React Logo" className="icon-inside lazyload" />
      <p>Linux</p>
    </motion.div>
  );
};

export const AnimatedStyledComponentsIcon = () => {
  return (
    <motion.div className="circle-container" variants={techIcons}>
      <img src={CircleThick} alt="Animated Cicle" className="circle lazyload" />
      <img
        src={StyledComponentsIcon}
        alt="React Logo"
        className="icon-inside lazyload"
      />
      <p>Styled Components</p>
    </motion.div>
  );
};

export const AnimatedJestIcon = () => {
  return (
    <motion.div className="circle-container" variants={techIcons}>
      <img src={CircleThick} alt="Animated Cicle" className="circle lazyload" />
      <img src={JestIcon} alt="React Logo" className="icon-inside lazyload" />
      <p>Jest</p>
    </motion.div>
  );
};

export const AnimatedMaterialUiIcon = () => {
  return (
    <motion.div className="circle-container" variants={techIcons}>
      <img src={CircleThick} alt="Animated Cicle" className="circle lazyload" />
      <img
        src={MaterialUiIcon}
        alt="React Logo"
        className="icon-inside lazyload"
      />
      <p>Material.UI</p>
    </motion.div>
  );
};

export const AnimatedBootstrapIcon = () => {
  return (
    <motion.div className="circle-container" variants={techIcons}>
      <img src={CircleThick} alt="Animated Cicle" className="circle lazyload" />
      <img
        src={BootstrapIcon}
        alt="React Logo"
        className="icon-inside lazyload"
      />
      <p>Bootstrap</p>
    </motion.div>
  );
};
