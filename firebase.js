// firebase.js
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyB0sTJ9gDprv2TM3lwhq28DQd6TTBPC3uk",
    authDomain: "mathcodi-imagearchive.firebaseapp.com",
    projectId: "mathcodi-imagearchive",
    storageBucket: "mathcodi-imagearchive.firebasestorage.app",
    messagingSenderId: "66491348997",
    appId: "1:66491348997:web:e582773e1fe4d1eaf2446c",
    measurementId: "G-CHPPZ6JF2Q"
  };

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage, ref, uploadBytes, getDownloadURL };