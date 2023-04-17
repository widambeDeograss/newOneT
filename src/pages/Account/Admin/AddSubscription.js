import React from "react";
import {
  Textarea,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Select,
  Button,
  Option,
} from "@material-tailwind/react";

export const AddSubscription = () => {
  return (
    <Card className="bg-white">
      <form>
        <div className="text-lg font-medium leading-6 text-gray-900 px-6 mt-4 ">
          Add Subscription
        </div>
        <CardBody className="px-6 py-3 mt-2">
          <p className="text-sm text-gray-500">
           Subscription are made after payment has been successfully submitted.
          </p>
          <div className=" extra-input">
            <Select label="Select User">
              <Option>Material Tailwind HTML</Option>
              <Option>Material Tailwind React</Option>
              <Option>Material Tailwind Vue</Option>
              <Option>Material Tailwind Angular</Option>
              <Option>Material Tailwind Svelte</Option>
            </Select>
          </div>
          <div className="extra-input">
            <Select label="Select Book">
              <Option>Material Tailwind HTML</Option>
              <Option>Material Tailwind React</Option>
              <Option>Material Tailwind Vue</Option>
              <Option>Material Tailwind Angular</Option>
              <Option>Material Tailwind Svelte</Option>
            </Select>
          </div>

          {/* <div className=" extra-input">
            <Textarea label="Book Descption" />
          </div>
          <div className=" extra-input">
            <Input label=" Book Price" />
          </div> */}
          <div className=" extra-input">
            <Input label=" Book Price" type="number"/>
          </div>
        </CardBody>
        <CardFooter className="bg-gray-50 px-6 py-4 sm:flex sm:flex-row-reverse">
          <Button
            className="w-full sm:ml-3 sm:w-auto"
            // disabled={loading}
            // loading={loading}
            type="submit"
          >
            Submit
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};
