import React from 'react';

import PropTypes from 'prop-types';

import FilterBar from '../FilterBar/FilterBar';

import { InnerContainer } from '../style/container/Container';
import { H1 } from '../style/titles/Titles';

const Header = ({ isAuth }) => {
    return !isAuth ? (
        <InnerContainer>
            <H1 center>
                Hey, que tal ouvir uma música enquanto aguarda o seu pedido ou aproveita sua
                refeição? Entre com seu usuário do Spotify :)
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
