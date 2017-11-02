// JavaScript Document

$(document).ready(function() {
	setData();
	 $(document).on('click', '.targy', function() {
		var felveheto = this.getAttribute("data-felveheto");
		if(felveheto == 1){
	 	var status = this.getAttribute("data-status");
		if(++status == 3){
			status = 0;
		}
		this.setAttribute('data-status', status);
	 	setData();
		}
		 setKredit();
		 pushInfo(this.id,document.getElementById("type").getAttribute("data-szak")); 
	 });
});

function setData() {
    jQuery(function($) {
			var cusid_ele = document.getElementsByClassName('targy');
			var elokovetelmeny;
			for (var i = 0; i < cusid_ele.length; ++i) {
				var item = cusid_ele[i];  
				elokovetelmeny = item.getAttribute("data-elo");
				if(!elokovetelmeny){
					item.setAttribute('data-felveheto', "1");
				}
				else{
					var eloTomb = elokovetelmeny.split(" ");
					var elo_check = 0;
					for (var j = 0; j < eloTomb.length; ++j) {
						var elo_status = document.getElementById(eloTomb[j]).getAttribute("data-status")
						if(elo_status != 2){
							elo_check = 1;
						}
					}
					if(elo_check != 1){
					item.setAttribute('data-felveheto', "1");
					}
					else{
					item.setAttribute('data-felveheto', "0");
					item.setAttribute('data-status', "0");
					}
				
				}
				
				}
	setState();
    }); 
}
function setKredit() {
    jQuery(function($) {
		var teljsum = 0;
		var felvsum = 0;
		var tmp;
			var cusid_ele = document.getElementsByClassName('targy');
			var status;
			for (var i = 0; i < cusid_ele.length; ++i) {
				var item = cusid_ele[i];  
				status = item.getAttribute("data-status");
				if(status == 1){
					tmp = item.getAttribute("data-kredit");
					felvsum += +tmp;
				}
				if(status == 2){
					tmp = item.getAttribute("data-kredit");
					teljsum += +tmp;
				}
			}
			document.getElementById("Felv").innerHTML = felvsum.toString();
			document.getElementById("Telj").innerHTML = teljsum.toString();
		
		var x_f = felvsum/210;
		var x_t = teljsum/210;
		var width = document.getElementById("kreditBar").offsetWidth;
		var width_f = x_f*width;
		var width_t = x_t*width;
		
		$('.Felv').animate({width: width_f}, 200 );
		$('.Telj').animate({width: width_t}, 200 );
	});
}