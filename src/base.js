import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBWcfjHjykh8ND-NZcpNyHWG4gEY_dEEzk",
    authDomain: "catch-of-the-day-ef74f.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-ef74f.firebaseio.com",
})

const base = Rebase.createClass(firebaseApp.database())

export { firebaseApp };
export default base; 