import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import { getFilters as getFiltersAction } from '../../store/actions';

import FilterManager from './FilterManager';

import { InnerContainer } from '../style/container/Container';

const FilterBar = ({ filterList, getFilters }) => {
    useEffect(() => {
        getFilters();
    }, [getFilters]);

    if (filterList?.length) {
        FilterManager({ filterList });
    }

    return <InnerContainer></InnerContainer>;
};

FilterBar.propTypes = {
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
    ),
    getFilters: PropTypes.func,
};

FilterBar.defaultProps = {
    filterList: [],
    getFilters: () => {},
};

const mapStateToProps = ({ filter }) => {
    return {
        filterList: filter.filterList,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getFilters: () => {
            dispatch(getFiltersAction());
        },
    };
};

const FilterBarContainer = connect(mapStateToProps, mapDispatchToProps)(FilterBar);
export default FilterBarContainer;
