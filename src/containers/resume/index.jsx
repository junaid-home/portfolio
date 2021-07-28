import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Document, Page, pdfjs } from "react-pdf";
import style from "./styles.module.scss";
import {
  Header,
  CustomButton as Button,
  GithubLink,
  LinkedInLink,
  ResumeLink,
} from "../../components";

import {
  pageAnimation,
  leftLinksAnimations,
} from "../../animations/framer-animations";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function ResumePdf() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const pdfWrapperRef = useRef();

  const handleNextPage = () => {
    if (pageNumber < numPages) {
      setPageNumber((prev) => prev + 1);
    }
  };

  const handlePrevPage = () => {
    if (pageNumber > 1) {
      setPageNumber((prev) => prev - 1);
    }
  };

  function onDocumentLoadSuccess({ numPages }) {
    setPageNumber(1);
    setNumPages(numPages);
  }

  return (
    <React.Fragment>
      <motion.section
        className={`${style.projectsPage} resume-pdf`}
        variants={pageAnimation}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <Header backgroundSecondary />
        <div className="pdf-container" ref={pdfWrapperRef}>
          <div className="info-section">
            <p>
              Page <span style={{ color: "#fec576" }}>{pageNumber}</span> of{" "}
              <span style={{ color: "#fec576" }}>{numPages}</span>
            </p>
          </div>
          <Document
            className="custom-class-name-1"
            file="/assets/resume.pdf"
            onLoadSuccess={onDocumentLoadSuccess}
          >
            <Page
              pageNumber={pageNumber}
              width={
                pdfWrapperRef.current?.getBoundingClientRect().width ||
                undefined
              }
            />
          </Document>
          <div className="buttons-contiainer">
            <Button margin eye text="Prev Page" onClick={handlePrevPage} />
            <Button margin eye text="Next Page" onClick={handleNextPage} />
          </div>
        </div>
        <div className={style.fixedLinksProjectsPage}>
          <GithubLink hoverRight variants={leftLinksAnimations} />
          <LinkedInLink hoverRight variants={leftLinksAnimations} />
          <ResumeLink hoverRight variants={leftLinksAnimations} />
        </div>
      </motion.section>
    </React.Fragment>
  );
}

export default ResumePdf;
