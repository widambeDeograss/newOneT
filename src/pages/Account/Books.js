import React from "react";
import { Routes, Route } from "react-router-dom";
import Book from "./Book";
import { BookList } from "./BookList";
import { useSelector } from "react-redux";
import { selectCurrentToken, selectCurrentUser } from "../../api/auth/AuthSlice";
import { BooksUrls } from "../../utils/Config";
import { useDataFetch } from "../../hooks/DataHook";
import { Unbook } from "./Unbook";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";


export const Books = ({userdata}) => {
  const fetcher = useDataFetch()
  // const books = ['data']
  const [UnSubscribedBooks, setUnSubscribedBooks] = React.useState([]);
  
  const [subscribedBooks, setSubscribedBooks] = React.useState([]);
  const user = JSON.parse(useSelector(selectCurrentUser));

  const loadData = async () => {
      const response = await fetcher.fetch({url: BooksUrls.allBooks});
      const subresponse = await fetcher.fetch({url: BooksUrls.UserSubscribedBooks + '1' });
      // console.log(response);
      if(response){
        setUnSubscribedBooks(response);
        setSubscribedBooks(subresponse);
      }
  }

  React.useEffect(() => {
      loadData();
  }, []);

  // const { data: subscribedBooks, isLoading } = useGetUserbooksQuery({id:user.id});
  // const { data: books, isLoading:loadUnSubBooks } = useGetAllbooksQuery();
  // console.log(subscribedBooks);

  return (
    <div>
      <Routes>
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
                  <BookList data={subscribedBooks} />
                </TabPanel>

                <TabPanel key={2} value={2}>
                  <Unbook data={UnSubscribedBooks} />
                </TabPanel>
              </TabsBody>
            </Tabs>
          }
        />
        {subscribedBooks?.map((each) => (
          <Route key={each.id} path={`/${each.title}`}
           element={<Book data={each.book} />} />
        ))}
      </Routes>
    </div>
  );
};
