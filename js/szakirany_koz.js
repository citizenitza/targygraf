
function szakirany() {
    jQuery(function($) {
		var szak = $("#szakirany").find(':selected').attr('data-szak');
			for (var i=4;i<=6;i++){
				document.getElementById("szakBlock_"+i).innerHTML = getSzakirany(szak,i);
			}
 
	}); 
}

function getSzakirany(szak, felev) {
				var block;
				switch(szak) {

				case "koz":
				switch(felev) {
					//createBlock(id,elo,uto,kredit,nev);
										case 4:
												block = createBlock("k49","38","",3,"Közúti pályák");
											break;
										case 5:
												block = createBlock("k55","","k68",3,"Közúti forgalomirányítás I.");
												block+= createBlock("k56","","",4,"Közúti menedzsment");
												block+= createBlock("k57","43","",2,"Gépjármű üzemtan");	
												block+= createBlock("k58","14","",4,"Forgalomtechnika");											
											break;
										case 6:
												block = createBlock("k67","","",5,"Integrált áruszállítási rendszerek");
												block+= createBlock("k68","k55","",4,"Közúti forgalomirányítás II.");
												block+= createBlock("k69","54","",3,"Közúti informatika");
											break;
											
							}
					break;
				case "vas":
					switch(felev) {
						//createBlock(id,elo,uto,kredit,nev);
										case 4:
												block = createBlock("v49","38","",3,"Vasúti pályák");
											break;
										case 5:
												block = createBlock("v55","","v68",3,"Vasúti automatika I.");
												block+= createBlock("v56","","",4,"Vasúti menedzsment");
												block+= createBlock("v57","43","",6,"Vasúti üzemtan");										
											break;
										case 6:
												block = createBlock("v67","","",5,"Integrált áruszállítási rendszerek");
												block+= createBlock("v68","v55","",4,"Vasúti automatika II.");
												block+= createBlock("v69","54","",3,"Vasúti informatika");
											break;	
							}
					break;
				case "leg":
							switch(felev) {
										case 4:
												block = createBlock("l49","14","",3,"Légterek, repülőterek");
											break;
										case 5:
												block = createBlock("l55","","l68",3,"Légiközl. irányító és komm. rendszerek I.");
												block+= createBlock("l56","","",4,"Légiközlekedési menedzsment");
												block+= createBlock("l57","","",6,"Repülés üzemeltetés");										
											break;
										case 6:
												block = createBlock("l67","","",5,"Integrált áruszállítási rendszerek");
												block+= createBlock("l68","l55","",4,"Légiközl. irányító és komm. rendszerek II.");
												block+= createBlock("l69","54","",3,"Légi informatika");
											break;	
							}
					break;
				case "viz":
								switch(felev) {
										case 4:
												block = createBlock("h49","","",3,"Vízi utak és műtárgyak");
											break;
										case 5:
												block = createBlock("h55","","",3,"Víziközl. irányító és komm. rendszerek I.");
												block+= createBlock("h56","","",4,"Hajózási menedzsment");
												block+= createBlock("h57","","",6,"Hajózási üzemtan");										
											break;
										case 6:
												block = createBlock("h67","","",5,"Integrált áruszállítási rendszerek");
												block+= createBlock("h68","","",4,"Víziközl. irányító és komm. rendszerek II.");
												block+= createBlock("h69","54","",3,"Hajózási informatika");
											break;	
							}
					break;
				default:
	}	
		setData();
			setState();
    return block;
}
function createBlock(id,elo,uto,kredit,nev){
	var result;	
	result = '<div id="'+id+'" data-elo="'+elo+'" data-uto="'+uto+'" data-felveheto="0" data-status="0" data-kredit="'+kredit+'" class="targy">'+nev+' </div>'
	return result;
}

