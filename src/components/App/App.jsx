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
  // maybe just make a new component to specify elements in conditional operator
  
  
  
  
  
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <div>
          

        <GalleryList list={galleryList} />
        
        </div>
        
          {/*loop through list again? for each new id, select for new description*/}
          {/*<button onClick={handleClicks}>Love it!</button>*/}
        
        
      </div>
    );
}

export default App;
