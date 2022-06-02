var b1 = document.getElementById("lotr");
var b2 = document.getElementById("onyx");
var b3 = document.getElementById("walle");
var b4 = document.getElementById("cars");
var b5 = document.getElementById("cars2");
var b6 = document.getElementById("dog");
var b7 = document.getElementById("cars3");
var b8 = document.getElementById("cars4");
var b9 = document.getElementById("cars5");
var b10 = document.getElementById("cars6");
var image = document.getElementById("image");

function changeLOTR() {
	image.src = "Images/capture.PNG";
}

function changeONYX() {
	image.src = "Images/clown.jpg";
}

function changeCARS() {
	image.src = "Images/Cars_2_Poster.jpg";
}

function changeCARS2() {
	image.src = "Images/cars22.jpg";
}

function changeDOG() {
	image.src = "Images/20201225_143725.jpg";
}

function changeWALLE() {
	image.src = "Images/walle.jpg";
}

function changeCARS3() {
	image.src = "Images/cars3.jpg";
}

function changeCARS4() {
	image.src = "Images/cars4.jpg";
}

function changeCARS5() {
	image.src = "Images/cars5.jpg";
}

function changeCARS6() {
	image.src = "Images/cars5.jfif";
}

b1.addEventListener("click",changeLOTR)
b2.addEventListener("click",changeONYX)
b3.addEventListener("click",changeCARS)
b4.addEventListener("click",changeCARS2)
b5.addEventListener("click",changeDOG)
b6.addEventListener("click",changeWALLE)
b7.addEventListener("click",changeCARS3)
b8.addEventListener("click",changeCARS4)
b9.addEventListener("click",changeCARS5)
b10.addEventListener("click",changeCARS6)