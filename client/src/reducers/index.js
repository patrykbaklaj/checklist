import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import questionReducer from '../reducers/questionReducer';
import categoriesReducer from '../reducers/categoriesReducer';
import storesReducer from './storesReducer';
import checklistReducer from './checklistReducer';
import auditReducer from './auditReducer';

export default combineReducers({
	form: formReducer,
	question: questionReducer,
	category: categoriesReducer,
	store: storesReducer,
	checklist: checklistReducer,
	audit: auditReducer
});
