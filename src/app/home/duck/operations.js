import request from 'superagent';
import actions from './actions';

const Creators = actions.Creators;

const fetchTranslinkBusStops = (lat, long, radius) => {
  return dispatch => {
    console.log(Creators.requestTranslinkBusStops(lat, long, radius));
    dispatch(Creators.requestTranslinkBusStops(lat, long, radius));
    return request
      .get(
        `http://api.translink.ca/rttiapi/v1/stops?apikey=${
          process.env.REACT_APP_TRANSLINK_API_KEY
        }&lat=${lat}&long=${long}&radius=${radius}`
      )
      .then(response => {
        let data = [];

        dispatch(Creators.receiveTranslinkBusStops(data));
      });
  };
};

export default {
  fetchTranslinkBusStops
};
