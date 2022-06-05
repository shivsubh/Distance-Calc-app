import React, { useState } from "react";
import {
  GoogleMap,
  DistanceMatrixService,
  Marker,
} from "@react-google-maps/api";

const containerStyle = {
  height: "70vh",
  width: "50vw",
  margin: "2rem",
  marginLeft: "3rem",
};

const center = {
  lat: 28.6448,
  lng: 77.216721,
};

const dest = {
  lat: 19.07609,
  lng: 72.877426,
};

function Map() {
  const [map, setMap] = useState(null);
  const [zoom, setZoom] = useState(0);

  setTimeout(() => {
    setZoom(5);
  }, 1000);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      zoom={zoom}
      center={center}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      <Marker position={center} />
      <Marker position={dest} />
      <DistanceMatrixService
        options={{
          destinations: [dest],
          origins: [center],
          travelMode: "DRIVING",
        }}
        callback={(response) => {
          console.log(response);
        }}
      />
    </GoogleMap>
  );
}

export default Map;
