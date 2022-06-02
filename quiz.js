var q1 = document.getElementById("q1");
var q2 = document.getElementById("q2");
var q3 = document.getElementById("q3");
var q4 = document.getElementById("q4");
var q5 = document.getElementById("q5");
var q6 = document.getElementById("q6");
var q7 = document.getElementById("q7");
var q8 = document.getElementById("q8");
var q9 = document.getElementById("q9");
var q10 = document.getElementById("q10");
var submit = document.getElementById("button");
var score = document.getElementById("q1r");


function calculate (){
	var result = 0;
	if (q1.value == "Middle school wes") {
			result = result + 1;
		}
	if (q2.value == "Detroit") {
			result = result + 1;
		}
	if (q3.value == "rogers") {
			result = result + 1;
		}
	if (q4.value == "yeah") {
			result = result + 1;
		}
	if (q5.value == "ddiads") {
			result = result + 1;
		}
	if (q6.value == "Option 2") {
			result = result + 1;
		}
	if (q7.value == "s muchalel") {
			result = result + 1;
		}
	if (q8.value == "depends") {
			result = result + 1;
		}
	if (q9.value == "Option 2") {
			result = result + 1;
		}
	if (q10.value == "yep") {
			result = result + 1;
		}
	score.innerHTML = result;
}
	
submit.addEventListener("click", calculate)







