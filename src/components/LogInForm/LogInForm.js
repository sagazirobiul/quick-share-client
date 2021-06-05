import React, { useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import SignIn from './SignIn'
import SignUp from './SignUp'
import { initializeApp, signInWithProvider } from './LogInManager';
import { useDispatch } from 'react-redux'
import { userLogIn } from '../../redux/actions/loginActions';
import { useHistory, useLocation, withRouter } from 'react-router-dom';
import './LogInForm.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle, faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons'

const LogInForm = (props) => {
    initializeApp();
    const [isNewUser, setIsNewUser] = useState(false);
    const dispatch = useDispatch()
    const google = new firebase.auth.GoogleAuthProvider();
    const facebook = new firebase.auth.FacebookAuthProvider();
    const github = new firebase.auth.GithubAuthProvider();
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    const redirect = () => {
        history.replace(from);
    }
    const logIn = (provider) => {
        signInWithProvider(provider)
        .then(res => {
            dispatch(userLogIn(res))
            redirect();
        })
    }
    return (
        <div className="marginTop col-md-4 mx-auto cardBox">
            {
                isNewUser ?
                <p className="formTitle">Sign Up</p>:
                <p className="formTitle">Sign In</p>
            }
            {
                isNewUser? 
                <SignUp dispatch={dispatch} redirect={redirect}/>:
                <SignIn dispatch={dispatch} redirect={redirect}/>
            }
            {
                isNewUser? 
                <p className="userIdentity">Already have an account? <button onClick={() => setIsNewUser(false)}>Sign In</button></p>:
                <p className="userIdentity">Create a new account? <button onClick={() => setIsNewUser(true)}>Sign Up</button></p>
            }
            <p className="or">Or</p>
            <button className="googleBtn" onClick={() => logIn(google)}><FontAwesomeIcon icon={faGoogle} /> Sign In with google</button>
            <button className="facebookBtn" onClick={() => logIn(facebook)}><FontAwesomeIcon icon={faFacebook} /> Sign In with facebook</button>
            <button className="githubBtn" onClick={() => logIn(github)}><FontAwesomeIcon icon={faGithub} /> Sign In with github</button>
        </div>
    );
};

export default withRouter(LogInForm);