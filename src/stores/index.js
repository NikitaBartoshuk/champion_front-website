import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from "redux-thunk";
import {shopReducer} from "./reducers/shopReducer";
import {blogReducer} from './reducers/blogReducer'
import {userReducer} from "./reducers/userReducer";
import {vacanciesReducer} from "./reducers/vacanciesReducer";

const rootReducer = combineReducers({
    blog: blogReducer,
    shop: shopReducer,
    user: userReducer,
    vacancies: vacanciesReducer,
})



export const store = createStore(rootReducer, applyMiddleware(thunk))