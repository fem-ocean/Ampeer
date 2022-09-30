import Header from "./Components/Header";
import {React, useState} from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from "./Components/Home";
import PropertyInfo from "./Components/PropertyInfo";
import AdminLogin from "./Admin/AdminLogin";
import AdminAddProperty from "./Admin/AdminAddProperty";
import Adminhome from "./Admin/Adminhome";
import { UserProvider } from "./Components/userContext";

function App(props) {
  
  
  

  
  return (
    <Router basename="/">
        
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/info/:id" element={<PropertyInfo />} /> 
            <Route path="/adminlogin" element={<AdminLogin />} /> 
            <Route path="/adminlogin/addprop" element={<AdminAddProperty />} /> 
            <Route path="adminlogin/home" element={<Adminhome />} />
          </Routes>
          

        </div>

    </Router>

      
    
  );
}

export default App;
