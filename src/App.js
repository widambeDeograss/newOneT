import './App.css';
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './api/store/store';
import Layout from './pages/Layout';
import {Account} from './pages/Account/Account'
import Login from './pages/Sign/Login'
import Registation from './pages/Sign/Registration'
import Admin from './pages/Account/Admin/Admin';
import RequireAuth from './api/auth/RequireAuth';


function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element= {<Account />}/>
            {/* <Route element={<RequireAuth/>}> */}
            <Route path='account/*' element={<Account />}/>
            <Route path='admin/*' element={<Admin/>}/>
            {/* </Route> */}
            <Route path='login' element={<Login />}/>
            <Route path='register' element={<Registation />}/>
          </Route>
        </Routes>
      </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
