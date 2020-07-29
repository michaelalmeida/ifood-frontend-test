import styled from 'styled-components';
import { white } from '../colors';

export const Container = styled.div`
    margin: 60px auto;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    padding: 20px;
    width: ${(props) => props.width || '920px'};
    background: ${(props) => (props.background ? white : 'none')};

    @media (max-width: 1024px) {
        width: calc(100% - 40px);
    }
`;

export const InnerContainer = styled.div`
    display: flex;
    align-items: center;
    align-content: center;
    flex-wrap: ${(props) => props.flexWrap || 'nowrap'};
    flex-direction: ${(props) => props.flexDireaction || 'column'};
    justify-content: space-between;
    width: ${(props) => props.width || '100%'};
    background: ${(props) => (props.background ? white : 'none')};

    @media (max-width: 1024px) {
        width: 100%;
    }
`;

export const PlaylistContainer = styled.div`
    margin: 20px 0 -20px 0;
    display: flex;
    align-items: center;
    align-content: center;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;

    @media (max-width: 1024px) {
        flex-direction: column;
    }
`;
