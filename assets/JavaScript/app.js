// Section 1:
// Firebase Initlization and Global Variables
// 
// Initialize Firebase
var config = {
apiKey: "AIzaSyCRkOiiiqJaUaHwEBkb3LY5uyheSEYUpQY",
authDomain: "rpsgame-25f0d.firebaseapp.com",
databaseURL: "https://rpsgame-25f0d.firebaseio.com",
projectId: "rpsgame-25f0d",
storageBucket: "rpsgame-25f0d.appspot.com",
messagingSenderId: "924910121478"
};
firebase.initializeApp(config);

//Reference to the firebase database
var database = firebase.database();
// Reference to the chat data node in firebase
var chatData = database.ref("/chat");
// Reference to the players ingame node on firebase
var playersRef = database.ref("players");
// Reference to the current turn node in firebase
var currentTurnRef = database.ref("turn");
// Set username to "Guest" until player enters name
var userName = "Guest";
// Current players in game will be set to null until players enter
var currentPlayers = null;
// Set current turn to null 
var currentTurn = null;
// Set player number to false
var playerNum = false;
// If player one does not exist
var playerOneExists = false;
// If player two does not exist
var playerTwoExists = false;
// Player one data
var playerOneData = null;
// Player two data
var playerTwoData = null;

// 
// Section 2:
// Functions and Listeners
// 
// USERNAME LISTENER 
// When the user presses the start button..
// Get userName and get user in game
$("#start").click(function() {
	// If the username does not equal and empt string
	if ($("#userName").val() !== ""){
		userName = capitalize($("#userName").val());
		// Tests and Debugging
		console.log(userName);
		// Call user in game function
		// getInGame();
	}
});


function capitalize(name) {
	return name.charAt(0).toUpperCase() + name.slice(1);
}

// 
// Section 3: 
// Main Process
// 

