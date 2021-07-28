import { useRef } from "react";

function ResumeLink({ hoverRight }) {
  const formRef = useRef();

  const handleLinkClick = () => {
    formRef.current.submit();
  };

  return (
    <form ref={formRef} method="get" action="/assets/resume.pdf">
      <a onClick={handleLinkClick} className="resume-link-wrapper">
        <div
          className={`${
            hoverRight
              ? "resume-link-container hover-right"
              : "resume-link-container"
          }`}
        >
          <p className="resume-link-content">Resume</p>
          <img
            className="resume-logo"
            src="/assets/icons/ResumeIcon.svg"
            alt="github-logo"
          />
        </div>
      </a>
    </form>
  );
}
export default ResumeLink;
