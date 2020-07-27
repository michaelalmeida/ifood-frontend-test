import axios from 'axios';

import { AUTH_USER, SET_PLAYLISTS } from './types';

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
