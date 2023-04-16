import React,  { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from "react-pdf";
import pdf from './Netwoc perfomance on transMed Report.pdf'
import SinglePagePDFViewer from './PdfSinglePage'
import "./pdfV.css";
import { baseUrl } from '../../../appState/baseUrl';


// Create Document Component
const PdfViewer = (props) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const pdfUrl = baseUrl + props.pdfUrl

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
    <SinglePagePDFViewer pdf={pdfUrl} />
    <hr />
  </div>
  );
  };

export default PdfViewer;