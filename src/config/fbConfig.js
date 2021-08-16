import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyDNXSk6lnbPUj489ggNtQ6PSiSoNXBc544",
    authDomain: "net-nanji-marioplan.firebaseapp.com",
    projectId: "net-nanji-marioplan",
    storageBucket: "net-nanji-marioplan.appspot.com",
    messagingSenderId: "240568310957",
    appId: "1:240568310957:web:0fb6929eb49b796cb63a24",
    measurementId: "G-EBS2J48YER"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  firebase.firestore().settings({ timestampsInSnapshots: true })

  export default firebase;