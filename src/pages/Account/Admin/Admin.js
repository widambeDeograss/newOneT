import React from 'react'
import Navbar from './AdminNavbar'
import AdminBooks from './AdminBooks'
import AdminDashboard from './AdminDashboard'
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";

const Admin = () => {
    return (
        <div>
            <Navbar>
                <Routes>
                    <Route path='' element={<AdminDashboard />} />
                    <Route path='Admin-books/*' element={<AdminBooks />} />
                </Routes>
            </Navbar>
        </div>
    )
}

export default Admin