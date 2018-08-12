import { connect } from 'react-redux';
import MapComponent from './MapComponent';

import { homeOperations } from './duck';

const mapStateToProps = state => {
  const { viewport } = state.home;
  return {
    viewport
  };
};

const mapDispatchToProps = dispatch => {
  const fetchTranslinkBusStops = (lat, long, radius) => {
    dispatch(homeOperations.fetchTranslinkBusStops(lat, long, radius));
  };

  return { fetchTranslinkBusStops };
};

const MapContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MapComponent);

export default MapContainer;
