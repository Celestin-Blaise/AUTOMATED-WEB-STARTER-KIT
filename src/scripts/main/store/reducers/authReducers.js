// const initialState = {
// 	name: '',
// 	authStatus: false,
// 	authError: ''
// };

// const authReducers = (state = initialState, action) => {
// 	switch (action.type) {
// 		case 'SIGNUP_SUCCESS':
// 			console.log('SIGNUP_SUCCESS');
// 			return {
// 				...state,
// 				name: action.userInfo.name,
// 				authError: ''
// 			};

// 		case 'SIGNUP_ERROR':
// 			console.log(action.error.message);
// 			return {
// 				...state,
// 				authError: action.error.message
// 			};

// 		case 'LOGIN_SUCCESS':
// 			return {
// 				...state,
// 				authError: ''
// 			};

// 		case 'LOGIN_ERROR':
// 			return {
// 				...state,
// 				authError: 'Login Failed'
// 			};
// 		case 'USER_LOGGEDIN':
// 			return {
// 				...state,
// 				authStatus: action.user
// 			};
// 		case 'USER_LOGGEDOUT':
// 			console.log('USER_LOGGEDOUT');
// 			return {
// 				...state,
// 				authStatus: false
// 			};

// 		default:
// 			return state;
// 	}
// };

// export default authReducers;
