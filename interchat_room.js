const firebaseConfig = {
      apiKey: "AIzaSyChkgMv7636-Um1VurUUyMrYtXFYPgOO_k",
      authDomain: "interchat-69503.firebaseapp.com",
      databaseURL: "https://interchat-69503-default-rtdb.firebaseio.com",
      projectId: "interchat-69503",
      storageBucket: "interchat-69503.appspot.com",
      messagingSenderId: "245440482911",
      appId: "1:245440482911:web:7dad23a5d9586eaa4255ea"
    };
  
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    username = localStorage.getItem("user_name");

function logout() {
      window.location = "index.html"; 
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      

      
      });});}
getData();
