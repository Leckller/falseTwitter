import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: 'AIzaSyC9W-cWWkb-FFwzQD9AHKzqA5GOFNFGbQw',
  authDomain: 'twitteruy-a43a4.firebaseapp.com',
  projectId: 'twitteruy-a43a4',
  storageBucket: 'twitteruy-a43a4.appspot.com',
  messagingSenderId: '647947380352',
  appId: '1:647947380352:web:8595ef05e2aafb092fa865',
  measurementId: 'G-N3KSS41JC0',
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const storage = getStorage(app);

export { auth, provider, db, storage };
