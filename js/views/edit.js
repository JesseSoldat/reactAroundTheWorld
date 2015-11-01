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
  //------------------------------------------
  editPic(id){
    console.log('editPic info');
    this.props.onSub2(id);
  },
  //------------------------------------------

  render(id) { 
    return (
      <div className="addWrapper"> 

      <div className="nav">
      <ul>
      <li onClick={() => this.returnHome()}><h2>Hello World</h2></li>
      <li onClick={() => this.addPic()}> <h2>New Image</h2></li>
      <li><h2><a href="http://jessesoldatfirstsite.bitballoon.com/">My World</a></h2></li>
      </ul>
     </div>

     <div className="formWrapper">
      <h1>Edit the Picture</h1>
      <form className="form">

        <div className="labelInputWrapper">
          <label>Picture Name:</label> 
          <input type="text" className="inputName2"></input>
        </div><br/><br/>
          
        <div className="labelInputWrapper">
          <label className="labelUser">User Name:</label> 
          <input type="text" className="inputUser2"></input>
        </div><br/><br/>
        
        <div className="labelInputWrapper">
          <label>Picture Location:</label> 
          <input type="text" className="inputLocation2"></input>
        </div><br/><br/>

        <div className="labelInputWrapper">
          <label>Description:</label>
          <textarea type="text" className="inputDescription2"></textarea>
        </div><br/>
         <button onClick={() => this.editPic(id)}>Edit Picture</button>
      </form> 
     </div>

   </div> 
      ) //end of return
    
  } //end of render()

}); //end of export default