import React from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';

import 'mapbox-gl/dist/mapbox-gl.css';

export default function MapComponent({
  viewport,
  translinkBusStops,
  onViewportChange,
  fetchTranslinkBusStops
}) {
  return (
    <ReactMapGL
      {...viewport}
      width={800}
      height={600}
      mapStyle={'mapbox://styles/mapbox/dark-v9'}
      onViewportChange={viewport => {
        onViewportChange(viewport);
        fetchTranslinkBusStops(viewport.latitude, viewport.longitude, 500);
      }}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
    >
      {translinkBusStops.forEach(stop => (
        <Marker
          latitude={parseInt(
            stop.getElementsByTagName('Latitude')[0].childNodes[0].nodeValue
          )}
          longitude={parseInt(
            stop.getElementsByTagName('Longitude')[0].childNodes[0].nodeValue
          )}
        >
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="4" />
          </svg>
        </Marker>
      ))}
    </ReactMapGL>
  );
}
