import Header from "./Components/Header";
import {React, useState} from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from "./Components/Home";
import PropertyInfo from "./Components/PropertyInfo";
import AdminLogin from "./Admin/AdminLogin";
// import AdminAddProperty from "./Admin/AdminAddProperty";
import AdminAddProperty from "./Admin/AdminAddProperty2";
import Adminhome from "./Admin/Adminhome";
import { UserProvider } from "./Components/userContext";
import { Provider } from 'react-redux';
import store from "./Store/store";

function App(props) {

  
  return (
    <Provider store={store}>
    <Router basename="/">

      
        
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/info/:id" element={<PropertyInfo />} /> 
            <Route path="/adminlogin" element={<AdminLogin />} /> 
            {/* <Route path="/adminlogin/addprop" element={<AdminAddProperty />} />  */}
            <Route path="adminlogin/addprop2" element={<AdminAddProperty />} />
            <Route path="adminlogin/home" element={<Adminhome />} />
          </Routes>
          

        </div>
      

    </Router>
    </Provider>
      
    
  );
}

export default App;
