import { combineReducers } from 'redux';

import spotifyReducer from './spotifyReducer';
import filterReducer from './filterReducer';

const reducers = combineReducers({
    spotify: spotifyReducer,
    filter: filterReducer,
});

export default reducers;
