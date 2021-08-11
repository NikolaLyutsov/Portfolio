import firebase from 'firebase';

var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBkSypuXy0Z5x28Q9JveLwRZWsQWHDatXU",
    authDomain: "portfolio2test-95dfe.firebaseapp.com",
    projectId: "portfolio2test-95dfe",
    storageBucket: "portfolio2test-95dfe.appspot.com",
    messagingSenderId: "1032912685110",
    appId: "1:1032912685110:web:b3171c11f35081fb47b097"
});

var db = firebaseApp.firestore();

export { db };