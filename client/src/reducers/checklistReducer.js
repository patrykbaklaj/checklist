import { FETCH_CHECKLISTS } from '../actions/types';

const checklistReducer = (state = { checklists: [] }, action) => {
	switch (action.type) {
		case FETCH_CHECKLISTS:
			return {
				...state,
				checklists: action.payload
			};
		default:
			return state;
	}
};

export default checklistReducer;
