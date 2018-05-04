import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './component/Dashboard/Dashboard.js'
import Form from './component/Form/Form.js'
import Header from './component/Header/Header.js'

import axios from 'axios';

class App extends Component {
 constructor(){
   super();

   this.state ={
    inventory: []
};
}

componentDidMount() {
  axios.get('/api/inventory').then((response) => {
    this.setState({ input: response.data })
  })

 }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
         <Dashboard/> 
      <Form/>
      <Header/>
      </div>
    );
  }
}

export default App;
