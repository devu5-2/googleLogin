import './App.css'
import Homepage from "./components/homepage/homepage"
import Login from "./components/login/login"
import {  Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Routes>
          <Route exact path="/" element={<Login />}/>
            <Route path="/homepage" element={<Homepage />}/>
        </Routes>
    </div>
  );
}

export default App;
