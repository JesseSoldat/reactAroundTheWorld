//Libraries
import Backbone from 'backbone';
import React from 'react';
import ReactDom from 'react-dom';
import $ from 'jquery';
//-----------------------------------
//Views
import {
  HomeComponent,
  DetailsComponent, 
  EditComponent,
  AddComponent,
  SpinnerComponent,
  
} from './views';
//-----------------------------------
//Models/Collections
import {
  PictureModel,
  PicturesCollection
} from './resources';
//-----------------------------------
export default Backbone.Router.extend({

  routes: {
    ""            : "showHome",
    "details/:id" : "showDetails",
    "edit"        : "showEdit",
    "add"         : "showAdd",
    
  }, //end of routes
//-----------------------------------
  initialize(appElement) {
    this.el = appElement; 

    this.collection = new PicturesCollection(); 
  }, //end of initialize()
//-----------------------------------
  goto(route) {
    this.navigate(route, {
      trigger: true
    });
  },
//-----------------------------------
  render(component) {
    ReactDom.render(component, this.el);
  },
//-----------------------------------
  start() {
    Backbone.history.start();
    return this;
  }, //end of start()
//-----------------------------------
  showSpinner(){
    this.render(
      <SpinnerComponent/>);
  }, //end of showSpinner()
//-----------------------------------
  showHome(){
    this.showSpinner();

    this.collection.fetch().then(() =>{
      let data = this.collection.toJSON();
      console.log(data);

    this.render(
      <HomeComponent
      getData={data}
      onHome={() => this.goto('')}
      onDetails={(id) => this.goto('details/' + id)}
      onAdd={() => this.goto('add')}/>
      );//end of render
   }); //end of fetch
  }, //end of showHome()
//-----------------------------------
  showDetails(){
    this.render(
      <DetailsComponent
       onHome={() => this.goto('')}
       onAdd={() => this.goto('add')}/>
       );
  }, //end of showDetails()
//-----------------------------------
  showEdit(){
    this.render(
      <EditComponent
      onHome={() => this.goto('')}
      onAdd={() => this.goto('add')}/>);
  }, //end of showEdit()
//-----------------------------------
  showAdd(){
    this.render(
      <AddComponent
      onHome={() => this.goto('')}
      onAdd={() => this.goto('add')}/>);

  }, //end of showAdd()
//-----------------------------------

}); //end export default   
