import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import spotifyReducer, { initialState } from './spotifyReducer';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(spotifyReducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;
