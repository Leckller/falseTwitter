import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: 'AIzaSyAWcSd8cQ9nFSZbAZ61jUUbKZvZTKvjJj4',

  authDomain: 'twitteruy-cde36.firebaseapp.com',

  projectId: 'twitteruy-cde36',

  storageBucket: 'twitteruy-cde36.appspot.com',

  messagingSenderId: '3441631061',

  appId: '1:3441631061:web:94adcc00fda1ba315419dc',

  measurementId: 'G-C9BPPGRSBS',

};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };

export default db;
