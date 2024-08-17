
import React from 'react';
import { InfoWindow } from '@react-google-maps/api';
import WirelessIcon from '../assets/wireless-icon.png'; 
import DateTimeIcon from '../assets/datetime-icon.png'; 
import LocationIcon from '../assets/location-icon.png';
import SpeedIcon from '../assets/speed-icon.png';
import DistanceIcon from '../assets/distance-icon.png';
import BatteryIcon from '../assets/battery-icon.png';

const InfoWindowComponent = ({ position, onCloseClick, vehicleData }) => {
  return (
    <InfoWindow position={position} onCloseClick={onCloseClick}>
      <div style={styles.container}>
        <div style={styles.row}>
          <img src={WirelessIcon} alt="Wireless" style={styles.icon} />
          <span style={styles.text}>Wireless: {vehicleData.wirelessStatus}</span>
        </div>
        <div style={styles.row}>
          <img src={DateTimeIcon} alt="Date & Time" style={styles.icon} />
          <span style={styles.text}>Date & Time: {vehicleData.dateTime}</span>
        </div>
        <div style={styles.row}>
          <img src={LocationIcon} alt="Location" style={styles.icon} />
          <div style={styles.animatedText}>
            Location: {vehicleData.location} - {vehicleData.address}
          </div>
        </div>
        <div style={styles.row}>
          <img src={SpeedIcon} alt="Speed" style={styles.icon} />
          <span style={styles.text}>Speed: {vehicleData.speed} km/hr</span>
        </div>
        <div style={styles.row}>
          <img src={DistanceIcon} alt="Distance" style={styles.icon} />
          <span style={styles.text}>Distance: {vehicleData.distance} km</span>
        </div>
        <div style={styles.row}>
          <img src={BatteryIcon} alt="Battery" style={styles.icon} />
          <span style={styles.text}>Battery: {vehicleData.battery}%</span>
        </div>
        <div style={styles.text}>Today's Total Distance: {vehicleData.totalDistance} km</div>
        <div style={styles.text}>Distance from Last Stop: {vehicleData.distanceFromLastStop} km</div>
        <div style={styles.text}>Running Time: {vehicleData.runningTime}</div>
        <div style={styles.text}>Stopped Time: {vehicleData.stoppedTime}</div>
        <div style={styles.text}>Idle Time: {vehicleData.idleTime}</div>
        <div style={styles.text}>Ignition Status: {vehicleData.ignitionStatus}</div>
        <div style={styles.text}>AC Status: {vehicleData.acStatus}</div>
      </div>
    </InfoWindow>
  );
};

const styles = {
  container: {
    width: '250px',
    fontSize: '14px',
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
    color: '#333',
  },
  row: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '8px',
  },
  icon: {
    width: '20px',
    height: '20px',
    marginRight: '8px',
  },
  text: {
    fontWeight: '500',
  },
  animatedText: {
    fontWeight: '500',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    animation: 'marquee 10s linear infinite',
  },
};

export default InfoWindowComponent;



