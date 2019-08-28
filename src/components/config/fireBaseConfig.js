 import * as firebase from 'firebase/app'

 const firebaseConfig = {
    apiKey: "AIzaSyB5-o_0c2nHpTZzrB3MGneM2ZDMqAWadmA",
    authDomain: "portfolio-95583.firebaseapp.com",
    databaseURL: "https://portfolio-95583.firebaseio.com",
    projectId: "portfolio-95583",
    storageBucket: "",
    messagingSenderId: "269197785153",
    appId: "1:269197785153:web:cfd86f56f59e7487"
  };

  // Initialize Firebase
  export default  firebase.initializeApp(firebaseConfig);