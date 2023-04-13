import { useState } from 'react';
import PdfViewer from './PdfViewer';
import DocPdf from './somefile.pdf'
import ReactPDF from '@react-pdf/renderer';


const Book = () => {

	return (
		<div>
			{ReactPDF.render(<PdfViewer />, `./somefile.pdf`)}
		</div>
	);
};

export default Book;