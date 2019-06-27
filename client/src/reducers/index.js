import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import questionReducer from '../reducers/questionReducer';

export default combineReducers({
    form: formReducer,
    question: questionReducer
});
