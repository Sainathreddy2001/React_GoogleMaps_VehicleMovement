
import React from 'react';
import { useJsApiLoader } from '@react-google-maps/api';
import Map from "./components/Map";
import { mapOptions } from './components/MapConfiguration';

function App(){
  const { isLoaded } = useJsApiLoader({
    id: mapOptions.googleMapApiKey,
    googleMapsApiKey: mapOptions.googleMapApiKey,
  });

  return(
    <div className="App">
      <h1>Vehicle Movement on Google Maps</h1>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
        <Map isLoaded={isLoaded} />
      </div>
    </div>
  );
}

export default App;

