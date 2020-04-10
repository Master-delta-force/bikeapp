import firebase from 'firebase-admin';
import {config} from "../src/config";

// Firebase initialization with credentials
firebase.initializeApp({
    credential: firebase.credential.cert(config.firebase),
    databaseURL: config.db.url
});

export default firebase;
