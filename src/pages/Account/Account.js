import React from 'react'
import Navbar from './Navbar'
import { Dashboard } from './Dashboard'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './account.css'


export const Account = () => {
    return (
        <div className='account'>
            <Navbar>
                <Routes>
                    <Route path='dashboard' element={<Dashboard/>}/>
                </Routes>
            </Navbar>
        </div>
    )
}
