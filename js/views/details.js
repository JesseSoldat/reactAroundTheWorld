//Libraries
import Backbone from 'backbone';
import React from 'react';
import ReactDom from 'react-dom';
import $ from 'jquery';

//Views
import {
  HomeComponent,
  DetailsComponent, 
  EditComponent,
  AddComponent,
  SpinnerComponent,
  
} from '../views';

//Models/Collections
import {
  PictureModel,
  PicturesCollection
} from '../resources';


export default React.createClass({
  
  render() { 
    return (
      <div className="nav">
      <ul>
      <li> <h2>Hello World</h2></li>
      <li> <h2>New Image</h2></li>
      <li><h2><a href="http://jessesoldatfirstsite.bitballoon.com/">My World</a></h2></li>
      </ul>
    </div>
     
      ) //end of return
    
  } //end of render()

}); //end of export default