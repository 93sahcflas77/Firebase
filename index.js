import { initializeApp } from "firebase/app";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCyF_aNkpbR6KNRdUPyRjUKzB0mfNChfz4",
  authDomain: "testing-ecaf9.firebaseapp.com",
  projectId: "testing-ecaf9",
  storageBucket: "testing-ecaf9.appspot.com",
  messagingSenderId: "616445741218",
  appId: "1:616445741218:web:281aca1c99da1653c86ffb",
  measurementId: "G-0MMVY1Y1MT",
};

const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

let gmail = "abcd@gmal.com";
let password = "Chan@12thakur@";

// createUserWithEmailAndPassword(auth,gmail,password).then( (userCredential) => {

//     const user = userCredential.user.metadata;

//     console.log(user);

// }).catch( (error) => {
//     console.log(error.code);
//     console.log(error.message);
// });

signInWithEmailAndPassword(auth, gmail, password)
  .then((userCredential) => {
    let a = userCredential.user.uid;
    console.log(a);

    console.log("user sign in");
  })
  .catch((error) => {
    console.log(error.code);
    console.log(error.message);
  });

onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    console.log(uid);
    console.log("User signed in");

  } else {
    console.log("User signed out");
  }
});

