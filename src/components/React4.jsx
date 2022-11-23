import React, { Component } from 'react'
import './style.css'
export default class React4 extends Component {
    click = (event) => {
        console.log('Button click');
      };
     
  render() {
    return (
      <button onClick={this.click}>React4</button>
    )
  }
}
