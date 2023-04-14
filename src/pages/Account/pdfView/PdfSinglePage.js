import React, { useState } from "react";
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5';
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css"
import { Button,Typography  } from "@material-tailwind/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleLeft, faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";

export default function SinglePage(props) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1); //setting 1 to show fisrt page

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset) {
    setPageNumber(prevPageNumber => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  const { pdf } = props;

  return (
    <div>
      <div >
      </div>
      <Document
        file={pdf}
        options={{ workerSrc: "/pdf.worker.js" }}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} scale={1}/>
      </Document>
      <div className="flex w-max gap-4 p-4">
      <Typography className="text-sm font-medium text-gray-900">
          Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
        </Typography>
        <div className="flex w-max gap-4">
        <Button type="button" size="sm" disabled={pageNumber <= 1} onClick={previousPage}>
          Previous <FontAwesomeIcon icon={faArrowCircleLeft} />
        </Button>
        <Button
          type="button"
          disabled={pageNumber >= numPages}
          onClick={nextPage}
          size="sm"
        >
          Next <FontAwesomeIcon icon={faArrowAltCircleRight} />
        </Button>
        </div>
        </div>
      
    </div>
  );
}