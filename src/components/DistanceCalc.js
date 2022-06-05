import React, { useRef } from "react";

import Map from "./Map";
import "./DistanceCalc.css";
import locationIcon from "../assets/locationIcon.svg";
import { Autocomplete, useJsApiLoader } from "@react-google-maps/api";

const DistanceCalc = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "YOUR_API_KEY_HERE",
    libraries: ["places"],
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  const originRef = useRef();

  const destinationRef = useRef();

  async function calculateRoute() {
    console.log(originRef.current.value, destinationRef.current.value);
    if (originRef.current.value === "" || destinationRef.current.value === "") {
      return;
    }
    const origin = decodeURIComponent(originRef.current.value);
    const destination = decodeURIComponent(destinationRef.current.value);
    window.open(`https://www.google.com/maps/dir/${origin}/${destination}`);
  }

  return (
    isLoaded && (
      <div>
        <h1>{"Let's calculate distance from Google maps"}</h1>
        <div className="container">
          <div>
            <form onSubmit={handleFormSubmit}>
              <div className="display-flex">
                <div>
                  <label className="origin-label">Origin</label>
                  <div className="input-container">
                    <img src={locationIcon} alt="origin-icon" />
                    <Autocomplete>
                      <input
                        type="text"
                        title="Origin"
                        ref={originRef}
                        className="origin-input"
                        name="origin"
                        required
                      />
                    </Autocomplete>
                  </div>

                  <label className="destination-label">Destination</label>
                  <div className="input-container">
                    <img src={locationIcon} alt="destination-icon" />
                    <Autocomplete>
                      <input
                        type="text"
                        title="Destination"
                        ref={destinationRef}
                        className="destination-input"
                        name="destination"
                        required
                      />
                    </Autocomplete>
                  </div>
                </div>
                <div className="btn-container">
                  <button
                    type="submit"
                    className="button-form"
                    onClick={calculateRoute}
                  >
                    Calculate
                  </button>
                </div>
              </div>
            </form>
            <div className="distance-show">Distance</div>
          </div>
          <div className="show-map">
            <Map />
          </div>
        </div>
      </div>
    )
  );
};

export default DistanceCalc;
