import { createStore } from "redux";
import loginReducers from "./reducers/loginReducers";


export const store = createStore(loginReducers);