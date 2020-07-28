import PropTypes from 'prop-types';

const FILTER_TYPE = Object.freeze({
    validation: 'validation',
    values: 'values',
    number: 'INTEGER',
    text: 'STRING',
    datetime: 'DATE_TIME',
});

const FilterManager = ({ filterList }) => {
    const hasProperty = (object, property) => {
        return Object.prototype.hasOwnProperty.call(object, property);
    };
    return filterList.map((filter) => {
        if (hasProperty(filter, FILTER_TYPE.values)) {
            return console.log('select');
        }
        if (hasProperty(filter, FILTER_TYPE.validation)) {
            if (filter.validation.primitiveType === FILTER_TYPE.number) {
                return console.log('number');
            }
            if (filter.validation.primitiveType === FILTER_TYPE.text) {
                if (filter.validation.entityType === FILTER_TYPE.datetime) {
                    return console.log('date');
                }
                return console.log('text');
            }
        }

        return console.log('nada');
    });
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
