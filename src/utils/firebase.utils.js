import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";

//Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSjpSbn5Ex0Ump77D_H4PkMFrPw_1j0Bo",
  authDomain: "crown-ecommerce-bc3c0.firebaseapp.com",
  projectId: "crown-ecommerce-bc3c0",
  storageBucket: "crown-ecommerce-bc3c0.appspot.com",
  messagingSenderId: "1038994150618",
  appId: "1:1038994150618:web:82bc37d1e9de8bd74541e3",
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);

const googleAuthProvider = new GoogleAuthProvider();

googleAuthProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleAuthProvider);

export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleAuthProvider);

export const signInWithEmailAndPasswordAuth = async (email, password) => {
  if (!email && !password) return
  return await signInWithEmailAndPassword(auth, email, password)
}
export const db = getFirestore();

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (e) {
      console.log("error creating the user", e.message);
    }
  }
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};
