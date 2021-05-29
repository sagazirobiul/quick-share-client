import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import SignIn from './SignIn'
import SignUp from './SignUp'
import { initializeApp, signInWithProvider } from './LogInManager';
import { UserContext } from '../../App';

const LogInForm = () => {
    initializeApp();
    const [user, setUser] = useContext(UserContext)
    const google = new firebase.auth.GoogleAuthProvider();
    const facebook = new firebase.auth.FacebookAuthProvider();
    const github = new firebase.auth.GithubAuthProvider();
    const logIn = (provider) => {
        signInWithProvider(provider)
        .then(res => {
            setUser(res);
        })
    }
    return (
        <div>
            <SignIn/>
            <SignUp/>
            <button onClick={() => logIn(google)}>SignIn with google</button>
            <button onClick={() => logIn(facebook)}>SignIn with facebook</button>
            <button onClick={() => logIn(github)}>SignIn with github</button>
        </div>
    );
};

export default LogInForm;