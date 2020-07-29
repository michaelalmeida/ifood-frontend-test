import React from 'react';

import PropTypes from 'prop-types';

import FilterBar from '../FilterBar/FilterBar';

import { InnerContainer } from '../style/container/Container';
import { H1 } from '../style/titles/Titles';

const Header = ({ isAuth }) => {
    return !isAuth ? (
        <InnerContainer>
            <H1 center>
                Hey, welcome! How about listening a music while you enjoy your meal? Please, just
                authenticate your Spotify user
            </H1>
        </InnerContainer>
    ) : (
        <FilterBar />
    );
};

Header.propTypes = {
    isAuth: PropTypes.bool.isRequired,
};

export default Header;
