//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyA58U48VI1duHYYf0PMPxK2YOz5PQ9gVoM",
      authDomain: "let-chat-web-app-19021.firebaseapp.com",
      databaseURL: "https://let-chat-web-app-19021-default-rtdb.firebaseio.com",
      projectId: "let-chat-web-app-19021",
      storageBucket: "let-chat-web-app-19021.appspot.com",
      messagingSenderId: "319697156119",
      appId: "1:319697156119:web:94f4030e0ed73359000452",
      measurementId: "G-1QJ34T5BHL"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("username_key");
room_name=localStorage.getItem("roomname_key");
document.getElementById("room_name").innerHTML="Roomname: "+room_name;
function send(){
      msg=document.getElementById("message").value;
      firebase.database().ref(room_name).push({
      name:user_name,message:msg,like:0
      });
      document.getElementById("message").value="";
}



function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function logout(){
localStorage.removeItem("username_key");
localStorage.removeItem("roomname_key");
window.location="index.html";
}