  // Initialize Firebase
import * as firebase from 'firebase'
import 'firebase/storage'

  var config = {
    apiKey: "AIzaSyCrtQ7k7iw_M7WbfSLWiwPKwnBmy8dsrpI",
    authDomain: "photowall-348cb.firebaseapp.com",
    databaseURL: "https://photowall-348cb.firebaseio.com",
    projectId: "photowall-348cb",
    storageBucket: "photowall-348cb.appspot.com",
    messagingSenderId: "16259259869"
  };

  firebase.initializeApp(config)
  
  const database = firebase.database()

  const storage = firebase.storage();

  export {database}

  export {storage, firebase as default}