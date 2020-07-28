import React from 'react';

import PropTypes from 'prop-types';

const DateTimeInput = ({ id, name, validation }) => {
    return (
        <>
            {name} {id} {validation}
        </>
    );
};

DateTimeInput.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    validation: PropTypes.arrayOf(
        PropTypes.shape({
            primitiveType: PropTypes.string.isRequired,
            entityType: PropTypes.string,
            pattern: PropTypes.string,
        })
    ).isRequired,
};

export default DateTimeInput;
