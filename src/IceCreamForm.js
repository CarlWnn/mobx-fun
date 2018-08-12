import React, { Component } from 'react';
import {observer, inject} from "mobx-react";
import {observable, action} from "mobx";
import store from './store/IceCreamStore';

//  @inject (allStores=> ({
//      addIceCream:allStores.store.addIceCream,
//        filterString: allStores.store.filterString,
//        filterString: allStores.store.filterString,
//  }))

@inject("store")

@observer
export default class IceCreamForm extends Component{

@observable filtered;
@observable iceCream= {flavor:'', color:''};

@action inputChange=(event)=>{
this.iceCream[event.target.name]= event.target.value;
}

submitForm=(event) =>{
  this.props.store.addIceCream(this.iceCream.flavor, this.iceCream.color );
  this.iceCream.flavor = "";
  this.iceCream.color = "";
}

onFilterChange=(e)=>{
    this.props.store.filterString = e.target.value;
}

onFilterSubmit=()=>{
    this.props.store.isfiltered=true;
}


render(){
 return (
    <div name='container'>

    <h1> Ice Cream Generator </h1>

     <div>
        <input type='text' onChange= {this.onFilterChange }/>
        <input type='button'value='filter' onClick={this.onFilterSubmit} />
    </div>

    <br/>
        <input type='text' name='flavor' placeholder='flavor' onChange={this.inputChange} value={this.iceCream.flavor} /> 
        <input type='text' name='color' placeholder='color' onChange={this.inputChange} value={this.iceCream.color}/> 
        <input type='button' onClick={this.submitForm} value='submit'/>

     </div>
 );
}

}

