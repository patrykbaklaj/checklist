import stores from '../apis/stores';
import {FETCH_STORES} from './types';

export const fetchStores = () => async dispatch => {
	try {
        const response = await stores.get('/');
        console.log(response.data);

		dispatch({
			type: FETCH_STORES,
			payload: response.data
		});
	} catch (e) {
		throw e;
	}
};
