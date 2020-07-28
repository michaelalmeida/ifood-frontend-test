import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getPlaylists } from '../../store/actions';

import { InnerContainer } from '../style/container/Container';

const Playlist = () => {
    const userToken = useSelector(({ spotify }) => spotify.userToken);
    const playlists = useSelector(({ spotify }) => spotify.playlists);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPlaylists({ userToken }));
    }, [dispatch, userToken]);

    return playlists ? (
        <InnerContainer>
            {playlists.map((list) => (
                <li key={list.uri}>{list.name}</li>
            ))}
        </InnerContainer>
    ) : (
        <InnerContainer>Teste2</InnerContainer>
    );
};

export default Playlist;
