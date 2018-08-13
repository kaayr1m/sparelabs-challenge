import request from 'superagent';
import actions from './actions';

const Creators = actions.Creators;

const fetchTranslinkBusStops = (lat, long, radius) => {
  return dispatch => {
    dispatch(Creators.requestTranslinkBusStops(lat, long, radius));
    return request
      .get(
        `http://api.translink.ca/rttiapi/v1/stops?apikey=${
          process.env.REACT_APP_TRANSLINK_API_KEY
        }&lat=${lat}&long=${long}&radius=${radius}`
      )
      .then(response => {
        let parser = new DOMParser();
        let xmlDoc = parser.parseFromString(response.text, 'text/xml');
        let data = xmlDoc.getElementsByTagName('Stops')[0].childNodes;

        dispatch(Creators.receiveTranslinkBusStops(data));
      });
  };
};

const onViewportChange = viewport => {
  return dispatch => {
    dispatch(Creators.updateViewPort(viewport));
  };
};

export default {
  onViewportChange,
  fetchTranslinkBusStops
};
