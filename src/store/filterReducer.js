import { SET_FILTERS } from './types';

export const initialState = {
    filters: [],
};

const filterReducer = (state = initialState, { type, filters }) => {
    if (type === SET_FILTERS) {
        return {
            ...state,
            filters,
        };
    }

    return state;
};

export default filterReducer;
