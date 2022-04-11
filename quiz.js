var q1 = document.getElementById("q1");

function a (){
	if (document.getElementById("q1").value == "Option 2") {
			document.getElementById("q1r").innerHTML = "CORRECT";
		}
	
	else{
		document.getElementById("q1r").innerHTML = "INCORRECT";
	}}

document.getElementById("button").addEventListener("click", a)