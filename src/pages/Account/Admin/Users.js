import React from "react";
import { BookList } from "../BookList";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import AddBooks from "./AddBooks";
import { UsersList } from "./usersList";
import AddUser from "./AddUser";


export const Users = () => {
  return (
    <div>
         <div>
      <Tabs value={1}>
        <TabsHeader>
          <Tab key={1} value={1}>
            {"Users"}
          </Tab>
          <Tab key={2} value={2}>
            {"Add Users"}
          </Tab>
        </TabsHeader>
        <TabsBody>
          <TabPanel key={1} value={1}>
            <UsersList  />
          </TabPanel>

          <TabPanel key={2} value={2}>
            <AddUser />
          </TabPanel>
        </TabsBody>
      </Tabs>
    </div>
    </div>
  )
}
