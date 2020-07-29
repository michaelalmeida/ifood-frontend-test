import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getPlaylists } from '../../store/actions';

import PlayListCard from './PlaylistCard';
import { InnerContainer, PlaylistContainer } from '../style/container/Container';

const Playlist = () => {
    const userToken = useSelector(({ spotify }) => spotify.userToken);
    const playlists = useSelector(({ spotify }) => spotify.playlists);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPlaylists({ userToken }));
    }, [dispatch, userToken]);

    return playlists ? (
        <PlaylistContainer>
            {playlists.map((list) => (
                <PlayListCard
                    key={list.uri}
                    name={list.name}
                    description={list.description}
                    owner={list.owner}
                    images={list.images}
                />
            ))}
        </PlaylistContainer>
    ) : (
        <InnerContainer>Teste2</InnerContainer>
    );
};

export default Playlist;
