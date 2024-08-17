import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

// Set the container style
const mapContainerStyle = {
  width: "100%",
  height: "400px",
};

// Center of the map (Hyderabad example)
const center = {
  lat: 17.3850,
  lng: 78.4867,
};

const MyGoogleMap = (props) => {
  const { isLoaded } = props;

  return (
    isLoaded && (
      <LoadScript googleMapsApiKey="AIzaSyDYZvmpbbpusYPdxfNs5F0zZXrbyLW1Gl4">
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={12}
        >
          <Marker
            position={center}
            icon={{
              url: "/Vehicle.png", // Path to your vehicle icon in the public folder
              scaledSize: new window.google.maps.Size(50, 50), // Size of the icon
            }}
          />
        </GoogleMap>
      </LoadScript>
    )
  );
};

export default MyGoogleMap;
