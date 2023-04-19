import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import pdf from "./Netwoc perfomance on transMed Report.pdf";
import SinglePagePDFViewer from "./PdfSinglePage";
import "./pdfV.css";
import { baseUrl } from "../../../utils/baseUrl";

// Create Document Component
const PdfViewer = (props) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
    const handleContextMenu = (e) => {
      e.preventDefault();
    };

    document.addEventListener("contextmenu", handleContextMenu);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  });


  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      {/* <object
        data={props.pdfUrl}
        width="100%"
        height={"700vh"}
      >
        <iframe
        // sandbox="disallow-download"
          id="fraDisabled"
          src={props.pdfUrl}
          width="100%"
          height={"700vh"}
        >
          <p>This browser does not support PDF!</p>
        </iframe>
      </object> */}
      <div className='unselectable' style={{ width:"100%"}}>
 <SinglePagePDFViewer pdf={props.pdfUrl} />
 <hr />
 </div>  

    </div>
  );
};

export default PdfViewer;

 
