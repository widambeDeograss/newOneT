import React from 'react'
import BookCard from './Components/BookCard'
import Book from './Book'
import {baseUrl} from '../../appState/baseUrl'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5';
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css"


export const BookList = ({ data }) => {
    const [numPages, setNumPages] = React.useState(null);
  const [pageNumber, setPageNumber] = React.useState(1); //setting 1 to show fisrt page

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

    return (
        <div>
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="sr-only">Products</h2>
                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {data?.map((eachbook) => (
                        <a href={'books/' + eachbook.title} className="group">
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg  xl:aspect-h-8 xl:aspect-w-7">
                                <Document
                                    file={ baseUrl + eachbook.book}
                                    options={{ workerSrc: "/pdf.worker.js" }}
                                    onLoadSuccess={onDocumentLoadSuccess}
                                >
                                    <Page pageNumber={1} scale={1} height={250} width={150}  classNameName="h-full w-full object-cover object-center group-hover:opacity-75"/>
                                </Document>
            
                            </div>
                            <h3 className="mt-4 text-sm text-gray-700">{eachbook.title}</h3>
                            <p className="mt-1 text-lg font-medium text-gray-900">{eachbook.price}</p>
                        </a>
                    ))}
                </div>
            </div>

        </div>

    )
}
