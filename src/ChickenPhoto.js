import React, { Component } from 'react';
import photo from './photo.jpg'

export default class ChickenPhoto extends Component {

  render() {
    return(
      <div className="instructions">
        <img alt="these are chickens" src={photo} />
      </div>
    )
  }
}