import React, { Component } from "react";
import RedComp from './RedComp'
 
class Red extends Component {
  render() {
    return (
      <div>
        <h2><b>Red</b></h2>
        <p>2012 </p>
        <RedComp />
 
        
      </div>
    );
  }
}
 
export default Red;