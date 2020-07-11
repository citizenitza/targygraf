// JavaScript Document

$(document).ready(function() {
	// var useId = urlParam('Use_Id');
	// if(useId){
	// 	decodeData(useId);
	// }
	// else{
	var user = getCookie("data-koz")
		if (user != "") {
			decodeDataSzakirany(user);
			szakirany();
			decodeDataTargyak(user);
		}		
	// }
	document.getElementById("kozlek").className += " is-active";
	setKredit();

});