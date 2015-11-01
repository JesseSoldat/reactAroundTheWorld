//Libraries
import Backbone from 'backbone';
import React from 'react';
import ReactDom from 'react-dom';

//Views
import {
  HomeComponent,
  DetailComponent, 
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

  returnHome(){
    console.log('returnHome');
  },
  addPic(){
    console.log('addPic');
  },
  formatData(data) {
    console.log(data);

  },
  
  render() { 
    return (
     <div className="homeWrapper"> 

      <div className="nav">
      <ul>
      <li onClick={() => this.returnHome()}><h2>Hello World</h2></li>
      <li onClick={() => this.addPic()}> <h2>New Image</h2></li>
      <li><h2><a href="http://jessesoldatfirstsite.bitballoon.com/">My World</a></h2></li>
      </ul>
     </div>

     <div className="homePictures">{this.props.getData.map(this.formatData)}</div>

    </div> 
     
      ) //end of return
    
  } //end of render()

}); //end of export default