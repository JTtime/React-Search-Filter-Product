import React, {useState} from "react";
import './App.css';
import { MyContext } from "./Components/MyContext";
import SideBar from './Components/SideBar';
import "./Components/components.css";
import Main from "./Components/Main"


function App() {
  const [productsData, setProductsData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  return (
    <MyContext.Provider value={{ productsData, setProductsData, filteredData, setFilteredData }}>
    <div className="App">
      <SideBar/>
      <Main/>
    </div>
    </MyContext.Provider>
  );
}

export default App;
