import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
    getFilters as getFiltersAction,
    getPlaylists as getPlaylistsAction,
} from '../../store/actions';

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

    @media (max-width: 960px) {
        flex-flow: column nowrap;

        div {
            margin-right: 0;
        }
    }
`;

const FilterBar = ({ userToken, filterList, getFilters, getPlaylists }) => {
    const initialFiedlsFilter = {
        country: 'BR',
        locale: 'pt_BR',
        timestamp: '2014-10-23T09:00:00',
        limit: 12,
        offset: 0,
    };
    const [filterFields, setFilterFields] = useState(initialFiedlsFilter);

    let filterListTypes = [];

    useEffect(() => {
        getFilters();
    }, [getFilters]);

    useEffect(() => {
        const { country, locale, timestamp, limit, offset } = filterFields;
        const optionalParameters = `?country=${country}&locale=${locale}&timestamp=${timestamp}&limit=${limit}&offset=${offset}`;

        getPlaylists({ userToken, optionalParameters });

        const callWithTimer = setInterval(
            () => getPlaylists({ userToken, optionalParameters }),
            30000
        );

        return () => {
            clearInterval(callWithTimer);
        };
    }, [filterFields, userToken, getPlaylists]);

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
                            filterFields={filterFields}
                            onChange={setFilterFields}
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
    userToken: PropTypes.string.isRequired,
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
    getPlaylists: PropTypes.func,
};

FilterBar.defaultProps = {
    filterList: [],
    getFilters: () => {},
    getPlaylists: () => {},
};

const mapStateToProps = ({ filter, spotify }) => {
    return {
        filterList: filter.filterList,
        userToken: spotify.userToken,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getFilters: () => {
            dispatch(getFiltersAction());
        },
        getPlaylists: ({ userToken, optionalParameters }) => {
            dispatch(getPlaylistsAction({ userToken, optionalParameters }));
        },
    };
};

const FilterBarContainer = connect(mapStateToProps, mapDispatchToProps)(FilterBar);
export default FilterBarContainer;
