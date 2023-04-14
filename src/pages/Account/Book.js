import React,  { useState, useEffect } from 'react';
import PdfViewer from './pdfView/PdfViewer';
import { Document, Page, pdfjs } from "react-pdf";




const Book = (props) => {
	
	return (
		<div>
			 <PdfViewer pdfUrl={props.data}/>
		</div>
	)
};

export default Book;