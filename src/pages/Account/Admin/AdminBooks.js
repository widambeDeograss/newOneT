import React from "react";
import { BookList } from "../BookList";
import { BooksUrls } from "../../../utils/Config";
import { useDataFetch } from "../../../hooks/DataHook";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import AddBooks from "./AddBooks";


const AdminBooks = () => {
  const [Books, setBooks] = React.useState([])
  const fetcher = useDataFetch()
  // const books = ["art", "science", "history", "Geography"];
 
  const loadData = async () => {
    const response = await fetcher.fetch({url: BooksUrls.allBooks});
    console.log(response);
    if(response){
      setBooks(response);
    }
}

React.useEffect(() => {
    loadData();
}, []);


  return (
    <div>
      <Tabs value={1}>
        <TabsHeader>
          <Tab key={1} value={1}>
            {"Books"}
          </Tab>
          <Tab key={2} value={2}>
            {"AddBook"}
          </Tab>
        </TabsHeader>
        <TabsBody>
          <TabPanel key={1} value={1}>
            <BookList data={Books} />
          </TabPanel>

          <TabPanel key={2} value={2}>
            <AddBooks />
          </TabPanel>
        </TabsBody>
      </Tabs>
    </div>
  );
};

export default AdminBooks;
