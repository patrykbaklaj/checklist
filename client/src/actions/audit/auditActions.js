import { START_AUDIT } from '../types';
import history from '../../history';

export const startAudit = fomrVals => {
	history.push('/');
	return {
		type: START_AUDIT,
		payload: fomrVals
	};
};
