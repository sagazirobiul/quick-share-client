import { User_logOut, User_logIn } from "../actions/loginActions";

const initialState = {}

const loginReducers = (state = initialState, action) => {
    switch(action?.type) {
        case User_logIn: return action.payload;
        case User_logOut: return action.payload;
        default: return state;
    }
}

export default loginReducers;