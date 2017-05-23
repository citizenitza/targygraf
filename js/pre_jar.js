// JavaScript Document

$(document).ready(function() {
			var useId = urlParam('Use_Id');
		if(useId){
			decodeData(useId);
		}
		else{
			var user = getCookie("data-jar")
			 if (user != "") {
       			 decodeData(user);
 		   }		
		}
	setKredit();
	document.getElementById("jarmu").className += " is-active";
});