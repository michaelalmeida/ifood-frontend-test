import React from 'react';

import PropTypes from 'prop-types';

import styled, { css } from 'styled-components';
import { mainColor } from '../colors';

const SelectSharedStyle = css`
    padding: 10px;
    color: ${mainColor};
    border: 2px solid ${mainColor};
    background: none;
`;

const Input = styled.input`
    ${SelectSharedStyle}
    outline: none;
    cursor: pointer;
    font-size: 16px;
    text-transform: uppercase;
`;

const NumberInput = ({ id, name, validation }) => {
    const { primitiveType, min, max } = validation;
    const MIN_FOR_INTEGER = 0;
    const STEP_FOR_INTEGER = 1;

    return primitiveType === 'INTEGER' ? (
        <Input type="number" id={id} name={name} min={min || undefined} max={max || undefined} />
    ) : (
        <Input
            type="number"
            id={id}
            name={name}
            min={MIN_FOR_INTEGER}
            max={max || undefined}
            step={STEP_FOR_INTEGER}
        />
    );
};

NumberInput.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    validation: PropTypes.shape({
        primitiveType: PropTypes.string.isRequired,
        min: PropTypes.number,
        max: PropTypes.number,
    }).isRequired,
};

export default NumberInput;
