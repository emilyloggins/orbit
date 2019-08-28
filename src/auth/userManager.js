import * as firebase from 'firebase/app'
import 'firebase/auth'

const url = process.env.NODE_ENV === 'production'
    ? "/api/users"
    : "http://localhost:8088/api/users";

const setUserInLocalStorage = (user) => {
  localStorage.setItem('user', JSON.stringify(user));
}

//username email and password
export const register = (user) => {
  return registerWithFirebase(user.email, user.password)
    .then(firebaseId => {
      user.password = null;
      user.id = firebaseId;
      return saveUserToJsonServer(user)
    })
    .then(newUserFromJSONServer => {
      setUserInLocalStorage(newUserFromJSONServer);
      return newUserFromJSONServer;
    })
}

export const loginFunction = (email, password) => {
  return loginWithFirebase(email, password)
    .then(firebaseId => {
      return getUser(firebaseId)
    })
    .then(userFromJSONServer => {
      setUserInLocalStorage(userFromJSONServer);
      return userFromJSONServer
    })
    .catch(() => {
      alert(`Hmmm, information does not match.`)
    })
}

export const saveUserToJsonServer = (user) => {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  })
    .then(res => res.json())
    .then(newUser => {
      setUserInLocalStorage(newUser);
      return newUser;
    });
}

export const getUser = (userId) => {
  return fetch(`${url}/${userId}`)
    .then(res => res.json());
}

export const getUserFromLocalStorage = () => {
  const user = sessionStorage.getItem('user');

  if (!user) return null;

  return JSON.parse(user);
}

export const logout = () => {
  sessionStorage.removeItem('user');
}

export const registerWithFirebase = (email, password) => {
  return firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(data => {
      return data.user.uid
    })
}

export const loginWithFirebase = (email, password) => {
  return firebase.auth().signInWithEmailAndPassword(email, password)
    .then(data => {
      return data.user.uid
    })
}
