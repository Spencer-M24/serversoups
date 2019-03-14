import axios from "axios";

export const REGISTERING = "REGISTERING";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";
export const LOGGING_IN = "LOGGING_IN";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const register = user => {
	let headers = {
		"Content-Type": "application/json",
	}; 
	const promise = axios.post(
		`https://soup-server.herokuapp.com/auth/register`, 
		user,

		{ headers: headers }
	);
	return dispatch => {
		dispatch({ type: REGISTERING });
		promise
			.then(response => {
				dispatch({ type: REGISTER_SUCCESS, payload: response.data });
			})
			.catch(err => {
				if (err.response) {
				}
				dispatch({
					type: REGISTER_FAILURE,
					error: "Could not register user.",
				});
			});
	};
};
export const logIn = credentials => {

	
	const promise = axios.post(
		`https://soup-server.herokuapp.com/auth/login`,
		credentials
	);
	return dispatch => {
		dispatch({ type: LOGGING_IN });
		promise
			.then(response => {
				localStorage.setItem("token", response.data.token);
				dispatch({ type: LOGIN_SUCCESS, payload: true });
			})
			.catch(err => {
				dispatch({ type: LOGIN_FAILURE, error: "Error loggin in." });
			});
	};
};

