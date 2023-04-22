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
  Typography
} from "@material-tailwind/react";
import AddBooks from "./AddBooks";
import { AdmBookList } from "./AdmViewBooks";
import { Route, Routes } from "react-router-dom";
import Book from "../Book";
import { baseUrl } from "../../../utils/baseUrl";
import PdfViewer from "../pdfView/PdfViewer";


const AdminBooks = () => {
  const [Books, setBooks] = React.useState([]);
  const [isLoading, setisLoading] = React.useState(false);

  const fetcher = useDataFetch();
  // const books = ["art", "science", "history", "Geography"];

  const loadData = async () => {
    setisLoading(true)
    const response = await fetcher.fetch({ url: BooksUrls.allBooks });
    if (response) {
      setBooks(response.data);
      setisLoading(false)
    }
  };

  React.useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <Routes>
        <Route
          path=""
          element={
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
                  <AdmBookList data={Books} isLoading={isLoading}/>
                </TabPanel>

                <TabPanel key={2} value={2}>
                  <AddBooks />
                </TabPanel>
              </TabsBody>
            </Tabs>
          }
        />

        {Books?.map((each) => {

          <Route
            key={each.id}
            path={baseUrl + each.book}
            element={<Book data={baseUrl + each.book} />}
          />;
          {console.log(baseUrl + each.book)}
        })}
      </Routes>
    </div>
  );
};

export default AdminBooks;
