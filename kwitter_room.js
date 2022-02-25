
var firebaseConfig = {
      apiKey: "AIzaSyDDtQgRlTd4nMLOz3L1_Iqab_EBSgVRN9Y",
      authDomain: "classtest-74af6.firebaseapp.com",
      databaseURL: "https://classtest-74af6-default-rtdb.firebaseio.com",
      projectId: "classtest-74af6",
      storageBucket: "classtest-74af6.appspot.com",
      messagingSenderId: "799246756624",
      appId: "1:799246756624:web:07fbb236ac9281ec97d395",
      measurementId: "G-BJJDTYMJ74"
    };
    
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
