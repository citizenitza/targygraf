// JavaScript Document
$(document).ready(function() {
	

});
function getDataNew(szakirany) {
	var result = "";
	result += szakirany + "-";
    jQuery(function($) {
		var cusid_ele = document.getElementsByClassName('targy');
		var currentSemester = 1;
		for (var i = 0; i < cusid_ele.length; ++i) {
			var item = cusid_ele[i];
			var subjectSemester = item.getAttribute("id")[0];
			if(!is_numeric(subjectSemester)) { //first item is a char
				subjectSemester = item.getAttribute("id")[1];
			}

			if(subjectSemester == currentSemester){
				result += item.getAttribute("data-status");
			}else{
				// result += "_";
				currentSemester++;
				i--;
				if(currentSemester == 8){//last semester
				 	break;
				}else{
					continue;
				}
			}
		}
	});
	alert(result);
	return result;
}
function is_numeric(str){
    return /^\d+$/.test(str);
}

function getData() {
	var result = "";
    jQuery(function($) {
			var cusid_ele = document.getElementsByClassName('targy');
			var status = "";
			
			for (var i = 0; i < cusid_ele.length; ++i) {
				var item = cusid_ele[i];  
				status += item.getAttribute("data-status");
				}
				
			var status_tomb = status.split("");
			var status_hossz = status_tomb.length;
	//	document.getElementById("debug_a").innerHTML = status;
	//	document.getElementById("debug_c").innerHTML = status_hossz;
		var tmp;
		for(var i=0;i<status_hossz;i++){
		tmp = status_tomb[i];
		switch(tmp){
			case "0":
			status_tomb[i] = "a";
			break;
			case "1":
			status_tomb[i] = "b";
			break;
			case "2":
			status_tomb[i] = "c";
			break;
		}
		
		}
		var run_state=0;
		var run_variable;
		var run_count = 0;
		
		for(var i=0;i<status_hossz;i++){
			if(i == (status_hossz-1)){
				result += ++run_count + run_variable;
			}
			else{
			if(run_state == 0){
				run_variable = status_tomb[i];
				run_state = 1;
				run_count++;
			}
			else{
				if(status_tomb[i] == run_variable){
					run_count++;
				}
				else{
					result += run_count + run_variable;
					run_variable = status_tomb[i];
					run_count = 1;	
				}
			}
			}
		}

		
	});
	return result;
}
function decodeDataSzakirany(data) {
	jQuery(function($) {
		var szakirany = data.split("-")[0];
		if(szakirany == "undefined"){
				//Nop
		}else{
			for(var i = 0;i<$('#szakirany option').length;i++){
				if($('#szakirany option')[i].getAttribute("data-szak") == szakirany){
				document.getElementById("szakirany").value = $('#szakirany option')[i].value;
				$("#szakirany").val(i)
				}
			}
		}
	});
}
function decodeDataTargyak(data){
	jQuery(function($) {
		var datatargyak= data.split("-")[1].split("");
		var cusid_ele = document.getElementsByClassName('targy');

		for(var i = 0; i< datatargyak.length;i++){
			var item = cusid_ele[i];  
			if(datatargyak[i] !=0){
				item.setAttribute('data-status', datatargyak[i]);
			}	
		}
	});
}
function selectElement(id, valueToSelect) {    
    let element = document.getElementById(id);
    element.value = valueToSelect;
}
function decodeData(data) {
	

    jQuery(function($) {
		var encoded_data = data;
		var encoded_data_tomb = encoded_data.split("");
		
		var result = "";
		var for_var;
		var for_multiplier = "";
		for(var i=0;i<encoded_data_tomb.length;i++){
			
			if(encoded_data_tomb[i] == "a" || encoded_data_tomb[i] == "b" || encoded_data_tomb[i] == "c"){
				switch(encoded_data_tomb[i]){
					case "a":
					for_var = "0";
					break;
					
					case "b":
					for_var = "1";
					break;
					
					case "c":
					for_var = "2";
					break;
				}
				var tmp = parseInt(for_multiplier);
				for(var j=0;j<tmp;j++){
				result += for_var;
				
				}
				for_multiplier = 0;
			}
			else{
				for_multiplier += encoded_data_tomb[i];
				
			}
			//document.getElementById("debug_f").innerHTML = result;

		}
		
		var cusid_ele = document.getElementsByClassName('targy');
		var result_tomb = result.split("");
			for (var i = 0; i < cusid_ele.length; ++i) {
				var item = cusid_ele[i];  
				item.setAttribute('data-status', result_tomb[i]);
				setData();
				setState();
				}
				
	});
}
function deleteData() {
    jQuery(function($) {
		var cusid_ele = document.getElementsByClassName('targy');
			for (var i = 0; i < cusid_ele.length; ++i) {
				var item = cusid_ele[i];  
				item.setAttribute('data-status', "0");
				setData();
				setState();
				}
	});
	document.getElementById("linkToShare").innerHTML = "";
	$('.Felv').animate({width: 0}, 200 );
	$('.Telj').animate({width: 0}, 200 );
	var query = window.location.search.substring(1)

	if(query.length) {
   if(window.history != undefined && window.history.pushState != undefined) {
        window.history.pushState({}, document.title, window.location.pathname);
   }
}
}
function createLink() {

		var url = window.location.href.split('?')[0];
		var result = getData();
		document.getElementById("linkToShare").innerHTML = url + "?Use_Id=" + result;

}
var urlParam = function(name, w){
    w = w || window;
    var rx = new RegExp('[\&|\?]'+name+'=([^\&\#]+)'),
        val = w.location.search.match(rx);
    return !val ? '':val[1];
}
function debugOnclick(){
	alert(getData());
}
function debugOnclick2(){

}

