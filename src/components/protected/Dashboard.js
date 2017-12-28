import React, { Component } from 'react'
import Donateform from './donateForm'
import Search from './search';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import 'bootstrap/dist/css/bootstrap.css';


const style = {
  margin: 12,
};

export default class Dashboard extends Component {
  render () {
    return (
      <Router>
      <div>
        <MuiThemeProvider>
              <center>
              <Link to="/dashboard/donateform"><button className="btn btn-primary btn-lg" style={{width: "500px", margin: "20px"}}>Register a new Donor</button></Link>
              <Link to="/dashboard/search"><button className="btn btn-primary btn-lg" style={{ width: "500px", margin: "20px" }}>Search Donors</button></Link>
              </center>
        </MuiThemeProvider>
          <Route path="/dashboard/donateform" component={Donateform} />
          <Route path="/dashboard/search" component={Search} />
        </div>
      </Router>
    )
  }
}