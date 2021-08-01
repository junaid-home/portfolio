import Link from "next/link";

function ResumeLink({ hoverRight }) {
  return (
    <Link href="/resume" passHref>
      <a className="resume-link-wrapper">
        <div
          className={`${
            hoverRight
              ? "resume-link-container hover-right"
              : "resume-link-container"
          }`}
        >
          <p className="resume-link-content">Resume</p>
          <img
            className="resume-logo lazyload"
            src="/assets/icons/ResumeIcon.svg"
            alt="github-logo"
          />
        </div>
      </a>
    </Link>
  );
}
export default ResumeLink;
