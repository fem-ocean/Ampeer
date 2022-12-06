import Header from "./Components/Header";
import {React, useState} from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from "./Components/Home";
import PropertyInfo from "./Components/PropertyInfo";
import AdminLogin from "./Admin/AdminLogin";
// import AdminAddProperty from "./Admin/AdminAddProperty";
import AdminAddProperty from "./Admin/AdminAddProperty3";
import Adminhome from "./Admin/Adminhome";
import { Provider } from 'react-redux';
import store from "./Store/store";
import HeaderFirebase from "./Components/HeaderFirebase";

function App(props) {

  
  return (
    <Provider store={store}>
    <Router basename="/">
        
        <div className="App">
          {/* <Header /> */}
          <HeaderFirebase />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/info/:id" element={<PropertyInfo />} /> 
            <Route path="/adminlogin" element={<AdminLogin />} /> 
            {/* Adding Property With SQL and ASP.NET */}
            {/* <Route path="/adminlogin/addprop" element={<AdminAddProperty />} />  */}
            {/* Adding Property With the help of Cloudinary SQL and ASP.NET */}
            {/* <Route path="adminlogin/addprop2" element={<AdminAddProperty />} />  */}
            {/* Adding Property With Firebase */}
            <Route path="adminlogin/addprop3" element={<AdminAddProperty />} /> 
            <Route path="adminlogin/home" element={<Adminhome />} />
          </Routes>
          

        </div>
      

    </Router>
    </Provider>
      
    
  );
}

export default App;
