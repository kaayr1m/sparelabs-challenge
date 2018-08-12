/*
Using `reduxsauce` because useful tool for writing action creators and reducers is reduxsauce,
which considerably reduces the number of lines of code. 
It also creates string literals for action types by converting your action names into SCREAMING_SNAKE_CASE, 
so I don’t need to maintain a separate types.js 
*/
import { createActions } from 'reduxsauce';

const { Creators, Types } = createActions({
  requestTranslinkBusStops: ['lat', 'long', 'radius'],
  receiveTranslinkBusStops: ['translinkBusStops']
});

export default { Creators, Types };
