import React, { Component } from "react";
import {
  Route, Routes,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Debut from "./Debut";
import Fearless from "./Fearless";
import SpeakNow from "./SpeakNow";
import Red from "./Red";
import Nineteen from "./Nineteen";
import Reputation from "./Reputation"
import Lover from "./Lover";
import Folklore from "./Folklore";
import Evermore from "./Evermore";
import Midnights from "./Midnights";
 
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
            <li><NavLink to="/SpeakNow">SpeakNow</NavLink></li>
            <li><NavLink to="/Red">Red</NavLink></li>
            <li><NavLink to="/Nineteen">Nineteen</NavLink></li>
            <li><NavLink to="/Reputation">Reputation</NavLink></li>
            <li><NavLink to="/Lover">Lover</NavLink></li>
            <li><NavLink to="/Folklore">Folklore</NavLink></li>
            <li><NavLink to="/Evermore">Evermore</NavLink></li>
            <li><NavLink to="/Midnights">Midnights</NavLink></li>

          </ul>
          <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route path="/Debut" element={<Debut />}/>
            <Route path="/Fearless" element={<Fearless />}/>
            <Route path="/SpeakNow" element={<SpeakNow />}/>
            <Route path="/Red" element={<Red />}/>
            <Route path="/Nineteen" element={<Nineteen />}/>
            <Route path="/Reputation" element={<Reputation />}/>
            <Route path="/Lover" element={<Lover />}/>
            <Route path="/Folklore" element={<Folklore />}/>
            <Route path="/Evermore" element={<Evermore />}/>
            <Route path="/Midnights" element={<Midnights />}/>

          </Routes>
          <div class="footer">
  <p>Kimberly Johnson Lab CIS453 Project</p>
</div>
             
          </div>
        </div>
      </HashRouter>

      
    );
  }
}
 
export default Main;