import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import {
  Square3Stack3DIcon,
  UserCircleIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/solid";
import { AddSubscription } from "./AddSubscription";
import Subscriptions from "./Subscriptions";
 

export const AssignBooks = () => {
    const data = [
        {
          label: "Subscriptions",
          value: "dashboard",
          icon: Square3Stack3DIcon,
          desc: <Subscriptions/>
        },
        {
          label: "Add",
          value: "profile",
          icon: UserCircleIcon,
          desc: <AddSubscription/>
        }
      ];
      return (
        <Tabs value="dashboard">
          <TabsHeader>
            {data.map(({ label, value, icon }) => (
              <Tab key={value} value={value}>
                <div className="flex items-center gap-2">
                  {React.createElement(icon, { className: "w-5 h-5" })}
                  {label}
                </div>
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody>
            {data.map(({ value, desc }) => (
              <TabPanel key={value} value={value}>
                {desc}
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
      );
}

