// import React, { useState, useEffect } from "react";
// import { Document, Page, pdfjs } from "react-pdf";
// import pdf from "./Netwoc perfomance on transMed Report.pdf";
// import SinglePagePDFViewer from "./PdfSinglePage";
// import "./pdfV.css";
// import { baseUrl } from "../../../utils/baseUrl";

// // Create Document Component
// const PdfViewer = (props) => {
//   const [numPages, setNumPages] = useState(null);
//   const [pageNumber, setPageNumber] = useState(1);

//   useEffect(() => {
//     pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
//     const handleContextMenu = (e) => {
//       e.preventDefault();
//     };

//     document.addEventListener("contextmenu", handleContextMenu);

//     return () => {
//       document.removeEventListener("contextmenu", handleContextMenu);
//     };
//   });


//   function onDocumentLoadSuccess({ numPages }) {
//     setNumPages(numPages);
//   }

//   return (
//     <div>
//       <object
//         data={props.pdfUrl}
//         width="100%"
//         height={"700vh"}
//       >
//         <iframe
//          sandbox=""
//           id="fraDisabled"
//           src={props.pdfUrl}
//           width="100%"
//           height={"700vh"}
//         >
//           <p>This browser does not support PDF!</p>
//         </iframe>
//       </object>
//       {/* <div className='unselectable' >
//  <SinglePagePDFViewer pdf={props.pdfUrl} />
//  <hr />
//  </div>   */}

//     </div>
//   );
// };

// export default PdfViewer;
import { useEffect, useRef } from "react";
// import './pdffile.css'

export default function PdfViewer(props) {
  console.log(props);
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    let instance, PSPDFKit;

    (async function () {
      PSPDFKit = await import("pspdfkit");

      const defaultItems = PSPDFKit.defaultToolbarItems;
      console.log(defaultItems);

      instance = await PSPDFKit.load({
        // Container where PSPDFKit should be mounted.
        container,

        // The document to open.
        document: props.pdfUrl,



        // Use the public directory URL as a base URL. PSPDFKit will download its library assets from here.
        baseUrl: `${window.location.protocol}//${window.location.host}/${process.env.PUBLIC_URL}`,

        // Use the render method to customize the UI and return null for the toolbar component
        render: ({ Toolbar }) => {
          return null;
        },
      });

      const items = instance.toolbarItems;
      instance.setToolbarItems(
        items.filter((item) => {
            if(item.type !== "export-pdf" && item.type !== "print" && item.type !== "document-editor" ){
              return true
            }

        })
      );
    })();

    return () => PSPDFKit && PSPDFKit.unload(container);
  }, []);

  return <div className="pdffile" ref={containerRef} style={{ width: "100%", height: "100vh" }} />;
}
 
