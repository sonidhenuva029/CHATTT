
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

firebase.initializeApp(firebaseConfig);
var roomname = localStorage.getItem("Room Name");
var usernames = localStorage.getItem("user")
function send() {
      var message = document.getElementById("message_input").value;

      firebase.database().ref(roomname).push({
            like: 0,
            message: message,
            name: usernames
      });
      document.getElementById("message_input").value = " ";
};

function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;

                  }
            });
      });
}
getData();
