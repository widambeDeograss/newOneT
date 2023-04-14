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
        className="W-72"
        style={{ display: "flex!important", flexDirection: "row" }}
      >
        <CardBody className="flex flex-col gap-4">
          <div className="w-72 extra-input">
            <Input label="Title" />
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

          <Button className="extra-input">Button</Button>
        </CardBody>

        <CardFooter className="pt-0">
          <p>
            It is essential to understand that bandwidth is not the same as
            speed. Bandwidth refers to the maximum amount of data that can be
            transmitted over a network connection, while speed refers to the
            actual rate at which data is transmitted. In other words, bandwidth
            is like the width of a pipe, and speed is like the amount of water
            flowing through the pipe. A network connection with a high bandwidth
            does not necessarily mean that data will be transmitted quickly.
            Other factors such as latency, packet loss, and network congestion
            can affect the actual speed of data transmission. Bandwidth can be
            measured in several ways, depending on the context. The most common
            measurement units are bits per second (bps), kilobits per second
            (Kbps), megabits per second (Mbps), and gigabits per second (Gbps).
            In some cases, bandwidth is also measured in bytes per second (Bps),
            where a byte is equal to eight bits. For example, a network
            connection with a bandwidth of 1 Gbps can transmit up to 125
            megabytes per second (MBps).
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default AddBooks;
