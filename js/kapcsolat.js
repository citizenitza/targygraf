var start_of_number=1;
$(document).ready(function() {
	bold(start_of_number);
	
 });

function bold(sof){
	var first = 0;
	var second = 0;
	var third = 0;
	 var alap = document.getElementById("piH").innerHTML;
	var digits = alap.substring(28,alap.length-5);
	var digits_tomb = digits.split("");
	
	var tombStart = 12;
	var boldLenght = 7;
	if(sof != 1){
		tombStart = 12;
		for (var i = tombStart; i < tombStart+sof; i++) {
		first += digits_tomb[i];
	
		}
		first = first.substring(2,first.size);
	}	
	for (i = tombStart+sof; i < tombStart+sof+boldLenght; i++) {
	second += digits_tomb[i];
	}
	for (i = tombStart+sof+boldLenght; i <digits_tomb.length; i++) {
	third += digits_tomb[i];
	}
	
	second = second.substring(1,second.size);
	third = third.substring(1,third.size);
	document.getElementById("nr3").innerHTML = second;
	var boldString;
	if(sof != 1){
	boldString = first + "<b class='boldedText'>" + second + "</b>" + third;
	document.getElementById("rest").innerHTML = boldString;
	}
	else{
		boldString =  "<b class='boldedText'>" + second + "</b>" + third;
		document.getElementById("rest").innerHTML = boldString;
	}
	
	
	
}
function elore(){
	start_of_number++;
bold(start_of_number);

}
function vissza(){
	start_of_number--;
bold(start_of_number);

}