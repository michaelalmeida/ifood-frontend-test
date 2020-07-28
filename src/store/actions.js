import axios from 'axios';

import { AUTH_USER, SET_PLAYLISTS, SET_FILTERS } from './types';

export const authUser = (userToken) => {
    return {
        type: AUTH_USER,
        userToken,
    };
};

export const setPlaylist = (playlists) => {
    return {
        type: SET_PLAYLISTS,
        playlists,
    };
};

export const setFilters = (filters) => {
    return {
        type: SET_FILTERS,
        filters,
    };
};

export const getPlaylists = ({ userToken }) => {
    return (dispatch) => {
        axios
            .get('https://api.spotify.com/v1/browse/featured-playlists', {
                headers: {
                    Authorization: `Bearer ${userToken}`,
                },
            })
            .then((res) => {
                dispatch(setPlaylist(res.data.playlists.items));
            })
            .catch((err) => err);
    };
};

export const getFilters = () => {
    return (dispatch) => {
        axios
            .get('http://www.mocky.io/v2/5a25fade2e0000213aa90776')
            .then((res) => {
                dispatch(setPlaylist(res.data.filters));
            })
            .catch((err) => err);
    };
};
