import PropTypes from 'prop-types';

const FILTER_TYPE = Object.freeze({
    validation: 'validation',
    values: 'values',
    number: 'INTEGER',
    text: 'STRING',
    datetime: 'DATE_TIME',
});

const FilterManager = ({ filterList }) => {
    const inputTypeList = [];

    const hasProperty = (object, property) => {
        return Object.prototype.hasOwnProperty.call(object, property);
    };

    filterList.forEach((filter) => {
        if (hasProperty(filter, FILTER_TYPE.values)) {
            inputTypeList.push('select');
        }
        if (hasProperty(filter, FILTER_TYPE.validation)) {
            if (filter.validation.primitiveType === FILTER_TYPE.number) {
                inputTypeList.push('number');
            }
            if (filter.validation.primitiveType === FILTER_TYPE.text) {
                if (filter.validation.entityType === FILTER_TYPE.datetime) {
                    inputTypeList.push('datetime');
                } else {
                    inputTypeList.push('text');
                }
            }
        }
    });

    return inputTypeList;
};

FilterManager.propTypes = {
    filterList: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            values: PropTypes.arrayOf(
                PropTypes.shape({
                    value: PropTypes.string,
                    name: PropTypes.string,
                })
            ),
            validation: PropTypes.objectOf(PropTypes.any),
        })
    ).isRequired,
};

export default FilterManager;
