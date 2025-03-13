import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, set, onValue } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyB2_4dRpiuc5ghoA4GnHC1zcEkhVwKwsfw",
    authDomain: "bullbear-9ddfa.firebaseapp.com",
    projectId: "bullbear-9ddfa",
    storageBucket: "bullbear-9ddfa.firebasestorage.app",
    databaseURL: "https://bullbear-9ddfa-default-rtdb.firebaseio.com/",
    messagingSenderId: "771117513923",
    appId: "1:771117513923:web:4abcadf1cb30fee51cb676",
    measurementId: "G-ZELHG90NG2"
  };

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db, ref, get, set, onValue };
