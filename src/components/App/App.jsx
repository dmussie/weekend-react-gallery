import React from 'react';
import axios from 'axios';
import './App.css';
import {useState, useEffect} from 'react';
import GalleryList from '../GalleryList/GalleryList.jsx';
//import { response } from 'express';

 

function App() {

  const [galleryList, setGalleryList] = useState([]);
    console.log(galleryList);
    useEffect(() => {
        getGallery()
    }, [])

  //GET
  //Retrieve data from router to be posted to DOM
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


  //PUT
  //Handles the like feature
  const likePicture = () => {
    console.log('Updating gallery to liked!');
    const itemId = response.data.id;
    axios({
      method: 'PUT',
      url: `/gallery/like/${itemId}`
    }).then((response) => {
      getGallery();
    }).catch((error) => {
      alert('Error with PUT.');
      console.log('error with updating likes!', error);
    })
  }
  
  
  
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <h2>Welcome!</h2>
        <div className="App-container">
          

        <GalleryList 
        list={galleryList}
        likePicture={likePicture} />
        
        </div>
        
        
      </div>
    );
}

export default App;
