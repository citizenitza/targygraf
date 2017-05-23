// JavaScript Document

$(document).ready(function() {
			var useId = urlParam('Use_Id');
		if(useId){
			decodeData(useId);
		}
		else{
			var user = getCookie("data-log")
			 if (user != "") {
       			 decodeData(user);
 		   }		
		}
	setKredit();
	document.getElementById("log").className += " is-active";
});