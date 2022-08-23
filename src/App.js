import Header from "./Components/Header";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from "./Components/Home";
import PropertyInfo from "./Components/PropertyInfo";

function App(props) {
  
  
  
  
  
  
  return (
    <Router>
        
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/info" element={<PropertyInfo />} /> 
          </Routes>

        </div>

    </Router>

      
    
  );
}

export default App;
