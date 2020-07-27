import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getPlaylists } from '../../store/actions';

import { InnerContainer } from '../style/container/Container';

const Playlist = () => {
    const userToken = useSelector((state) => state.userToken);
    const playlists = useSelector((state) => state.playlists);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPlaylists({ userToken }));
    }, [dispatch, userToken]);

    return playlists ? (
        <InnerContainer>
            {playlists.map((list) => (
                <li>{list.name}</li>
            ))}
        </InnerContainer>
    ) : (
        <InnerContainer>Teste2</InnerContainer>
    );
};

export default Playlist;
