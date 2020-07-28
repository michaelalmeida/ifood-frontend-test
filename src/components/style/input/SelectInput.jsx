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

const Select = styled.select`
    ${SelectSharedStyle}
    outline: none;
    cursor: pointer;
    font-size: 16px;
    text-transform: uppercase;
`;

const Option = styled.option`
    ${SelectSharedStyle}
    outline: none;
    cursor: pointer;
`;

const SelectInput = ({ id, name, values }) => {
    return (
        <Select name={name} id={id}>
            {values.map((item) => (
                <Option key={item.value} value={item.value}>
                    {item.name}
                </Option>
            ))}
        </Select>
    );
};

SelectInput.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    values: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default SelectInput;
