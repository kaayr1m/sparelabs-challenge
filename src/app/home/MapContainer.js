import { connect } from 'react-redux';
import MapComponent from './MapComponent';

import { homeOperations } from './duck';

let timeout = null;

const mapStateToProps = state => {
  const { viewport, translinkBusStops } = state.home;
  return {
    viewport,
    translinkBusStops
  };
};

const mapDispatchToProps = dispatch => {
  const fetchTranslinkBusStops = (lat, long, radius) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      dispatch(homeOperations.fetchTranslinkBusStops(lat, long, radius));
    }, 2000);
  };

  const onViewportChange = viewport => {
    dispatch(homeOperations.onViewportChange(viewport));
  };

  return {
    onViewportChange,
    fetchTranslinkBusStops
  };
};

const MapContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MapComponent);

export default MapContainer;
