import React, { Component } from 'react';
import {observer, inject} from "mobx-react";
import {observable, action} from "mobx";
import store from './store/IceCreamStore';

@inject (allStores=> ({
    addIceCream:allStores.store.addIceCream
}))

@observer
export default class IceCreamForm extends Component{
  
@observable iceCream= {flavor:'', color:''};

@action inputChange=(event)=>{
this.iceCream[event.target.name]= event.target.value;
}

submitForm=(event) =>{
  this.props.addIceCream(this.iceCream.flavor, this.iceCream.color );
  this.iceCream.flavor = "";
  this.iceCream.color = "";
}

render(){
 return (
     <div name='container'>
        <input type='text' name='flavor' onChange={this.inputChange} value={this.iceCream.flavor}/> 
        <input type='text' name='color' onChange={this.inputChange} value={this.iceCream.color}/> 
        <input type='button' onClick={this.submitForm} value='submit'/>
     </div>
 );
}

}

