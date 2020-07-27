import React from 'react';

import styled, { css } from 'styled-components';
import { white, mainColor } from '../colors';

const BtnPattern = css`
    padding: 10px;
    color: ${white};
    -webkit-border-radius: 8px;
    -moz-border-radius: 8px;
    border-radius: 8px;
    border: 0;
    flex-grow: 0;
`;

const Btn = styled.button`
  ${BtnPattern}
  background: ${mainColor};
  outline: none;
  cursor: pointer;
`;

const BtnLink = styled.a`
    ${BtnPattern}
    display: inline-block;
    background: ${mainColor};
    outline: none;
    cursor: pointer;
    text-decoration: none;
`;

const Button = ({ isLink, children, href }) => {
    return isLink ? <BtnLink href={href}>{children}</BtnLink> : <Btn>{children}</Btn>;
};

export default Button;
