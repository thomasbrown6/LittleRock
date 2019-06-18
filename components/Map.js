import React from "react";
import { compose, withProps } from "recompose";
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker
} from "react-google-maps";
  
const Map = compose(
    withProps({
      googleMapURL:
        "https://maps.googleapis.com/maps/api/js?key=AIzaSyA-MTP_0M8LvLKDD2wrVhlalEVSD7l6pLo&v=3.exp&libraries=geometry,drawing,places",
      loadingElement: <div style={{ height: `100%` }} />,
      containerElement: <div style={{ height: `800px`, width:`800px` }} />,
      mapElement: <div style={{ height: `100%` }} />
    }),
    withScriptjs,
    withGoogleMap
  )((props) => (
    <GoogleMap defaultZoom={16} defaultCenter={{ lat: 35.223746, lng: -80.831594 }}>
      <Marker position={{ lat: 35.223746, lng: -80.831594 }} />
    </GoogleMap>
  ));

  export default Map