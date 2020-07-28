import PropTypes from 'prop-types';

const FilterManager = ({ filterList }) => {
    return console.log(filterList);
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
