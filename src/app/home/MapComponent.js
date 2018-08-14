import React from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';

import 'mapbox-gl/dist/mapbox-gl.css';

export default class MapComponent extends React.Component {
  componentDidMount() {
    this.props.fetchTranslinkBusStops(
      this.props.viewport.latitude,
      this.props.viewport.longitude,
      2000
    );
  }

  render() {
    return (
      <ReactMapGL
        {...this.props.viewport}
        zoom={13}
        width={800}
        height={600}
        mapStyle={'mapbox://styles/mapbox/dark-v9'}
        onViewportChange={viewport => {
          this.props.onViewportChange(viewport);
          this.props.fetchTranslinkBusStops(
            viewport.latitude,
            viewport.longitude,
            2000
          );
        }}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
      >
        {Object.keys(this.props.translinkBusStops).map(key => (
          <Marker
            key={key}
            latitude={parseFloat(
              this.props.translinkBusStops[key].getElementsByTagName(
                'Latitude'
              )[0].childNodes[0].nodeValue
            )}
            longitude={parseFloat(
              this.props.translinkBusStops[key].getElementsByTagName(
                'Longitude'
              )[0].childNodes[0].nodeValue
            )}
          >
            <div id="circle" />
          </Marker>
        ))}
      </ReactMapGL>
    );
  }
}
