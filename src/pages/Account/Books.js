import React from "react";
import { Routes, Route } from "react-router-dom";
import Book from "./Book";
import { BookList } from "./BookList";
import { useSelector } from "react-redux";
import { selectCurrentToken, selectCurrentUser } from "../../api/auth/AuthSlice";
import { useGetAllbooksQuery } from "../../api/books/bookApiSlice"; 

import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

export const Books = () => {
  const Subscribed = ["candle", "makertmover"];
  const [UnSubscribedBooks, setUnSubscribedBooks] = React.useState([]);
  const UnSubscribed = ["art", "science", "history", "Geography"];

  const { data: books, isLoading:loadUnSubBooks } = useGetAllbooksQuery();
  console.log(books);

  return (
    <div>
      <Routes>
        {Subscribed.map((each) => (
          <Route key={each} path={`/${each}`} element={<Book data={each} />} />
        ))}

        <Route
          path="/"
          element={
            <Tabs value={1}>
              <TabsHeader>
                <Tab key={1} value={1}>
                  {"Subscribed"}
                </Tab>
                <Tab key={2} value={2}>
                  {"UnSubscribed"}
                </Tab>
              </TabsHeader>
              <TabsBody>
                <TabPanel key={1} value={1}>
                  <BookList data={Subscribed} />
                </TabPanel>

                <TabPanel key={2} value={2}>
                  <BookList data={books} />
                </TabPanel>
              </TabsBody>
            </Tabs>
          }
        />

        {books?.map((each) => (
          <Route key={each.id} path={`/${each.title}`}
           element={<Book data={each.book} />} />
        ))}
      </Routes>
    </div>
  );
};
