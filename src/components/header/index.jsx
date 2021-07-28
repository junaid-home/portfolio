import { useState } from "react";

import NavLink from "../navlink";
import BurgerMenuButton from "../burger-menu-button";

import { motion } from "framer-motion";
import { headerAnimations } from "../../animations/framer-animations";

const Header = ({ backgroundSecondary, backgroundPrimary }) => {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <motion.nav
      className={`${backgroundPrimary ? "nav nav-background-primary" : "nav"} ${
        backgroundSecondary ? "nav nav-background-secondary" : "nav"
      }`}
      variants={headerAnimations}
      initial="hidden"
      animate="show"
    >
      <div className="logo">
        Portfo<span>lio.</span>
      </div>
      <menu className="menu">
        <ul className={showLinks ? "hidden" : ""}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about-me">About Me</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/resume">Resume</NavLink>
        </ul>
      </menu>
      <BurgerMenuButton setshowLinks={setShowLinks} showLinks={showLinks} />
    </motion.nav>
  );
};

export default Header;
