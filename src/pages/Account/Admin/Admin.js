import React from 'react'
import Navbar from './AdminNavbar'
import AdminBooks from './AdminBooks'
import AdminDashboard from './AdminDashboard'
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import { Users } from './Users';
import { AssignBooks } from './AssignBooks';

const Admin = () => {
    return (
        <div>
            <Navbar>
                <Routes>
                    <Route path='' element={<AdminDashboard />} />
                    <Route path='Admin-books/*' element={<AdminBooks />} />
                    <Route path='users/*' element={<Users />} />
                    <Route path='assignBooks-to-user/*' element={<AssignBooks />} />
                </Routes>
            </Navbar>
        </div>
    )
}

export default Admin