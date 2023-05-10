function generate() {
	const length = 16; // length of the password
	const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?"; // characters to include in the password
	let password = "";

	for (let i = 0; i < length; i++) {
		password += charset.charAt(Math.floor(Math.random() * charset.length));
	}

	document.getElementById("password").value = password;
}

function copy() {
	const passwordInput = document.getElementById("password");
	passwordInput.select();
	passwordInput.setSelectionRange(0, 99999); // For mobile devices
	document.execCommand("copy");
	alert("Password copied to clipboard!");
}
