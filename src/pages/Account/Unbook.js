import React from 'react'
import BookCard from './Components/BookCard'
import Book from './Book'
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css"
import { Fragment, useState } from "react";
import { baseUrl } from "../../utils/baseUrl";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack5";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
// import "./unbook.css";


export const Unbook = ({ data }) => {
    const name = ["june", "jane", "trim"];
    const [open, setOpen] = useState(false);
  
    const handleOpen = () => setOpen(!open);
  
    return (
      <div>
        <div
          className={
            open
              ? "extm"
              : "mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8"
          }
        >
          <h2 className={open ? "extm" : "sr-only"}>Products</h2>
          <div
            className={
              open
                ? "extm"
                : "grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
            }
          >
            {data?.map((eachbook) => (
              <Fragment>
                <div
                  onClick={handleOpen}
                  className="group"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    textAlign: "center",
                  }}
                >
                  <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                    <img
                      src={baseUrl+eachbook.image} 
                      alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                      class="h-[20rem] w-[100%] object-fit object-center group-hover:opacity-75"
                    />
                  </div>
  
                  <h2 className="mt-4 text-lg text-gray-700">{"BOOK"}</h2>
                  <p className="mt-1 text-lg font-medium text-gray-900">
                    {"10000" + " Tsh"}
                  </p>
                </div>
                <Dialog open={open} handler={handleOpen} className="diag">
                  <DialogHeader>subscription.</DialogHeader>
                  <DialogBody
                    divider
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      textAlign: "center",
                    }}
                  >
                    Dear User, Thank you for your interest in our book.
                    Unfortunately, To buy the book, please contact our
                    administrator by sending an email to {"admin@novusprime.io"}{" "}
                    or by calling {"0755116600"}. Our administrator will assist
                    you with the purchase process and provide you with any further
                    information you may need. We hope you enjoy the book and find
                    it valuable.
                  </DialogBody>
                  <DialogFooter>
                    <Button
                      variant="text"
                      color="red"
                      onClick={handleOpen}
                      className="mr-1"
                    >
                      <span>Cancel</span>
                    </Button>
                    <Button variant="gradient" color="green" onClick={handleOpen}>
                      <span>Confirm</span>
                    </Button>
                  </DialogFooter>
                </Dialog>
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    );
}

