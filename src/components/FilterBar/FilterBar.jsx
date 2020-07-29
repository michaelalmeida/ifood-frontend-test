import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import styled from 'styled-components';

import { getFilters as getFiltersAction } from '../../store/actions';

import FilterManager from './FilterManager';
import FilterInput from './FilterInput';

import { mainColor } from '../style/colors';

export const Bar = styled.div`
    display: flex;
    flex: 0 1 auto;
    align-content: flex-start;
    padding: 20px;
    flex-flow: row nowrap;
    justify-content: space-around;
    background: ${mainColor};

    div {
        flex-grow: 1;
        margin-right: 5px;

        &:last-child {
            margin-right: 0;
        }
    }

    @media (max-width: 1024px) {
        flex-flow: column nowrap;

        div {
            margin-right: 0;
        }
    }
`;

const FilterBar = ({ filterList, getFilters }) => {
    let filterListTypes = [];

    useEffect(() => {
        getFilters();
    }, [getFilters]);

    if (filterList?.length) {
        filterListTypes = FilterManager({ filterList });
    }

    return (
        <Bar>
            {filterListTypes?.length && filterList?.length && (
                <>
                    {filterList.map((filter, index) => (
                        <FilterInput
                            key={filter.id}
                            type={filterListTypes[index]}
                            id={filter.id}
                            name={filter.name}
                            values={filter.values}
                            validation={filter.validation}
                        />
                    ))}
                </>
            )}
        </Bar>
    );
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
