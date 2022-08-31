import Header from "./Components/Header";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from "./Components/Home";
import PropertyInfo from "./Components/PropertyInfo";
import AdminLogin from "./Admin/AdminLogin";
import AdminAddProperty from "./Admin/AdminAddProperty";

function App(props) {
  
  
  
  
  
  
  return (
    <Router basename="/">
        
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/info" element={<PropertyInfo />} /> 
            <Route path="/adminlogin" element={<AdminLogin />} /> 
            <Route path="/adminlogin/addprop" element={<AdminAddProperty />} /> 
          </Routes>
          

        </div>

    </Router>

      
    
  );
}

export default App;
