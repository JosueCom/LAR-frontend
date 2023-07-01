import './App.css';
import MapViewer from './Components/MapViewer';
import SearchBar from './Components/SearchBar';
import React, { useState, useRef } from 'react';

function App() {

  const [location, setLocation] = useState({
    longitude: -71.1642646,
    latitude: 42.7002117,
    radius: 9000, //meters
    zoom: 14
  });
  const [LOIResponse, setLOIResponse] = useState(null); //loi = location of interest
  const isProgrammaticMove = useRef(false);

  return (
    <div className="App">
      <MapViewer location={location} isProgrammaticMove={isProgrammaticMove} setLocation={setLocation} LOIResponse={LOIResponse}/>
      <div className='App-header'>
        <SearchBar location={location} isProgrammaticMove={isProgrammaticMove} setLOIResponse={setLOIResponse} />
      </div>
    </div>
  );
}

export default App;
