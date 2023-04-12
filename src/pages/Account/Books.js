import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Book from './Book';
import { BookList } from './BookList';

import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";


export const Books = () => {

    const datam = [
        {
            label: "HTML",
            value: "html",
            desc: `It really matters and then like it really doesn't matter.
          What matters is the people who are sparked by it. And the people 
          who are like offended by it, it doesn't matter.`,
        },
        {
            label: "React",
            value: "react",
            desc: `Because it's about motivating the doers. Because I'm here
          to follow my dreams and inspire other people to follow their dreams, too.`,
        },
    ];

    const data = [
        {
            path: "jack",

        },
        {
            path: "tom",

        }
    ];

    const Subscribed = ['candle','makertmover']

    const UnSubscribed = ['art', 'science', 'history','Geography',]

    return (
        <div>

            <Tabs value={1}>
                <TabsHeader>
                    
                        <Tab key={1} value={1}>
                            {'Subscribed'}
                        </Tab>
                        <Tab key={2} value={2}>
                            {'UnSubscribed'}
                        </Tab>
                </TabsHeader>
                <TabsBody>
    
                        <TabPanel key={1} value={1}>
                                <BookList data={Subscribed}/>
                        </TabPanel>

                        <TabPanel key={2} value={2}>
                            <BookList data={UnSubscribed}/>
                        </TabPanel>

                </TabsBody>
            </Tabs>
           
        </div>
    )
}


