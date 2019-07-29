import { START_AUDIT, FETCH_CHECKLIST } from '../actions/types';

const auditReducer = (state = {}, action) => {
	switch (action.type) {
		case START_AUDIT:
			return {
				...state,
				currentAudit: action.payload
			};
		case FETCH_CHECKLIST:
			return {
				...state,
				checklist: action.payload
			};
		default:
			return state;
	}
};

export default auditReducer;
