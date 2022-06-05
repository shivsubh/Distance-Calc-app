import React from "react";
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
  const [map, setMap] = React.useState(null);

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
      center={center}
      zoom={5}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      <DistanceMatrixService
        options={{
          destinations: [{ lat: 1.296788, lng: 103.778961 }],
          origins: [{ lng: 103.780267, lat: 1.291692 }],
          travelMode: "DRIVING",
        }}
        callback={(response) => {
          console.log(response);
        }}
      />
      <Marker position={center} />
      <Marker position={dest} />
      {/* Child components, such as markers, info windows, etc. */}
      <></>
    </GoogleMap>
  );
}

export default Map;
