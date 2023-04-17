import React from "react";
import Navbar from "./Navbar";
import Dashboard from "./Dashboard";
import { Routes, Route } from "react-router-dom";
// import "./account.css";
import { Books } from "./Books";
import Footer from "./Footer";

export const Account = ({userdata}) => {
  return (
    <div className="account">
       <div className=" absolute left-2/4 z-10  -translate-x-2/4 p-4" style={{width:"90%"}}>
      <Navbar/>
         
       </div>
        <Routes>
          <Route path="" element={<Dashboard />} />
          <Route path="books/*" element={<Books />} />
        </Routes>
      
    </div>
  );
};
