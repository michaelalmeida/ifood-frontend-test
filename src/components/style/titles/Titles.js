import styled, { css } from 'styled-components'
import { mainColor } from '../colors'

const TitlePattern = css`
    color: ${mainColor};
`

export const H1 = styled.h1`
    ${TitlePattern}
    font-family: 'Oswald', sans-serif;
    font-size: 36px;
    text-align: ${(props) => (props.center ? 'center' : 'left')};
`

export const H2 = styled.h2`
    ${TitlePattern}
    font-family: 'Oswald', sans-serif;
    font-size: 36px;
`
