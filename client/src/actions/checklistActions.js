import checklists from '../apis/checklists';
import { FETCH_CHECKLISTS } from './types';
import categories from '../apis/categories';

export const fetchChecklists = () => async dispatch => {
	try {
		const response = await categories.get('/');
		dispatch({
			type: FETCH_CHECKLISTS,
			payload: response.data
		});
	} catch (error) {
		throw error;
	}
};
