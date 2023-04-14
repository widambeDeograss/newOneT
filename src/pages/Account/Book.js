import React,  { useState, useEffect } from 'react';
import PdfViewer from './pdfView/PdfViewer';
import { Document, Page, pdfjs } from "react-pdf";




const Book = () => {
	
	return (
		<div>
			 <PdfViewer />
		</div>
	)
};

export default Book;