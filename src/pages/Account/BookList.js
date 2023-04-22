import React from 'react';
import BookCard from './Components/BookCard';
import TeamCard from './Components/team-card';
import {baseUrl} from '../../utils/baseUrl';
import { Typography } from '@material-tailwind/react'
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css"
import loading from '../../Assets/output-onlinegiftools.gif';



export const BookList = ({ data,isLoading }) => {
  const [numPages, setNumPages] = React.useState(null);
  const [pageNumber, setPageNumber] = React.useState(1); 
  //setting 1 to show fisrt page

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }
  if (isLoading) {
    return(
        <div>
        <div className="text-center px-4 py-8 " style={{minHeight:'300px'}}>
            <img src={loading} class="mx-auto w-10 " style={{backgroundColor:'transparent', alignItems:'center'}}/>
            <Typography className="mt-2" muted small>
                  loading your books..
              </Typography>
        </div>
      </div>
    );
  }
  
  if (!data || !data.length) {
      return(
          <div>
          <div className="text-center px-4 py-8">
              <Typography className="mt-2" muted small>
                  You haven't subscribed to any book currently!...
              </Typography>
          </div>
        </div>
      );
    }
   
  
    return (
        <div>

            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="sr-only">Products</h2>
                <div className=" grid grid-cols-1 gap-12 gap-x-24 md:grid-cols-2 xl:grid-cols-4">
                    {data?.map((eachbook) => (
                        <>
                        <a href={'books/' + eachbook.book.title} className="group" style={{display:'flex',flexDirection:'column',textAlign:'center'}}>
                        <TeamCard
                         key={eachbook.book.title}
                         img={eachbook.book.image}
                         name={eachbook.book.title}
                       />       
                       {/* <LandCard
                       key={eachbook.book.title}
                       img={eachbook.book.image}
                       name={eachbook.book.title}/> */}
                            {/* <h2 className="mt-4 text-lg text-gray-700">{eachbook.book.title}</h2> */}
                            {/* <p className="mt-1 text-lg font-medium text-gray-900">{eachbook.price+' Tsh'}</p> */}
                        </a>
                        </>
                    ))}
                </div>
            </div>

        </div>

    )
}

