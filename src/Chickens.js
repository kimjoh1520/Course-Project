import React, { Component } from "react";
import ChickenPhoto from './ChickenPhoto.js'

 
class Chickens extends Component {
  render() {
    return (
      <div>
        <h2>CHICKENS</h2>
        <p>
            <ChickenPhoto/>
        </p>
      </div>
    );
  }
}
 
export default Chickens;