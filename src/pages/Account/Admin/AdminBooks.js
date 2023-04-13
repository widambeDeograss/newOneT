import React from 'react'
import { BookList } from '../BookList';
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";
import AddBooks from './AddBooks';

const AdminBooks = () => {

    const books = ['art', 'science', 'history','Geography',]
    return (
        <div>

            <Tabs value={1}>
                <TabsHeader>

                    <Tab key={1} value={1}>
                        {'Books'}
                    </Tab>
                    <Tab key={2} value={2}>
                        {'AddBook'}
                    </Tab>
                </TabsHeader>
                <TabsBody>
                    <TabPanel key={1} value={1}>
                        <BookList data={books} />
                    </TabPanel>

                    <TabPanel key={2} value={2}>
                        <AddBooks />
                    </TabPanel>

                </TabsBody>
            </Tabs>
        </div>)
}

export default AdminBooks