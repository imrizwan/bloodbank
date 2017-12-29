import React, { Component } from 'react'
import Donateform from './donateForm'
import Search from './search';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';

export default class Dashboard extends Component {
  render () {
    return (
      <Router>
      <div>
              <center>
              <Link to="/dashboard/donateform"><button className="btn btn-primary btn-lg" style={{width: "500px", margin: "20px"}}>Register a new Donor</button></Link>
              <Link to="/dashboard/search"><button className="btn btn-primary btn-lg" style={{ width: "500px", margin: "20px" }}>Search Donors</button></Link>
              </center>
          <Route path="/dashboard/donateform" component={Donateform} />
          <Route path="/dashboard/search" component={Search} />
        </div>
      </Router>
    )
  }
}