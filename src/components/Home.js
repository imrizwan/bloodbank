import React, { Component } from 'react'
import logo from './donors.png';

export default class Home extends Component {
  render () {
    return (
      <div>
        <img src={logo} alt="Blood Donation"/>
        <br/>
        <h1>“Tears of a mother cannot save her child, but your blood can.”</h1>
      </div>
    )
  }
}