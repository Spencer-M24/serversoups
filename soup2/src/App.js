
  
import React, { Component } from 'react';
import Login from './components/LogIn'
import Register from './components/Register'
import Inventory from './components/Inventory'
import ViewInventory from './components/ViewInventory'
import Authenticate from './components/Authenticate'
import './App.css';
import { Route } from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Login />
        <Route path ="/register" component = {Register}/>
        <Route path = "/display" component = {ViewInventory} />
        <Route path = "/inventory" component = {Inventory} />
      </div>
    );
  }
}
// wrapped by authenciton up top class app exends the div classname app to 16-23 line

const Wrapper = Authenticate(App)

export default Wrapper;