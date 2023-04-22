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
import Footer from "./Footer";


export const Books = ({userdata}) => {
  const fetcher = useDataFetch()
  const [isLoading, setisLoading] = React.useState(false);
  const [UnSubscribedBooks, setUnSubscribedBooks] = React.useState([]);
  
  const [subscribedBooks, setSubscribedBooks] = React.useState([]);

  const loadData = async () => {
     setisLoading(true);
      const response = await fetcher.fetch({url: BooksUrls.allBooks});
      const subresponse = await fetcher.fetch({url: BooksUrls.AllSubscriptions});
      console.log(response);
      console.log(subresponse); 
      if(response){
        setUnSubscribedBooks(response.data);
        setSubscribedBooks(subresponse);
        setisLoading(false);
      }
  }

  React.useEffect(() => {
      loadData();
  }, []);

  // const { data: subscribedBooks, isLoading } = useGetUserbooksQuery({id:user.id});
  // const { data: books, isLoading:loadUnSubBooks } = useGetAllbooksQuery();
  // console.log(subscribedBooks);

  return (
    <div style={{position:"relative", top:"90px",zIndex:3}} >

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
                  {"All Books"}
                </Tab>
              </TabsHeader>
              <TabsBody>
                <TabPanel key={1} value={1}>
                  <BookList data={subscribedBooks} isLoading={isLoading}/>
                </TabPanel>

                <TabPanel key={2} value={2}>
                  <Unbook data={UnSubscribedBooks} isLoading={isLoading} />
                </TabPanel>
              </TabsBody>
            </Tabs>
          }
        />
        {subscribedBooks?.map((each) => (
          <Route key={each.id} path={`/${each.book.title}`}
           element={<Book data={each.book.book} />} />
        ))}
      </Routes>
      
    </div>
  );
};
