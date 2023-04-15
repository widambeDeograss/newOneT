import React from "react";
import Navbar from "./Navbar";
import Dashboard from "./Dashboard";
import { Routes, Route } from "react-router-dom";
import "./account.css";
import { Books } from "./Books";
import Footer from "./Footer";

export const Account = ({userdata}) => {
  console.log(userdata)
  return (
    <div className="account">
      <Navbar/>
        <Routes>
          <Route path="" element={<Dashboard />} />
          <Route path="books/*" element={<Books userdata={userdata} />} />
        </Routes>
        {/* <Footer className="footer" /> */}
    </div>
  );
};
