import React from 'react';

import PropTypes from 'prop-types';

import styled, { css } from 'styled-components';
import { mainColor } from '../colors';

const BtnPattern = css`
    padding: 10px;
    color: ${mainColor};
    border: 0;
    flex-grow: 0;
    border: 2px solid ${mainColor};
    background: none;
    font-size: 16px;
    text-transform: uppercase;
`;

const Btn = styled.button`
    ${BtnPattern}
    outline: none;
    cursor: pointer;
`;

const BtnLink = styled.a`
    ${BtnPattern}
    display: inline-block;
    outline: none;
    cursor: pointer;
    text-decoration: none;
`;

const Button = ({ isLink, children, href }) => {
    return isLink ? <BtnLink href={href}>{children}</BtnLink> : <Btn>{children}</Btn>;
};

Button.propTypes = {
    isLink: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
    href: PropTypes.string,
};

Button.defaultProps = {
    isLink: false,
    href: '',
};

export default Button;
