import React,  { useState, useEffect } from 'react';
import PdfViewer from './pdfView/PdfViewer';
import { Document, Page, pdfjs } from "react-pdf";


const Book = (props) => {
	console.log(props.data);
	return (
		<div style={{overflow:'hidden', width:'100%'}}>
			 <PdfViewer pdfUrl={props.data}/>
		</div>
	)
};

export default Book;