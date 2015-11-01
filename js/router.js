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
    "edit/:id"        : "showEdit",
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
      // console.log(data);

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
  showDetails(id){
    let imageClicked = this.collection.get(id);
    
   if (imageClicked) {
    console.log('if');
    this.render(
      <DetailsComponent
       onHome={() => this.goto('')}
       onAdd={() => this.goto('add')}
       OnEdit={() => this.goto('edit/' + id)}
       image={imageClicked.toJSON()}/>
       );
    
   }//if
   else { 
    console.log('else');
    imageClicked = this.collection.add({objectId: id});
    imageClicked.fetch().then(() => {
      this.render(<DetailsComponent
       onHome={() => this.goto('')}
       onAdd={() => this.goto('add')}
       OnEdit={() => this.goto('edit/' + id)}
       image={imageClicked.toJSON()}/>
       );

    });//fetch 
    }//else
  }, //showDetails()
//-----------------------------------
  showEdit(id){
    let imageClicked = this.collection;

    this.render(
      <EditComponent
      image={imageClicked.toJSON()}
      onHome={() => this.goto('')}
      onAdd={() => this.goto('add')}
      onSub2={() => {
        let picName = document.querySelector('.inputName2').value;
        let userName = document.querySelector('.inputUser2').value;
        let location = document.querySelector('.inputLocation2').value;
        let description = document.querySelector('.inputDescription2').value;
        // console.log(picName, userName, location, description);

        let editParse = new PictureModel ({
          objectId: id,
          Name: picName,
          User: userName,
          Location: location,
          Description: description,
        }); //new PictureModel
        console.log(editParse);
        editParse.save();
        this.goto('');

      }
    }/>
  );

  }, //end of showEdit()
//-----------------------------------
  showAdd(){
    this.render(
      <AddComponent
      onHome={() => this.goto('')}
      onAdd={() => this.goto('add')}
      onSub={() => {
        let picName = document.querySelector('.inputName').value;
        let userName = document.querySelector('.inputUser').value;
        let location = document.querySelector('.inputLocation').value;
        let url = document.querySelector('.inputUrl').value;
        let description = document.querySelector('.inputDescription').value;
        // console.log(picName, userName, location, url, description);

        let uploadParse = new PictureModel ({
          Name: picName,
          User: userName,
          Location: location,
          URL: url,
          Description: description,
        }); //new PictureModel
        // console.log(uploadParse);
        uploadParse.save();
        this.goto('');

      }
    }/>
  );

  }, //end of showAdd()
//-----------------------------------

}); //end export default   
