import React, { Component } from "react";
import {
  Route, Routes,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Chickens from "./Chickens";

 
class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>2.5 Performance Assessment</h1>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/Chickens">Chickens</NavLink></li>

          </ul>
          <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route path="/chickens" element={<Chickens />}/>

          </Routes>
          </div>
        </div>
      </HashRouter>
    );
  }
}
 
export default Main;