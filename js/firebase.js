
 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCrnYm40ubfT6k6VEVZNGzeQmb8Ak44hKA",
    authDomain: "chat-7621a.firebaseapp.com",
    databaseURL: "https://chat-7621a.firebaseio.com",
    projectId: "chat-7621a",
    storageBucket: "chat-7621a.appspot.com",
    messagingSenderId: "59604919547"
  };
  firebase.initializeApp(config);

//Agregamos la instancia 
  const database = firebase.database();