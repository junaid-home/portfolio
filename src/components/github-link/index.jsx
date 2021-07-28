const GithubLink = ({ hoverRight }) => {
  return (
    <a
      className="github-link-wrapper"
      href="https://github.com/junaid-home/"
      rel="noreferrer"
      target="_blank"
    >
      <div
        className={`${
          hoverRight
            ? "github-link-container hover-right"
            : "github-link-container"
        }`}
      >
        <p className="github-link-content">Github</p>
        <img
          className="github-logo"
          src="/assets/icons/githubLogo.svg"
          alt="github-logo"
        />
      </div>
    </a>
  );
};

export default GithubLink;
