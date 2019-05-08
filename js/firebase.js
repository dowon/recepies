// Initialize Firebase

var config = {
  apiKey: "AIzaSyAXZFH_U-bzQZZl-E_KQ3-KHM9P_WSEul4",
  authDomain: "recepies-583eb.firebaseapp.com",
  databaseURL: "https://recepies-583eb.firebaseio.com",
  projectId: "recepies-583eb",
  storageBucket: "recepies-583eb.appspot.com",
  messagingSenderId: "525811569138"
};
firebase.initializeApp(config);

firebase.initializeApp({
  apiKey: '### FIREBASE API KEY ###',
  authDomain: '### FIREBASE AUTH DOMAIN ###',
  projectId: '### CLOUD FIRESTORE PROJECT ID ###',
}
);

firebase.firestore().enablePersistence()
  .then(function() {
      // Initialize Cloud Firestore through firebase
      var db = firebase.firestore();
  })
  .catch(function(err) {
      if (err.code == 'failed-precondition') {
          // Multiple tabs open, persistence can only be enabled
          // in one tab at a a time.
          // ...
      } else if (err.code == 'unimplemented') {
          // The current browser does not support all of the
          // features required to enable persistence
          // ...
      }
  });