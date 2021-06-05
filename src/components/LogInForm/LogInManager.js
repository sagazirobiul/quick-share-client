import firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from "../../config/firebaseConfig";


export const initializeApp = () => {
    if(!firebase.apps.length){
        firebase.initializeApp(firebaseConfig);
    }
}

const setInfo = (info) => {
  localStorage.setItem('info', JSON.stringify(info));
}

export const signInWithProvider = (provider) => {
   return firebase.auth().signInWithPopup(provider)
    .then( result => {
      let {email, photoURL} = result.user;
      const userInfo = {
          email: email,
          img: photoURL
      }
      setInfo(userInfo)
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
      let {email, photoURL} = result.user;
      const userInfo = {
          email: email,
          img: photoURL
      }
      setInfo(userInfo)
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
    let {email, photoURL} = result.user;
    const userInfo = {
        email: email,
        img: photoURL
    }
    setInfo(userInfo)
    return userInfo;
  })
  .catch((error) => {
    const userInfo = {
      message: error.message
    }
    return userInfo;
  });
}