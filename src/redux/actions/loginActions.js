export const User_logIn = "User_logIn";
export const User_logOut = "User_logOut";

export const userLogIn = data => {
    return {type: User_logIn, payload: data}
}

export const userLogOut = data => {
    return {type: User_logOut, payload: data}
}