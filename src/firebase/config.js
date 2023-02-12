
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "**************************************",
    authDomain: "**************************************",
    projectId: "**************************************",
    storageBucket: "**************************************",
    messagingSenderId: "**************************************",
    appId: "**************************************"
};


//init firebase
firebase.initializeApp(firebaseConfig);

const firestore_db = firebase.firestore();
const firebase_auth = firebase.auth();


const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { firestore_db, firebase_auth, timestamp}