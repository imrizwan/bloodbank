import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyCz4sZDb3dD3O3jJoGACwvZNp8-IVPDQFo",
  authDomain: "learn-html-and-css-587dc.firebaseapp.com",
  databaseURL: "https://learn-html-and-css-587dc.firebaseio.com",
  projectId: "learn-html-and-css-587dc",
  storageBucket: "learn-html-and-css-587dc.appspot.com",
  messagingSenderId: "393027476568"
}

firebase.initializeApp(config)

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth