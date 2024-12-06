import './App.css'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import MainLayout from './components2/MainLayout';
import Login from './components2/Login';
import Registration from './components2/Registration';
import Dashboard from './components2/Dashboard';
import { useState } from 'react';


function App() {
  const [store ,setStore]=useState("");

  return (
    <>
    <div>
      {JSON.stringify(store)}
      <BrowserRouter>
      <Routes>

        <Route path="/" element={<MainLayout/>}>
          <Route path="/login" element={<Login regDataLogin={store}/>}/>
          <Route path="/registration" element={<Registration regData={setStore}/>}/>
          {/* <Route path="/dashboard" element={<Dashboard/>}/> */}
        </Route>
      </Routes>

      <Routes>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  
    </>
  )
}

export default App
