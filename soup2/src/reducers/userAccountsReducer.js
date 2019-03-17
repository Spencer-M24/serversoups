import {
    REGISTERING,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    LOGGING_IN,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} from "../actions/userAcctActions";
const initialState = {
    registering: false,
    error: null,
    loggingIn: false,
    loginInfo: localStorage.getItem("token"),
    registration: null,
    userId: null
};


export default (state = initialState, action) => {
    switch (action.type) {
        case REGISTERING:
            return { ...state, registering: true };
        case REGISTER_SUCCESS:
            return { ...state, registering: false, registration: action.payload };
        case REGISTER_FAILURE:
            return { ...state, registering: false, error: "Could not register user" };
        case LOGGING_IN:
            return { ...state, loggingIn: true };
        case LOGIN_SUCCESS:

            return {...state, userId: action.payload, loggingIn: false, }; 
            // console.log("Yes success");

            // return { loggingIn: false, loginInfo: action.payload };
        case LOGIN_FAILURE:
            return { ...state, loggingIn: true, error: "Error logging in." };
        default:
            return state;
    }
};
