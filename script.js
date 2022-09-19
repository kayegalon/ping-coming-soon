const email = document.getElementById("email");
const btn = document.getElementById("button");
const error = document.getElementById("error");

btn.addEventListener("click", function() {
	const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	if (email.value.match(validRegex)) {
		error.style.display = "none";
		email.style.borderColor = "hsl(223, 100%, 88%)";
		email.style.fontFamily = "'Libre Franklin', sans-serif";
		email.style.color = "hsl(209, 33%, 12%)";
	} else {
		error.style.display = "flex";
		email.style.borderColor = "hsl(354, 100%, 66%)";
		email.style.fontFamily = "'Libre Franklin', sans-serif";
		email.style.color = "hsl(209, 33%, 12%)";
	}
})