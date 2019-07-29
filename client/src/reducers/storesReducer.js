import { FETCH_STORES } from '../actions/types';

const storesReducer = (state = { stores: [] }, action) => {
	switch (action.type) {
		case FETCH_STORES:
			return {
				...state,
				stores: action.payload
			};
		default:
			return state;
	}
};

export default storesReducer;
