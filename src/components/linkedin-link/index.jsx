const LinkedInLink = ({ hoverRight }) => {
  return (
    <a
      className="linkedin-link-wrapper"
      rel="noreferrer"
      href="https://www.linkedin.com/"
      target="_blank"
    >
      <div
        className={`${
          hoverRight
            ? "linkedin-link-container hover-right"
            : "linkedin-link-container"
        }`}
      >
        <p className="linkedin-link-content">LinkedIn</p>
        <img
          className="linkedin-logo"
          src="/assets/icons/LinkedinLogo.svg"
          alt="github-logo"
        />
      </div>
    </a>
  );
};

export default LinkedInLink;
