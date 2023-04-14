import React,  { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from "react-pdf";
import pdf from './Netwoc perfomance on transMed Report.pdf'
import SinglePagePDFViewer from './PdfSinglePage'
import "./pdfV.css";


// function AllPages(props) {
//   const [numPages, setNumPages] = useState(null);

//   function onDocumentLoadSuccess({ numPages }) {
//     setNumPages(numPages);
//   }

//   const { pdf } = props;

//   return (
//     <Document
//       file={pdf}
//       options={{ workerSrc: "/pdf.worker.js" }}
//       onLoadSuccess={onDocumentLoadSuccess}
//     >
//       {Array.from(new Array(numPages), (el, index) => (
//         <Page key={`page_${index + 1}`} pageNumber={index + 1} />
//       ))}
//     </Document>
//   );
// }


// Create Document Component
const PdfViewer = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
      // for the contextmenu event
      pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
      const handleContextMenu = (e) => {
        // prevent the right-click menu from appearing
        e.preventDefault()
      }
  
      // attach the event listener to 
      // the document object
      document.addEventListener("contextmenu", handleContextMenu)
  
      // clean up the event listener when 
      // the component unmounts
      return () => {
        document.removeEventListener("contextmenu", handleContextMenu)
      }
    });
    
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className='pdfContainer'>
    <SinglePagePDFViewer pdf={pdf} />
    <hr />
  </div>
  );
  };

export default PdfViewer;