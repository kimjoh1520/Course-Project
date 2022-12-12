import React, { Component } from "react";
import {
  Route, Routes,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Debut from "./Debut";
import Fearless from "./Fearless";
 
class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>Taylor Swiftt</h1>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/Debut">Debut</NavLink></li>
            <li><NavLink to="/Fearless">Fearless</NavLink></li>

          </ul>
          <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route path="/Debut" element={<Debut />}/>
            <Route path="/Fearless" element={<Fearless />}/>

          </Routes>

             
          </div>
        </div>
      </HashRouter>
    );
  }
}
 
export default Main;