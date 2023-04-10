import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Layout from './pages/Layout';
import { Account } from './pages/Account/Account';
import Login from './pages/Account/Login';
import Registation from './pages/Account/Registration';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element= {<Account />}/>
            <Route path='home/*' element={<Account />}/>
            <Route path='login' element={<Login />}/>
            <Route path='register' element={<Registation />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
