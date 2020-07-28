import styled from 'styled-components';
import { white } from '../colors';

export const Container = styled.div`
    margin: 60px auto;
    display: flex;
    padding: 20px;
    width: ${(props) => props.width || '920px'};
    background: ${(props) => (props.background ? white : 'none')};

    @media (max-width: 1024px) {
        width: calc(100% - 40px);
    }
`;

export const InnerContainer = styled.div`
    display: flex;
    margin: 60px auto;
    align-items: center;
    align-content: center;
    flex-direction: column;
    justify-content: space-between;
    width: ${(props) => props.width || '100%'};
    min-height: 200px;
    background: ${(props) => (props.background ? white : 'none')};

    @media (max-width: 1024px) {
        width: 100%;
    }
`;
