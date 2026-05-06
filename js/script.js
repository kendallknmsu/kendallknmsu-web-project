document.addEventListener("DOMContentLoaded", function () {

const form = document.getElementById("userForm");
const output = document.getElementById("outputMessage");

form.addEventListener("submit", function (event) {
event.preventDefault(); // stop page reload

const name = document.getElementById("name").value;

if (name === "") {
output.textContent = "Please enter your name.";
} else {
output.textContent = "Welcome to the Salkantay Trek, " + name + "!";
}
});

});