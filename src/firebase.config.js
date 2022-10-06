import { getApp, getApps, initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyAtUHIw_lCc4GT-8HlStfrKW3uj247-7Ug",
    authDomain: "deliveryapp-2f5fa.firebaseapp.com",
    databaseURL: "https://deliveryapp-2f5fa-default-rtdb.firebaseio.com",
    projectId: "deliveryapp-2f5fa",
    storageBucket: "deliveryapp-2f5fa.appspot.com",
    messagingSenderId: "785860916617",
    appId: "1:785860916617:web:6363a1fceda09b757c9d58"
};

const app = getApps.length > 0 ? getApp(): initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage};