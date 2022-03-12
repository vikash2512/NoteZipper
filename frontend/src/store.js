import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import { userLoginReducer, userRegistrationReducer } from './reducer/userReducer';

const middleware = [thunk]

const reducer = combineReducers({
    
    userLogin: userLoginReducer,
    userRegister: userRegistrationReducer,
   
});
const userInfoFromStorage = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null;

const initialState = {
    userLogin: { userInfo: userInfoFromStorage },
};

const store = createStore(reducer, initialState, composeWithDevTools(
    applyMiddleware(...middleware)
))

export default store;