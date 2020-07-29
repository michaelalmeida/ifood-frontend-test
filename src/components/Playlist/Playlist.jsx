import React from 'react';
import { useSelector } from 'react-redux';

import PlayListCard from './PlaylistCard';
import { InnerContainer, PlaylistContainer } from '../style/container/Container';

const Playlist = () => {
    const playlists = useSelector(({ spotify }) => spotify.playlists);

    return playlists ? (
        <PlaylistContainer>
            {playlists.map((list) => (
                <PlayListCard
                    key={list.uri}
                    name={list.name}
                    description={list.description}
                    owner={list.owner}
                    images={list.images}
                    uri={list.uri}
                />
            ))}
        </PlaylistContainer>
    ) : (
        <InnerContainer>Nenhuma Playlist encontrada</InnerContainer>
    );
};

export default Playlist;
