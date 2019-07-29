import { START_AUDIT, FETCH_CHECKLIST } from '../types';
import checklist from '../../apis/checklists';
import history from '../../history';

export const startAudit = fomrVals => {
	history.push('/audit/process');
	return {
		type: START_AUDIT,
		payload: fomrVals
	};
};

export const fetchChecklist = id => async dispatch => {
	try {
		const response = await checklist.get(`/${id}`);

		console.log(response);
		dispatch({
			type: FETCH_CHECKLIST,
			payload: response.data
		});
	} catch (error) {
		throw error;
	}
};
