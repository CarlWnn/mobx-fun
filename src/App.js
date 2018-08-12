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

        <IceCreamForm/>

        <h2> Title: {this.props.store.filterString}-{this.props.store.filteredArrayCount}-
        {this.props.store.iceCreamsCount} </h2>

        { !(this.props.store.isfiltered) && <ul>
                {this.props.store.iceCreams.map( (iceCream, i)=> <li k={i}> {iceCream.flavor}, {iceCream.color}
                <button onClick={this.deleteClick}> delete</button></li>)}
        </ul> }

        { this.props.store.isfiltered && <ul>
                {this.props.store.filteredArray.map( (item, i)=> <li k={i}> {item.flavor}, {item.color}
                <button onClick={this.deleteClick}> delete</button></li>)}
        </ul> }

      </div>
    );
  }
}

export default App;
