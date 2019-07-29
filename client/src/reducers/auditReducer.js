import { START_AUDIT } from '../actions/types';

const auditReducer = (state = {}, action) => {
	switch (action.type) {
		case START_AUDIT:
			return {
				currentAudit: action.payload
			};
		default:
			return state;
	}
};

export default auditReducer;
