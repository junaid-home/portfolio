const CustomButton = ({
  text,
  center,
  eye,
  code,
  isLink,
  LinkTo,
  margin,
  download,
  primary,
  onClick = () => {},
  ...otherProps
}) => {
  const classes = center
    ? `custom-button center ${margin ? "side-margin" : ""}`
    : `custom-button ${margin ? "side-margin" : ""}`;

  return isLink ? (
    <a
      className="link-to-project"
      rel="noreferrer"
      href={`${LinkTo}`}
      target="_blank"
      onClick={onClick}
    >
      <button className={classes} {...otherProps}>
        {eye && (
          <img
            width="100%"
            height="100%"
            src="/assets/icons/eyeIcon.svg"
            className="eye-icon lazyload"
            alt="Eye Icon"
          />
        )}
        {code && (
          <img
            width="100%"
            height="100%"
            src="/assets/icons/CodeIcon.svg"
            className="code-icon lazyload"
            alt="Code Icon"
          />
        )}
        {download && (
          <img
            width="100%"
            height="100%"
            src="/assets/icons/download.svg"
            className="code-icon lazyload"
            alt="Code Icon"
          />
        )}
        {text}
      </button>
    </a>
  ) : (
    <button
      onClick={onClick}
      style={primary && { background: "#f64c72" }}
      className={classes}
      {...otherProps}
    >
      {eye && (
        <img
          width="100%"
          height="100%"
          src="/assets/icons/eyeIcon.svg"
          className="eye-icon lazyload"
          alt="Eye Icon"
        />
      )}
      {code && (
        <img
          width="100%"
          height="100%"
          src="/assets/icons/CodeIcon.svg"
          className="code-icon lazyload"
          alt="Code Icon"
        />
      )}
      {download && (
        <img
          width="100%"
          height="100%"
          src="/assets/icons/download.svg"
          className="code-icon lazyload"
          alt="Code Icon"
        />
      )}
      {text}
    </button>
  );
};

export default CustomButton;
