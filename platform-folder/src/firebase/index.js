import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDmkpNA4oZ9y0BnFNXOpeeG0jp-TKVwXMc",
    authDomain: "gamessalesplat.firebaseapp.com",
    projectId: "gamessalesplat",
    storageBucket: "gamessalesplat.appspot.com",
    messagingSenderId: "126225488293",
    appId: "1:126225488293:web:439223e914e98ad60cb04c"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };