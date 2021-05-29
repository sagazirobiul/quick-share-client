import firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from "../../config/firebaseConfig";


export const initializeApp = () => {
    if(!firebase.apps.length){
        firebase.initializeApp(firebaseConfig);
    }
}

const setEmail = (email) => {
  localStorage.setItem('email', email);
}

export const signInWithProvider = (provider) => {
   return firebase.auth().signInWithPopup(provider)
    .then( result => {
      let {displayName, email, photoURL} = result.user;
      const userInfo = {
          name: displayName,
          email: email,
          img: photoURL
      }
      setEmail(email)
      return userInfo;
    }).catch((error) => {
      const userInfo = {
          message: error.message
      }
      return userInfo;
    });
}

export const createAccount = (email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(result => {
      let {displayName, email, photoURL} = result.user;
      const userInfo = {
          name: displayName,
          email: email,
          img: photoURL
      }
      setEmail(email)
      return userInfo;
  })
  .catch((error) => {
    const userInfo = {
      message: error.message
    }
    return userInfo;
  });
}

export const loginWithEmail = (email, password) =>{
  return firebase.auth().signInWithEmailAndPassword(email, password)
  .then(result => {
    let {displayName, email, photoURL} = result.user;
    const userInfo = {
        name: displayName,
        email: email,
        img: photoURL
    }
    setEmail(email)
    return userInfo;
  })
  .catch((error) => {
    const userInfo = {
      message: error.message
    }
    return userInfo;
  });
}