import firebase from 'firebase/app';
import 'firebase/firestore';


firebase.initializeApp({
  apiKey: "AIzaSyDEaHmo46N11vCoqHdn6x6bGaRwtP4Iq0k",
  authDomain: "gato-fab4f.firebaseapp.com",
  databaseURL: "https://gato-fab4f.firebaseio.com",
  projectId: "gato-fab4f",
  storageBucket: "gato-fab4f.appspot.com",
  messagingSenderId: "914998788111",
  appId: "1:914998788111:web:4db9668f358e27945da37a",
  measurementId: "G-3RJ8QZYHMX"



});
let db=firebase.firestore();
//db.settings({timestampsInSnapshots:true});

export default db;