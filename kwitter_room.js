var firebaseConfig = {
      apiKey: "AIzaSyArDKhOXZ755FnpQMWjO6rV67TO8rpL4i0",
      authDomain: "kwitter-2-c2139.firebaseapp.com",
      databaseURL: "https://kwitter-2-c2139-default-rtdb.firebaseio.com",
      projectId: "kwitter-2-c2139",
      storageBucket: "kwitter-2-c2139.appspot.com",
      messagingSenderId: "572459660765",
      appId: "1:572459660765:web:084d5c9d496b1966133234"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);


    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = " Welcome " + user_name + "!";

    function addroom()
    {
          room_name = document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose : "Adding Room Name"
          });
          localStorage.setItem("room_name" , room_name);
          window.location = "kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("room name - " + Room_names);
      //Start code
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#" +Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      localStorage.setItem("room_name" , name);
      window.location = "kwitter_page.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";

}