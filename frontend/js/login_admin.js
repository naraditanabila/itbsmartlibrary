function signIn() {
		var uname = document.getElementById('username').value;
		var pass = document.getElementById('password').value;

		if (uname == "adminperpus" && pass == "adminperpus") {
			alert ("Login successfully");
			window.location = "admin_menu.html";
			return false;
	}
	else {
		alert("Incorrect username or password");
	}
};
