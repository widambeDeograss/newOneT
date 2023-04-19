import React from 'react'
import BookCard from './Components/BookCard'
import Book from './Book'
import {baseUrl} from '../../utils/baseUrl'
import { Typography } from '@material-tailwind/react'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5';
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css"


export const BookList = ({ data }) => {
    const [numPages, setNumPages] = React.useState(null);
  const [pageNumber, setPageNumber] = React.useState(1); 
  //setting 1 to show fisrt page

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }
  if (!data || !data.length) {
      return(
          <div>
          <div className="text-center px-4 py-8">
              <Typography className="mt-2" muted small>
                  There is no Books currently!...
              </Typography>
          </div>
        </div>
      );
    }
  
    return (
        <div>
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="sr-only">Products</h2>
                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {data?.map((eachbook) => (
                        <a href={'books/' + eachbook.book.title} className="group" style={{display:'flex',flexDirection:'column',textAlign:'center'}}>
                            <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                                <img src={eachbook.book.image}  alt="forex books" class="h-[20rem] w-[100%] object-fit object-center group-hover:opacity-75" />
                            </div>        
                            <h2 className="mt-4 text-lg text-gray-700">{eachbook.book.title}</h2>
                            {/* <p className="mt-1 text-lg font-medium text-gray-900">{eachbook.price+' Tsh'}</p> */}
                        </a>
                    ))}
                </div>
            </div>

        </div>

    )
}

