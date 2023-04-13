import './App.css';
import { MyContext } from "./Components/MyContext";
import SideBar from './Components/SideBar';
import "./Components/components.css";
import Main from "./Components/Main"


function App() {
  return (
    <MyContext.Provider>
    <div className="App">
      <SideBar/>
      <Main/>
    </div>
    </MyContext.Provider>
  );
}

export default App;
