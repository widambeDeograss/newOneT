import React from "react";
import {
  Textarea,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";
import "./addbook.css";

const AddBooks = () => {
  return (
    <div>
      <Card
      >
        <CardBody className="flex flex-wrap gap-4" >
          <div className="w-72 extra-input">
            <Input label=" Book Title" />
          </div>

          <div class="mb-3 w-96 extra-input">
            <label
              for="formFileSm"
              class="mb-2 inline-block text-neutral-700 dark:text-neutral-200"
            >
              Upload Book image cover{" "}
            </label>
            <input
              class="relative m-0 block w-full min-w-0 flex-auto cursor-pointer rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-xs font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary W-72"
              id="formFileSm"
              type="file"
            />
          </div>

          <div className="w-72 extra-input">
            <Textarea label="Book Descption" />
          </div>
          <div className="w-72 extra-input">
            <Input label=" Book Price" />
          </div>

          <div class="mb-3 w-96 extra-input">
            <label
              for="formFileSm"
              class="mb-2 inline-block text-neutral-700 dark:text-neutral-200"
            >
              Upload document
            </label>
            <input
              class="relative m-0 block w-full min-w-0 flex-auto cursor-pointer rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-xs font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
              id="formFileSm"
              type="file"
            />
          </div>
          <br/>

          <Button className="extra-input">Add Book</Button>
        </CardBody>

        <CardFooter className="pt-0">
       
        </CardFooter>
      </Card>
    </div>
  );
};

export default AddBooks;
