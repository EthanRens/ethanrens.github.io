// JavaScript Document

function strawberry() {
	
	document.getElementById("hello").innerHTML = "strawberry";
	document.getElementById("hello").style.color = "red";
	
	
	
}

document.getElementById("my").addEventListener("click", strawberry);

function berry() {
	
	document.getElementById("hello").innerHTML = "berry";
	document.getElementById("hello").style.color = "cyan";
	
	
}

document.getElementById("my2").addEventListener("click", berry);

function erry() {
	
	document.getElementById("hello").innerHTML = "erry";
	document.getElementById("hello").style.backgroundColor = "purple";
	
	
}

document.getElementById("my3").addEventListener("click", erry);







function changeRed(){
	document.getElementById("hello").style.backgroundColor = "red";
	document.getElementById("hello").innerHTML = "RED";
}

document.getElementById("my4").addEventListener("click" , changeRed);









function p1(){
	document.getElementById("number").innerHTML = "work";
	
}

document.getElementById("p1").addEventListener("click" , p1)













