 document.getElementById("cookie").innerHTML =
"cookiesEnabled is " + navigator.cookieEnabled;

document.getElementById("sprak").innerHTML = navigator.language;

if(navigator.language =="sv-SE"){
	document.getElementById("sprak").innerHTML = "Valt språk är svenska";
}
else{
	document.getElementById("sprak").innerHTML = "Valt språk är INTE svenska"
}