import React from 'react';

import { H1 } from '../style/titles/Titles';

const Header = ({ isAuth }) => {
    return !isAuth ? (
        <H1 center>
            Hey, welcome! How about listening a music while you enjoy your meal? Please, just
            authenticate your Spotify user
        </H1>
    ) : (
        <H1 center>Welcome XCX</H1>
    );
};

export default Header;
