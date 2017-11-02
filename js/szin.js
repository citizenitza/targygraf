$(document).ready(function() {
setState();
var class_tmp = [];
var class_tmp_elo = [];
$(document).on('mouseenter', '.targy', function() {
	setState();
	var data_uto = document.getElementById(this.id).getAttribute("data-uto");
	var data_elo = document.getElementById(this.id).getAttribute("data-elo");
	/*-------------------------------------------Uto kovetelmeny----------------------------------------------*/	
	if(data_uto){
		 var utoTomb = data_uto.split(" ");
	  
		 if(utoTomb.length === 1){
		  class_tmp[0] = document.getElementById(data_uto).className;
		  	 if($("#" + data_uto).length > 0){
					document.getElementById(data_uto).className = "targy utokovetelmeny";
			 }
		 }
		 else{
			 var hossz = utoTomb.length;
			for (var i = 0; i < hossz; i++) {
				 if($("#" + utoTomb[i]).length > 0){
				class_tmp[i] = document.getElementById(utoTomb[i]).className;
				 document.getElementById(utoTomb[i]).className = "targy utokovetelmeny";
				 }
				 
		   } 		
		
		 }
	}
  /*-------------------------------------------Elo kovetelmeny----------------------------------------------*/	
  
  
  		if(data_elo){
		 var eloTomb = data_elo.split(" ");
	  
		 if(eloTomb.length == 1){
		  class_tmp_elo[0] = document.getElementById(data_elo).className;
		  document.getElementById(data_elo).className = "targy elokovetelmeny";
		  
		  
		 }
		 else{
			 var hossz = eloTomb.length;
			for (var i = 0; i < hossz; i++) {
				class_tmp_elo[i] = document.getElementById(eloTomb[i]).className;
				 document.getElementById(eloTomb[i]).className = "targy elokovetelmeny";
		   } 		
		
		 }
		}
		
});



$(document).on('mouseleave', '.targy', function() {
	setState();
		var data_uto = document.getElementById(this.id).getAttribute("data-uto");
	var data_elo = document.getElementById(this.id).getAttribute("data-elo");
	/*-------------------------------------------Uto kovetelmeny----------------------------------------------*/	
	if(data_uto){
		 var utoTomb = data_uto.split(" ");
	  
		 if(utoTomb.length == 1){
		  if(class_tmp[0] == "undefined"){
			  document.getElementById(data_uto).className = "targy";
		  }else{
		  document.getElementById(data_uto).className = class_tmp[0];
		  }
		 }
		 else{
			 var hossz = utoTomb.length;
			for (i = 0; i < hossz; i++) {
				  if(class_tmp[i] == "undefined"){
					  document.getElementById(utoTomb[i]).className = "targy";
		 		 }else{
					 document.getElementById(utoTomb[i]).className = class_tmp[i];
		 		 }
		   } 		
		
		 }
	}
  /*-------------------------------------------Elo kovetelmeny----------------------------------------------*/	
  
  
  		if(data_elo){
		 var eloTomb = data_elo.split(" ");
	  
		 if(eloTomb.length == 1){
			 if(class_tmp_elo[0] == "undefined"){
				 document.getElementById(data_elo).className = "targy";
			 }else{
		 	 document.getElementById(data_elo).className = class_tmp_elo[0];
			 }
		 }
		 else{
			 var hossz = eloTomb.length;
			for (i = 0; i < hossz; i++) {
				if(class_tmp_elo[i] == "undefined"){
					document.getElementById(eloTomb[i]).className = "targy";
				}
				else{
				 document.getElementById(eloTomb[i]).className =  class_tmp_elo[i];
			}
		   } 		
		 }
		}	
			setState();
	 });	
 });

function test(){
	 
}
function setState() {
    jQuery(function($) {
			var cusid_ele = document.getElementsByClassName('targy');
			for (var i = 0; i < cusid_ele.length; ++i) {
				var item = cusid_ele[i]; 
				if(item.className == null){
				//item.className = "targy";
				//document.getElementById("test1").innerHTML += "1";
				}
				var felveheto = item.getAttribute("data-felveheto");
				var status = item.getAttribute("data-status");
					if(felveheto == 1){
						switch(status){
							case "0":
								item.className = "targy felveheto";
							break;
						  case "1":
								item.className = "targy felvett";
								break;
						  case "2":
								item.className = "targy teljesitett";
								break;
							
						}
						
					}
					else{
					item.className = "targy";
					}
				}
		
    }); 
}
