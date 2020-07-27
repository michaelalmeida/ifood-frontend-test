import { AUTH_USER, SET_PLAYLISTS } from './types';

export const initialState = {
    userToken: '',
    playlists: [],
};

export default function spotifyReducer(state = initialState, { type, userToken, playlists }) {
    switch (type) {
        case AUTH_USER:
            return {
                ...state,
                userToken,
            };
        case SET_PLAYLISTS:
            return {
                ...state,
                playlists,
            };
        default:
            return state;
    }
}
