import React from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';

export default function MapComponent({ viewport, fetchTranslinkBusStops }) {
  return (
    <ReactMapGL
      {...viewport}
      onViewportChange={() => {
        fetchTranslinkBusStops(viewport.latitude, viewport.longitude, 500);
      }}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
    >
      <Marker
        latitude={viewport.latitude}
        longitude={viewport.longitude}
        offsetLeft={-20}
        offsetTop={-10}
      >
        <div>O</div>
      </Marker>
    </ReactMapGL>
  );
}
