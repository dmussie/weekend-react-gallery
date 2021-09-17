import React from 'react';
import axios from 'axios';
import './App.css';
import {useState, useEffect} from 'react';



function App() {
  let [galleryList, setGalleryList] = useState([]);
  //GET
  const getLike = () => {
    axios({
      method: 'GET',
      url: '/like',
    }).then((response) => {
      console.log(response.data);
      setGalleryList(response.data);
    }).catch((error) => {
      console.log(error);
      alert('Error making GET request');
    })
  }
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <img src="images/goat_small.jpg"/>
      </div>
    );
}

export default App;
