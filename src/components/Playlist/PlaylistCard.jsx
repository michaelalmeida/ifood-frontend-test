import React from 'react';

import PropTypes from 'prop-types';

import styled from 'styled-components';

import { randomColors, mainColor, white, black } from '../style/colors';

export const Card = styled.div`
    position: relative;
    width: 200px;
    height: 350px;
    display: flex;
    flex: 0 1 auto;
    align-content: flex-start;
    padding: 20px;
    flex-flow: column nowrap;
    justify-content: space-around;
    background: ${(props) => props.backgroundColor || mainColor};
    margin-bottom: 20px;

    div {
        flex-grow: 1;
        margin-right: 5px;

        &:last-child {
            margin-right: 0;
        }
    }

    @media (max-width: 960px) {
        width: 100%;
        height: 120px;

        div {
            margin-right: 0;
        }
    }
`;

export const CardImage = styled.div`
    width: 160px;
    height: 160px;
    background: url(${(props) =>
        props.backgroundImage || 'https://dummyimage.com/200x200/000/fff&text=x'});
    background-repeat: no-repeat;
    background-size: 160px 160px;

    @media (max-width: 960px) {
        position: absolute;
        top: 20px;
        left: 20px;
        width: 80px;
        height: 80px;
        background-size: 80px 80px;
    }
`;

export const Name = styled.h1`
    font-family: 'Oswald', sans-serif;
    font-size: 28px;
    font-weight: 700;
    text-transform: uppercase;
    text-align: right;
    color: ${white};

    @media (max-width: 960px) {
        padding-left: 60px;
    }
`;

export const Author = styled.h1`
    font-family: 'Oswald', sans-serif;
    font-size: 16px;
    text-align: right;
    color: ${black};
`;

export const Description = styled.p`
    margin-top: 5px;
    font-family: 'Noto Sans JP', sans-serif;
    font-size: 12px;
    color: ${white};

    @media (max-width: 960px) {
        padding-left: 100px;
    }
`;

export const Link = styled.a`
    position: absolute;
    top: 150px;
    right: 20px;
    padding: 5px;
    margin-top: 5px;
    font-family: 'Oswald', sans-serif;
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
    color: ${white};
    background: ${black};

    @media (max-width: 960px) {
        top: 90px;
        right: 0;
    }
`;

const PlayListCard = ({ name, description, owner, images, uri }) => {
    const { display_name: displayName } = owner;
    const backgroundImage = images[0].url;
    const randomNumber = Math.floor(Math.random() * 10);

    return (
        <Card backgroundColor={randomColors[randomNumber]}>
            <CardImage backgroundImage={backgroundImage} />
            <Name>{name}</Name> <Author>by {displayName}</Author>
            <Description>{description}</Description>
            <Link href={uri} target="_blanck" title="Abrir playlist ">
                Abrir
            </Link>
        </Card>
    );
};

PlayListCard.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(
        PropTypes.shape({
            height: PropTypes.any,
            url: PropTypes.string,
            width: PropTypes.any,
        })
    ).isRequired,
    owner: PropTypes.objectOf(PropTypes.any).isRequired,
    uri: PropTypes.string.isRequired,
};

export default PlayListCard;
