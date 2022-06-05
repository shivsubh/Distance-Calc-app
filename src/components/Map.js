import React from "react";
import {
  GoogleMap,
  useJsApiLoader,
  DistanceMatrixService,
  Marker,
  Autocomplete,
} from "@react-google-maps/api";

const containerStyle = {
  height: "70vh",
  width: "50vw",
  margin: "2rem",
  marginLeft: "3rem",
};

const center = {
  lat: 1.296788,
  lng: 103.778961,
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
      zoom={10}
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
      {/* Child components, such as markers, info windows, etc. */}
      <></>
    </GoogleMap>
  );
}

export default Map;