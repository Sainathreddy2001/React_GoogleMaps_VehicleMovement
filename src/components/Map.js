

import React, { useState, useEffect, useMemo } from 'react';
import { GoogleMap, Marker, Polyline } from '@react-google-maps/api';
import CustomMarker from "../assets/Vehicle.png";
import InfoWindowComponent from './InfoWindowComponent';
import ControlPanel from './ControlPanel';

const Map = (props) => {
  const { isLoaded } = props;
  const [showInfoWindow, setShowInfoWindow] = useState(false);
  const [currentPositionIndex, setCurrentPositionIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showControlPanel, setShowControlPanel] = useState(false);

  const [vehicleData] = useState({
    wirelessStatus: 'Connected',
    dateTime: '2024-08-16 12:30:00',
    location: '17.4065, 78.4772',
    speed: 60,
    distance: 120,
    battery: 80,
    totalDistance: 500,
    distanceFromLastStop: 10,
    runningTime: '2 hrs',
    stoppedTime: '1 hr',
    idleTime: '30 mins',
    ignitionStatus: 'On',
    acStatus: 'On'
  });

  const handleMarkerClick = () => {
    setShowInfoWindow(true);
  };

  const handleCloseClick = () => {
    setShowInfoWindow(false);
  };

  const containerStyle = {
    width: '100vw', 
    height: '100vh', 
  };

  const center = {
    lat: 17.4065,
    lng: 78.4772,
  };

  const pathCoordinates = useMemo(() => [
    { lat: 17.4065, lng: 78.4772 },
    {lat:17.3880, lng:78.4672},
    {lat:17.3685, lng:78.5316},
    { lat: 17.3715, lng: 78.5695 },
    {lat:17.4141, lng:78.5791},
    {lat:17.4629, lng:78.5609},
    

    { lat: 17.4967, lng: 78.5067 },
    { lat: 17.4814, lng: 78.4490 },
    { lat: 17.4486, lng: 78.3908 },
    { lat: 17.3630, lng: 78.3943 },
    { lat: 17.3324, lng: 78.4699 },
    { lat: 17.3616, lng: 78.4747 },
    { lat: 17.3920, lng: 78.5163 },
    { lat: 17.3413, lng: 78.5316 },
  ], []);

  const polylineOptions = {
    strokeColor: '#008000',
    strokeOpacity: 1,
    strokeWeight: 3,
  };

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentPositionIndex((prevIndex) => {
          if (prevIndex < pathCoordinates.length - 1) {
            setProgress(((prevIndex + 1) / pathCoordinates.length) * 100);
            return prevIndex + 1;
          } else {
            setIsPlaying(false);
            clearInterval(interval);
            return prevIndex;
          }
        });
      }, 2000);
    }

    return () => clearInterval(interval);
  }, [isPlaying, pathCoordinates]);

  const handlePlay = () => setIsPlaying(true);
  const handleStop = () => setIsPlaying(false);
  const handleReplay = () => {
    setIsPlaying(true);
    setCurrentPositionIndex(0);
    setProgress(0);
  };

  const handleOptionChange = (option) => {
    console.log('Selected option:', option);
  };

  const toggleControlPanel = () => setShowControlPanel((prev) => !prev);

  return (
    isLoaded && (
      
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={12}
      >
        <Marker 
          position={pathCoordinates[currentPositionIndex]}
          options={{ icon: CustomMarker }}
          onClick={handleMarkerClick}
        />
        {showInfoWindow && (
          <InfoWindowComponent
            position={pathCoordinates[currentPositionIndex]}
            onCloseClick={handleCloseClick}
            vehicleData={vehicleData}
          />
        )}
        <Polyline
          path={pathCoordinates}
          options={polylineOptions}
        />
        <ControlPanel
          onPlay={handlePlay}
          onStop={handleStop}
          onReplay={handleReplay}
          onOptionChange={handleOptionChange}
          showControlPanel={showControlPanel}
          toggleControlPanel={toggleControlPanel}
          progress={progress}
        />
      </GoogleMap>
      
    )
  );
};

export default Map;

