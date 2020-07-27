import React, { useEffect } from 'react';

import { InnerContainer } from '../style/container/Container';

const Playlist = ({ playlists }) => {
    useEffect(() => {}, []);

    return playlists ? (
        <InnerContainer>{playlists.map((list) => list.name)}</InnerContainer>
    ) : (
        <InnerContainer>Teste2</InnerContainer>
    );
};

export default Playlist;
