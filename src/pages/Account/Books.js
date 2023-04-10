import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Book  from './Book';
import { BookList } from './BookList';


export const Books = () => {

    const data =  [
        {
         path: "jack",

        },
        {
         path: "tom",

        }
    ];

    return (
        <div>
            <Routes>
                <Route index element= {<BookList data={data} />}/>
                {data.map((eachbook) => (
                    <Route path={eachbook.path} element={<Book data={eachbook} />} />
                ))}
            </Routes>
        </div>
    )
}
