import firebase from 'firebase';
import 'firebase/firestore';

var config = {
  apiKey: "AIzaSyCckzqZedm2Epfy9yet4iruH4Et62t4_1o",
  authDomain: "crud-a18b9.firebaseapp.com",
  databaseURL: "https://crud-a18b9.firebaseio.com",
  projectId: "crud-a18b9",
  storageBucket: "crud-a18b9.appspot.com",
  messagingSenderId: "296596336745",
  appId: "1:296596336745:web:af0258c28429ef82b932f8"

};
firebase.initializeApp(config);


export default firebase;
