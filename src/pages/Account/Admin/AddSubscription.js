import React, { useState, useEffect } from "react";
import Select from "react-select";
import {
  Textarea,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Button,
  Option,
} from "@material-tailwind/react";
import { setAlert, toggleAlert } from "../../../api/store/appStateSlice";
import { UserUrls, BooksUrls } from "../../../utils/Config";
import { useDataFetch } from "../../../hooks/DataHook";
import { useDispatch } from "react-redux";
import { useFormPost } from "../../../hooks/FormHook";

export const AddSubscription = () => {
  const fetcher = useDataFetch();
  const [Books, setBooks] = React.useState([]);
  const [usersList, setusersList] = useState();
  const formPost = useFormPost()
  const dispatch = useDispatch()
  

  const loadData = async () => {
    const arr = [];
    const book_arr = [];
    const response = await fetcher.fetch({ url: UserUrls.AllUserCostomers });
    const book_responce = await fetcher.fetch({ url: BooksUrls.allBooks });
    response.map((user) => {
      return arr.push({ value: user.id, label: user.username });
    });
    book_responce.data.map((book) => {
      return book_arr.push({ value: book.id, label: book.title });
    });
    if (response && book_responce) {
      setusersList(arr);
      setBooks(book_arr);
    }
  };
  React.useEffect(() => {
    loadData();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const body = {
      user:data.get('user'),
      book:data.get('book'),
      price:data.get('price'),
    }
    console.log(body);
    try {
      let severity = "info";
      const response = await formPost.post({url:BooksUrls.BookSubscription , data: body});
      console.log(response);
      if (response.header.responseCode === 0) {
        dispatch(setAlert({message:"subscription added" , severity: severity}));
      dispatch(toggleAlert());
      }
    } catch (error) {
      console.log(error);
    }
    event.target.reset();
  }


  return (
    <Card className="bg-white">
      <form onSubmit={handleSubmit}>
        <div className="text-lg font-medium leading-6 text-gray-900 px-6 mt-4 ">
          Add Subscription
        </div>
        <CardBody className="px-6 py-3 mt-2">
          <p className="text-sm text-gray-500">
            Subscription are made after payment has been successfully submitted.
          </p>
          <div className=" extra-input">
            <Select
              placeholder="Select an individual"
              name="user"
              options={usersList}
              required 
              // isMulti
            />
          </div>
          <div className="extra-input">
            <Select
              placeholder="Select an individual"
              name="book"
              options={Books}
              // isMulti
            />
          </div>
          <div className=" extra-input">
            <Input label=" Book Price" type="number" name="price"required />
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
