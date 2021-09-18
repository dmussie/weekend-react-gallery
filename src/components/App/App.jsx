import React from 'react';
import axios from 'axios';
import './App.css';
import {useState, useEffect} from 'react';
//import { response } from 'express';

 

function App() {

  const [galleryList, setGalleryList] = useState([]);
  console.log(galleryList);
  useEffect(() => {
    getGallery()
  }, [])

  //GET
  const getGallery = () => {
    axios({
      method: 'GET',
      url: '/gallery',
    }).then((response) => {
      console.log(response.data);
      setGalleryList(response.data);
    }).catch((error) => {
      console.log(error);
      alert('Error making GET request');
    })
  }

  // const [liked, setLiked] = useState(false);

  //PUT
  // const handleLikes = () => {
  //   console.log('Updating gallery to liked!');
  //   const itemId = response.data.id;
  //   axios({
  //     method: 'PUT',
  //     url: `/gallery/like/${itemId}`
  //   }).then((response) => {
  //     setLiked();
  //   }).catch((error) => {
  //     alert('Error with PUT.');
  //     console.log('error with updating likes!', error);
  //   })
  // }
  // insert state here for toggle!! Have T or F variable
  // function to switch between T or False
  
  
  const [galleryBoolean, setGalleryBoolean] = useState(false);
    const handleSwitch = (pictureId) => {
      console.log('User clicked image: ', pictureId);
      switchPicture(pictureId);
    }  
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        {galleryList.map(picture => (
          {/** use state variable*/},
          {/** single line function */},
          {/** START HERE ternary operator, do I want an image or description: if TRUE, display image, if FALSE display description */},
          {/** Figure out True or False for operator */},
          (
          galleryBoolean ? (
            <p>{picture.description}</p>,
            <img key={picture.id} onClick={() => setGalleryBoolean(true)} />
          ) : (
            
            <img key={picture.id} src={picture.path} /> 
          )
            
         
          )
          
          
          
          
        ))}
        
          {/*loop through list again? for each new id, select for new description*/}
          {/*<button onClick={handleClicks}>Love it!</button>*/}
        
        
      </div>
    );
}

export default App;
