import { SET_FILTERS } from './types';

export const initialState = {
    filterList: [],
};

const filterReducer = (state = initialState, { type, filterList }) => {
    if (type === SET_FILTERS) {
        return {
            ...state,
            filterList,
        };
    }

    return state;
};

export default filterReducer;
