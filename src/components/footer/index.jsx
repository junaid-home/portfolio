import NavLink from "../navlink";

const Footer = ({ backgroundSecondary }) => (
  <div
    className={`${
      backgroundSecondary ? "footer background-secondary" : "footer"
    }`}
  >
    <div className="top">
      <ul className="footer-menu-list">
        <NavLink footer to="/">
          Home
        </NavLink>
        <NavLink footer to="/about-me">
          About Me
        </NavLink>
        <NavLink footer to="/projects">
          Projects
        </NavLink>
        <NavLink footer to="/contact">
          Contact
        </NavLink>
      </ul>
      <div className="contact-details">
        <p>Junaid Javed</p>
        <p>Haripur, Pakistan</p>
        <p>jj123dev@gmail.com</p>
        <p>+92 332 05 11 497</p>
      </div>
    </div>
    <div className="bottom">
      <p>Copyright ©2021 Junaid Javed. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
