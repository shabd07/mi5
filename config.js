import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyBPG27jqfREbLhjvpfjzoKtNyJOd1SnpL4",
  authDomain: "student-attendance-app-71020.firebaseapp.com",
  databaseURL: "https://student-attendance-app-71020.firebaseio.com",
  projectId: "student-attendance-app-71020",
  storageBucket: "student-attendance-app-71020.appspot.com",
  messagingSenderId: "183195933807",
  appId: "1:183195933807:web:8fc6fc8a9870c73df2c19a"
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const db = firebase.database();
