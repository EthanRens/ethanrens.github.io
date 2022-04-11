


function x(){
	
if (document.getElementById("pass").value == "password") {
	document.getElementById("a").innerHTML = "ACCESS GRANTED"
	document.getElementById("a").style.color = "green";
	window.location = "index.html"
	
	
}else { document.getElementById("a").innerHTML = "ACCESS DENIED";
document.getElementById("a").style.color = "red";
	
}
}


document.getElementById("x").addEventListener("click" , x);