import {initializeApp} from 'firebase/app'
import { getAuth, onAuthStateChanged } from "firebase/auth"
import { getFunctions } from "firebase/functions"
import { getFirestore } from '@firebase/firestore'
import { getStorage } from 'firebase/storage'


const firebaseConfig = {
  apiKey: "AIzaSyC5pPVaZZxrA9YJFpcwU1CS6v3S_datyGM",
  authDomain: "insurance-73117.firebaseapp.com",
  projectId: "insurance-73117",
  storageBucket: "insurance-73117.firebasestorage.app",
  messagingSenderId: "102923867637",
  appId: "1:102923867637:web:b859c41b3ecc884c00fcbc",
  measurementId: "G-M3080E723G"
}

const app = initializeApp(firebaseConfig)

export const authentication = getAuth(app)
export const functions = getFunctions(app)

export const db = getFirestore(app)

export const storage = getStorage(app)


export function onAuthStateChange(userCallback, claimsCallback, loadingCallback = null) {
    loadingCallback(true)
    return onAuthStateChanged(authentication, user => {
        if (user) {
            return authentication.currentUser.getIdTokenResult().then((idTokenResult) => {
                claimsCallback(idTokenResult.claims)
                userCallback({ loggedIn: true, ...user });
                loadingCallback(false)
            }).catch(error => {
                console.log(error)
                loadingCallback(false)
                return userCallback({ loggedIn: false });
            });
        } else {
            loadingCallback(false)
           return userCallback({ loggedIn: false });
      }
    });
}

