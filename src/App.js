import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Layout from "./pages/Layout";
import { Account } from "./pages/Account/Account";
import Login from "./pages/Sign/Login";
import Registation from "./pages/Sign/Registration";
import Admin from "./pages/Account/Admin/Admin";
import RequireAuth from "./api/auth/RequireAuth";
import { CustomAlertBar } from "./pages/Account/Components/Alerts";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <CustomAlertBar/>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Account />} />
            <Route element={<RequireAuth />}>
              <Route path="account/*" element={<Account />} />
              <Route path="admin/*" element={<Admin />} />
            </Route>
            <Route path="login" element={<Login  />} />
            <Route path="register" element={<Registation />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
