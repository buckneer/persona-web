// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVPB4lyr_Q9r6cErT55weftii_SeI2DME",
  authDomain: "persona-39e7c.firebaseapp.com",
  projectId: "persona-39e7c",
  storageBucket: "persona-39e7c.appspot.com",
  messagingSenderId: "856582372435",
  appId: "1:856582372435:web:06684284031e9eae185aa6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const firestore = getFirestore(app);


const logInWithEmail = async (email: string, password: string) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (err: any) {
        console.error(err);
        alert(err.message);
    }
}

const registerWithEmail = async (name: string, email: string, password: string) => {
    try {

        const resp = await createUserWithEmailAndPassword(auth, email, password);

        const user = resp.user;

        await addDoc(collection(firestore, "users"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
            admin: false
        });

    } catch(err: any) {
        console.error(err);
        alert(err.message);
    }
}

const sendPasswordReset = async (email: string) => {
    try {
        await sendPasswordResetEmail(auth, email);
        alert("Password reset link sent!");
    } catch (err: any) {
        console.error(err);
        alert(err.message);
    }
}

const logout = () => {
    signOut(auth);
};

export {
    auth,
    firestore,
    logInWithEmail,
    registerWithEmail,
    sendPasswordReset,
    logout,
};