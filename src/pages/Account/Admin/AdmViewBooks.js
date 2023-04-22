import React from "react";
import BookCard from "../Components/BookCard";
import TeamCard from "../Components/team-card";
import { Button, Typography } from "@material-tailwind/react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack5";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import loading from "../../../Assets/output-onlinegiftools.gif";
import { baseUrl } from "../../../utils/baseUrl";
import { useFormPost } from "../../../hooks/FormHook";
import { BooksUrls } from "../../../utils/Config";

export const AdmBookList = ({ data, isLoading }) => {
  const [numPages, setNumPages] = React.useState(null);
  const [pageNumber, setPageNumber] = React.useState(1);
  const formPost = useFormPost();

  //setting 1 to show fisrt page

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }
  if (isLoading) {
    return (
      <div>
        <div className="text-center px-4 py-8 " style={{ minHeight: "300px" }}>
          <img
            src={loading}
            class="mx-auto w-10 "
            style={{ backgroundColor: "transparent", alignItems: "center" }}
          />
          <Typography className="mt-2" muted small>
            loading your books..
          </Typography>
        </div>
      </div>
    );
  }
  if (!data || !data.length) {
    return (
      <div>
        <div className="text-center px-4 py-8">
          <Typography className="mt-2" muted small>
            There is no Books currently!...
          </Typography>
        </div>
      </div>
    );
  }
  const handle_delete = async (id) => {
    try {
      alert("comfirm delete");
      const response = await formPost.deleteRequest({
        url: BooksUrls.SingleBook + id,
      });
      console.log(response);
      //  loadData();
    } catch (error) {
      alert(error.message);
      console.log(error);
    }
  };

  return (
    <div>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {data?.map((eachbook) => (
            <div className="grid grid-cols-1">
              <a
                href={baseUrl + eachbook.book}
                className="group"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "center",
                }}
              >
                <TeamCard
                  key={eachbook.title}
                  img={baseUrl + eachbook.image}
                  name={eachbook.title}
                />
                {/* <LandCard
                       key={eachbook.book.title}
                       img={eachbook.book.image}
                       name={eachbook.book.title}/> */}
                {/* <h2 className="mt-4 text-lg text-gray-700">{eachbook.book.title}</h2> */}
                {/* <p className="mt-1 text-lg font-medium text-gray-900">{eachbook.price+' Tsh'}</p> */}
              </a>
              <Button
                color="red"
                className="text-center"
                onClick={() => {
                  handle_delete(eachbook.id);
                }}
              >
                Delete Book
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
