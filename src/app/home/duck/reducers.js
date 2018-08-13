import types from './types';

const initialState = {
  translinkBusStops: [],
  viewport: {
    bearing: 0,
    pitch: 0,
    latitude: 49.24966,
    longitude: -123.11934,
    zoom: 11
  }
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.REQUEST_TRANSLINK_BUS_STOPS: {
      const { coordinates } = action;
      return {
        ...state,
        ...coordinates,
        translinkBusStops: []
      };
    }

    case types.RECEIVE_TRANSLINK_BUS_STOPS: {
      const { translinkBusStops } = action;
      return {
        ...state,
        translinkBusStops
      };
    }

    case types.UPDATE_VIEW_PORT: {
      const { viewport } = action;
      return {
        ...state,
        viewport: {
          latitude: viewport.latitude,
          longitude: viewport.longitude,
          zoom: viewport.zoom
        }
      };
    }

    default:
      return state;
  }
};

export default homeReducer;
