import axios from 'axios';

export const getData = (state) => {
	return (dispatch, getState) => {
		axios.get('localhost/get').then((response) => {
			const data = response.data;
			console.log('DATA 🔥🔥🔥', data);
			dispatch({
				type: 'GET_OBJECTIVE',
				state: data
			});
		});
	};
};

// export const signupUser = (details) => {
// 	return (dispatch, getState) => {
// 		firebase
// 			.auth()
// 			.createUserWithEmailAndPassword(details.email, details.password)
// 			.then((response) => {
// 				dispatch(authStatus());
// 				return firebase
// 					.firestore()
// 					.collection('users')
// 					.doc(response.user.uid)
// 					.set({ name: details.name });
// 			})
// 			.then(() => {
// 				dispatch({
// 					type: 'SIGNUP_SUCESS'
// 				});
// 			})
// 			.catch((error) => {
// 				dispatch({
// 					type: 'SIGNUP_ERROR',
// 					error
// 				});
// 			});
// 	};
// };

// export const loginUser = (details) => {
// 	return (dispatch, getState) => {
// 		firebase
// 			.auth()
// 			.signInWithEmailAndPassword(details.email, details.password)
// 			.then((response) => {
// 				dispatch(authStatus());
// 				dispatch({
// 					type: 'LOGIN_SUCCESS',
// 					userInfo: details
// 				});
// 			})
// 			.catch((error) => {
// 				console.log('ERROR', error);
// 				dispatch({
// 					type: 'LOGIN_ERROR',
// 					error
// 				});
// 			});
// 	};
// };

// export const createObjective = (objective, userId) => {
// 	return (dispatch, getState) => {
// 		const db = firebase.firestore();
// 		return db
// 			.collection('users')
// 			.doc(userId)
// 			.collection('objectives')
// 			.add({
// 				...objective,
// 				createdAt: new Date()
// 			})
// 			.then(() => {
// 				dispatch({
// 					type: 'CREATE_OBJECTIVE'
// 				});
// 			})
// 			.catch((error) => {
// 				console.log('FIRESTORE_ERROR' + error);
// 			});
// 	};
// };

// export const authStatus = () => {
// 	return (dispatch, getState) => {
// 		return firebase.auth().onAuthStateChanged((user) => {
// 			if (user) {
// 				console.log('USER_LOGGEDIN 👍👍👍👍==', user);
// 				dispatch({
// 					type: 'USER_LOGGEDIN',
// 					user
// 				});
// 			} else {
// 				console.log('USER_LOGGEDOUT', user);
// 				dispatch({
// 					type: 'USER_LOGGEDOUT'
// 				});
// 			}
// 		});
// 	};
// };

// export const signOut = () => {
// 	return (dispatch, getState) => {
// 		firebase.auth().signOut().then(() => {
// 			console.log('SIGNOUT_SUCCESS');
// 		});
// 	};
// };
