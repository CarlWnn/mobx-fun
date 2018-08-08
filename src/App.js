import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import store from './store/IceCreamStore';
import {observer, inject} from "mobx-react";
import IceCreamForm from './IceCreamForm'

@inject ('store')
@observer
class App extends Component {

  deleteClick=(e)=>{
    this.props.store.iceCreams.splice(e.target.k,1);
  }


  render() {
    return (
      <div className="App">

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <IceCreamForm/>

        <ul>
          {this.props.store.iceCreams.map( (iceCream, i)=> <li k={i}> {iceCream.flavor}, {iceCream.color}
          <button onClick={this.deleteClick}> delete</button></li>)}
        </ul>

      </div>
    );
  }
}

export default App;
