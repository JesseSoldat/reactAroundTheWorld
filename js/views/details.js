//Libraries
import Backbone from 'backbone';
import React from 'react';
import ReactDom from 'react-dom';
import $ from 'jquery';
//------------------------------------------

//Views
import {
  HomeComponent,
  DetailsComponent, 
  EditComponent,
  AddComponent,
  SpinnerComponent,
  
} from '../views';
//------------------------------------------

//Models/Collections
import {
  PictureModel,
  PicturesCollection
} from '../resources';

//------------------------------------------

export default React.createClass({
//------------------------------------------

  returnHome(){
    // console.log('returnHome');
    this.props.onHome();
  },
  //------------------------------------------

  addPic(){
    // console.log('addPic');
    this.props.onAdd();
  },
  
  render() { 
    return (
     <div className="detailWrapper"> 
      <div className="nav">
        <ul>
        <li onClick={() => this.returnHome()}><h2>Hello World</h2></li>
        <li onClick={() => this.addPic()}> <h2>New Image</h2></li>
        <li><h2><a href="http://jessesoldatfirstsite.bitballoon.com/">My World</a></h2></li>
        </ul>
      </div>
      <div className="singleContentWrapper">
        <div className="singleImgWrapper">
          <img className="singleImg" src={this.props.image.URL}/>
        </div> 


        <div className="detailInfo">
          <h3>Name: {this.props.image.Name}</h3>
          <h3>User: {this.props.image.User}</h3>
          <h3>@ {this.props.image.Location}</h3>
          <p>{this.props.image.Description}</p>
        </div>

      </div>   

    </div>  
     

      ) //end of return
    
  } //end of render()

}); //end of export default