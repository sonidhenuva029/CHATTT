
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyDSFkKjZVJ-a39fCdsrrWcrZPQKmr1yiWY",
    authDomain: "letschat-88881.firebaseapp.com",
    databaseURL: "https://letschat-88881-default-rtdb.firebaseio.com",
    projectId: "letschat-88881",
    storageBucket: "letschat-88881.appspot.com",
    messagingSenderId: "817968857540",
    appId: "1:817968857540:web:37eb6268c570298b8b2491",
    measurementId: "G-121Q9DWQVR"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function adding_Room() {
    newRoom = document.getElementById("add_room").value;
    localStorage.setItem("Room Name", newRoom);
    console.log(newRoom);
    firebase.database().ref("/").child(newRoom).update({
          room: "adding the rooms"
    });
    window.location = "kPage.html";
}

function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("Room Name", name);
    window.location = "kPage.html";
}


var username = localStorage.getItem("user");
document.getElementById("username").innerHTML = username;

function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
          document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                childKey = childSnapshot.key;
                Room_names = childKey;
                //Start code
                console.log(Room_names);
                var row = "<div id = "+Room_names+" onclick = 'redirectToRoomName(this.id)'>" + Room_names + "</div>";
                document.getElementById("output").innerHTML = row;
                

                //End code
          });
    });
}
getData();

function logout() {
    localStorage.removeItem("user");
    localStorage.removeItem("Room Name");
    window.location = "index.html";

}