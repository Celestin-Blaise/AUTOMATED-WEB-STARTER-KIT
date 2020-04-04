import firebase from 'firebase/app';
import 'firebase/firestore';

const initialState = {
	objectives: ''
};

const objectivesReducer = (state = initialState, action) => {
	switch (action.type) {
		// case 'CREATE_OBJECTIVE':
		// 	console.log('OBJECTIVE_CREATED');
		case 'GET_OBJECTIVE':
			console.log('OBJECTIVE_FETCHED');
			state = {
				objectives: action.state
			};
		default:
			return state;
	}
};

export default objectivesReducer;
