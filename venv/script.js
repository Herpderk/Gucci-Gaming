var usernames = [];

function getName() {
	var username = document.getElementById("name").value;
	usernames.push(username);

	if (usernames.length == 1) {
		/*
		var steamID= usernames[0];
		var url = "http://localhost:5000/getUser?steamID=" + steamID;

		var request = new XMLHttpRequest();
		request.open("GET", url);
		request.send();
		*/
		document.getElementById("name").placeholder = "Enter your Spotify username";
		document.getElementById("name").value = "";
	}

	if (usernames.length == 2) {
		var steamID = usernames[0];
		var spotName = usernames[1];
		var url = "http://localhost:5000/getUser?steamID=" + steamID + "&spotName=" + spotName;

		var request = new XMLHttpRequest();
		request.open("GET", url);
		request.send();

		document.getElementById("name").placeholder = "Check the terminal";
		document.getElementById("name").value = "";
	} 
	
	/*else if (usernames.length == 3) {

		var redirect = usernames[2];
		var url = "http://localhost:5000/getRedirect?redirect=" + redirect;

		var request = new XMLHttpRequest();
		request.open("GET", url);
		request.send();
	}*/
}

function openInfo () {
	window.open("file:///D:/info.html");
}