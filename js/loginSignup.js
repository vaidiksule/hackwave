var x = document.getElementById("loginSwapBtn");
var y = document.getElementById("registerSwapBtn");
var z = document.getElementById("btn");

var userId = document.getElementById("username").value;
var password = document.getElementById("userpass").value;
var email = document.getElementById("emailId").value;

function registerSwap() {
  x.style.left = "-400px";
  y.style.left = "50px";
  z.style.left = "110px";
}

function loginSwap() {
  x.style.left = "50px";
  y.style.left = "450px";
  z.style.left = "0px";
}




function login_signup_check() {
  if (document.getElementById("userpass") !== null) {
    alert("please");
  } else {
    location.href = "/hackwave/html/main.html";
  }
}




// document.getElementById("myCheckbox").addEventListener("click", function () {
//   if (this.checked) {
//     window.location.href = "/html/termsandconditions.html"; // Change "new_page.html" to the page you want to redirect to
//   }
// });
