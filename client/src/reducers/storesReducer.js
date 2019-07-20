import { FETCH_STORES, SELECT_STORE } from '../actions/types';

const storesReducer = (state = { stores: [] }, action) => {
	switch (action.type) {
		case FETCH_STORES:
			return {
				...state,
				stores: action.payload
			};
		case SELECT_STORE:
            console.log(action.payload);
			return {
				...state,
				selectedStore: action.payload
			};
		default:
			return state;
	}
};

export default storesReducer;
