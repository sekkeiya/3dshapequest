import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB1q5bTAaBIJb1Ug0Tqqb_hSNH7Vo2B2CY",
    authDomain: "shapeshare3d.firebaseapp.com",
    projectId: "shapeshare3d",
    storageBucket: "shapeshare3d.firebasestorage.app",
    messagingSenderId: "1064599680534",
    appId: "1:1064599680534:web:6eb64e6ec15718a664a737",
    measurementId: "G-HCQ7NP0Y6P"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const db = getFirestore(app);

// For local SEKKEIYA emulator testing conventions
if (window.location.hostname === "localhost") {
    try {
        // Only connect if not already connected
        if (!db._firestoreClient || !db._firestoreClient.isTerminated) {
            connectFirestoreEmulator(db, 'localhost', 8080);
        }
    } catch (e) {
        console.log("Emulator connection already established or failed", e);
    }
}
