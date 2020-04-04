import { combineReducers } from 'redux';
//import authReducers from './authReducers';
import objectiveReducer from './objectivesReducer';

const rootReducer = combineReducers({
	//auth: authReducers,
	objectives: objectiveReducer
});

export default rootReducer;
