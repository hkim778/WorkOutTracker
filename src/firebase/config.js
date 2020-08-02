import * as firebase from "firebase";
import "@firebase/auth";
import "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC6gL76sWv2YPAsS7ahoVBEtt0K44gUgZw",
  authDomain: "workout-tracker-eabdf.firebaseapp.com",
  databaseURL: "https://workout-tracker-eabdf.firebaseio.com",
  projectId: "workout-tracker-eabdf",
  storageBucket: "workout-tracker-eabdf.appspot.com",
  messagingSenderId: "466271068629",
  appId: "1:466271068629:ios:d45dbdaa5197eb38e21d5c",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
