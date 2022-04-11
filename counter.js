var count = 0;

function minus() {
	count = count - 1;
	document.getElementById("total").innerHTML = count;
	
	if (count > 10){
		document.getElementById("total").style.color = "red"
	}
	if (count <= 10){
		document.getElementById("total").style.color = "black"
	}
}

function minus2() {
	count = count - 2;
	document.getElementById("total").innerHTML = count;
	
	if (count > 10){
		document.getElementById("total").style.color = "red"
	}
	if (count <= 10){
		document.getElementById("total").style.color = "black"
	}
}

function plus() {
	count = count + 1;
	document.getElementById("total").innerHTML = count;
	
	if (count == 68) {
		document.getElementById("total").innerHTML = "NICE";
	}
	
	if (count > 10){
		document.getElementById("total").style.color = "red"
	}
	if (count <= 10){
		document.getElementById("total").style.color = "black"
	}
	
}

function mult(){
	count = count * 10;
	document.getElementById("total").innerHTML = count;
}

function mult2(){
	count = count * 2;
	document.getElementById("total").innerHTML = count;
}

function div(){
	count = count / 2;
	document.getElementById("total").innerHTML = count;
	
	if (count > 10){
		document.getElementById("total").style.color = "red"
	}
	if (count <= 10){
		document.getElementById("total").style.color = "black"
	}
}

function plus2() {
	count = count + 2;
	document.getElementById("total").innerHTML = count;
}


document.getElementById("plus2").addEventListener("click" , plus2);

document.getElementById("plus").addEventListener("click" , plus);

document.getElementById("div").addEventListener("click" , div);

document.getElementById("minus").addEventListener("click" , minus);

document.getElementById("minus2").addEventListener("click" , minus2);

document.getElementById("mult").addEventListener("click" , mult);

document.getElementById("mult2").addEventListener("click" , mult2);



