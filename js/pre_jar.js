// JavaScript Document

$(document).ready(function() {
	// var useId = urlParam('Use_Id');
	// if(useId){
	// 	decodeData(useId);
	// }
	// else{
	var user = getCookie("data-jar")
		if (user != "") {
			decodeDataSzakirany(user);
			szakirany();
			decodeDataTargyak(user);
		}	
	// }	
	document.getElementById("jarmu").className += " is-active";
	setKredit();
});