import firebase from "firebase/app";
import "firebase/firestore";

export const config = {
  apiKey: "AIzaSyA16MUPnYcXszQBC4OITuvzPYnbparcFP8",
  authDomain: "gtc-digital-wallet.firebaseapp.com",
  projectId: "gtc-digital-wallet",
  storageBucket: "gtc-digital-wallet.appspot.com",
  messagingSenderId: "554294778299",
  appId: "1:554294778299:web:521e4fbff6df442fcc0c9e",
  measurementId: "G-W3X2PPERPM",
};
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}
export default firebase.firestore();
