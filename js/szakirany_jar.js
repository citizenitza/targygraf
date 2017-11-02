
function szakirany() {
    jQuery(function($) {
		var szak = $("#szakirany").find(':selected').attr('data-szak');
			for (var i=4;i<=7;i++){
				document.getElementById("szakBlock_"+i).innerHTML = getSzakirany(szak,i);
			}
 
	}); 
}

function getSzakirany(szak, felev) {
				var block;
				switch(szak) {
				case "gep":
							switch(felev) {
									//createBlock(id,elo,uto,kredit,nev);
										case 4:
												block = createBlock("g47","","g56",3,"Gépjárművek erőátvitele I.");
												block+= createBlock("g48","","g57",5,"Gépjármű futóművek I.");
											break;
										case 5:
												block = createBlock("g56","g47","",4,"Gépjárművek erőátvitele II.");
												block+= createBlock("g57","g48","",5,"Gépjármű futóművek II.");
												block+= createBlock("g58","","g66",4,"Gépjármű motorok I.");
											break;
										case 6:
												block = createBlock("g66","g58","",8,"Gépjármű motorok II.");
												block+= createBlock("g67","","g75ok",4,"Gépjárművek üzeme I.");
												block+= createBlock("g68","","",5,"Gépjármű elektronika I.");
											break;
										case 7:
												block = createBlock("g75","g67","",3,"Gépjárművek üzeme II.");
												block+= createBlock("g76","","",4,"Gépjármű elektronika II.");
											break;	
								}
					break;
				case "leg":
							switch(felev) {
									//createBlock(id,elo,uto,kredit,nev);
										case 4:
												block = createBlock("l47",34,"l57 l58",3,"Aerodinamika");
												block+= createBlock("l48",34,"l56",5,"Repülőgép hajtóművek elmélete I.");
											break;
										case 5:
												block = createBlock("l56","l48","l67 l75 l76",4,"Repülőgép hajtóművek elmélete II.");
												block+= createBlock("l57","l47 37","l68",5,"Repülőgépek szerkezete");
												block+= createBlock("l58","l47","l68 l75 l76",4,"Repülésmechanika");
											break;
										case 6:
												block = createBlock("l66","","",8,"Fenntartható repülés");
												block+= createBlock("l67","l56","",4,"Repülőgép hajtóművek szerkezete");
												block+= createBlock("l68","l57 l58","",5,"Repülőgépek rendszerei és avionika");	
											break;
										case 7:
												block = createBlock("l75","l56 l58","",3,"Környezetvédelem, repülésbiztonság és légialkalmasság");
												block+= createBlock("l76","l56 l58","",4,"Légi eszközök");
											break;	
							}
					break;
				case "vas":
				switch(felev) {
					//createBlock(id,elo,uto,kredit,nev);
										case 4:
												block = createBlock("v47","24","",3,"Vasúti járműmechatronika");
												block+= createBlock("v48","","",5,"Vasúti járműszerkezetek I");
											break;
										case 5:
												block = createBlock("v56","","",3,"Vasúti járműszerkezetek II.");
												block+= createBlock("v57","24","",6,"Villamos vasutak I.");
												block+= createBlock("v58","34","",4,"Dízel vontatójárművek I.");												
											break;
										case 6:
												block = createBlock("v66","","",5,"Dízel vontatójárművek II.");
												block+= createBlock("v67","","",3,"Vasúti járművek karbantartása és javítása");
												block+= createBlock("v68","24","",3,"Villamos vasútak II.");
												block+= createBlock("v69","","",4,"Vasúti járművek üzeme és diagnosztikája");
												block+= createBlock("v692","","",2,"Vasúti fékberendezések");
											break;
										case 7:
												block = createBlock("v75","","",3,"Megbízhatóság és biztonság");
												block+= createBlock("v76","","",4,"Vasúti jármű méréstechnika és labor");
											break;	
							}
					break;
				case "viz":
					switch(felev) {
						//createBlock(id,elo,uto,kredit,nev);
										case 4:
												block =	createBlock("h47","23","h56",3,"Hajók hajtása I.");
												block+= createBlock("h48","23","h57 h692",5,"Hajók elmélete I.");
												break;
										case 5:
												block =	createBlock("h56","h47","",5,"Hajók hajtása II.");
												block+= createBlock("h57","h48","h68 h76",4,"Hajók elmélete II.");
												block+= createBlock("h58","32","h66",4,"Hajószerkezettan");
													
											break;
										case 6:
												block =	createBlock("h66","h58","",3,"Hajóépítés technológiája");
												block+= createBlock("h67","53","",4,"Hajógépek");
												block+= createBlock("h68","h57","",5,"Fedélzeti berendezések");
												block+= createBlock("h69","41","",3,"Hajó csőrendszerek");
												block+= createBlock("h692","h48","h75",2,"Hajózás I. (Hajózási üzemtan)");
											break;
										case 7:
												block =	createBlock("h75","h692","",3,"Hajózás II.");
												block+= createBlock("h76","h57","",4,"Kishajók");
											break;	
							}
					break;
				case "mech":
							switch(felev) {
										case 4:
												block =	createBlock("m47","","",4,"Jármű hidraulika és pneumatika");
												block+= createBlock("m48","","m56",4,"Járműfedélzeti rendszerek I.");
											break;
										case 5:
												block =	createBlock("m56","m48","m66",5,"Járműfedélzeti rendszerek II.");
												block+= createBlock("m57","","m67 m68",4,"Érzékelők és beavatkozók I.");
												block+= createBlock("m58","","m68",4,"Járműirányítás I.");
											break;
										case 6:
												block =	createBlock("m66","m56","",5,"Járműfedélzeti rendszerek III.");
												block+= createBlock("m67","m57","",4,"Érzékelők és beavatkozók II.");
												block+= createBlock("m68","54 m57 m58","",4,"Járműirányítás II.");
												block+= createBlock("m69","24","",4,"Járműfedélzeti kommunikáció");
											break;
										case 7:
												block =	createBlock("m75","","",3,"Megbízhatóság és biztonság");
												block+= createBlock("m76","","",0,"Mobil gépek mechatronikája");
											break;	
							}
					break;
				case "gyar":
								switch(felev) {
										case 4:
												block =	createBlock("y47","22","",8,"Járműanyagok");
											break;
										case 5:
												block =	createBlock("y56","12 22","",2,"Szenzorika és anyagai");
												block+= createBlock("y57","37","",7,"Gyártásautomatizálás");
												block+= createBlock("y58","22","y66",4,"Járműgyártás folyamatai I.");
											break;
										case 6:
												block =	createBlock("y66","y58","",13,"Járműgyártás folyamatai II.");
												block+= createBlock("y67","42","y76",4,"Minőségügyi rendszerek");
											break;
										case 7:
												block =	createBlock("y75","","",3,"Járműdiagnosztika");
												block+= createBlock("y76","y66","",4,"Szerelés, minőségbiztosítás");
											
											break;	
							}
					break;
				case "ep":
							switch(felev) {
										case 4:
												block =	createBlock("e47","23","",4,"Anyagmozgatógépek I.");
												block+= createBlock("e48","","e68",4,"Hajtástechnika I.");
											break;
										case 5:
												block =	createBlock("e56","","",3,"Építőipari projekt menedzsment");
												block+= createBlock("e57","","e66",5,"Betontechnológiai gépek I.");
												block+= createBlock("e58","24","",5,"Automatizálás-technika");
											break;
										case 6:
												block =	createBlock("e66","e57","",7,"Betontechnológiai gépek II.");
												block+= createBlock("e67","","",5,"Építőgépek I.");
												block+= createBlock("e68","e48","",5,"Hajtástechnika II.");
											break;
										case 7:
												block =	createBlock("e75","","",3,"Mobilgépek fedélzeti eszközei");
												block+= createBlock("e76","","",4,"Építőgépek II.");
											break;	
							}
					break;
				case "aut":
					switch(felev) {
										case 4:
												block =	createBlock("a47","23","a66 a76",4,"Anyagmozgatógépek I.");
												block+= createBlock("a48","","a68",4,"Hajtástechnika I.");
											break;
										case 5:
												block =	createBlock("a56","","",3,"Anyagmozgatási projekt menedzsment");
												block+= createBlock("a57","23","",5,"Anyagmozgatógépek II.");
												block+= createBlock("a58","24","",5,"Automatizálás-technika");
											break;
										case 6:
												block =	createBlock("a66","a47","",7,"Anyagmozgatási projekt");
												block+= createBlock("a67","","",5,"Robottechnika");
												block+= createBlock("a68","a48","",5,"Hajtástechnika II.");
											break;
										case 7:
												block =	createBlock("a75","","",3,"Mobilgépek fedélzeti eszközei");
												block+= createBlock("a76","a47","",4,"Járműipari anyagmozgatási rendszerek");
											break;	
							}
				
					break;
				case "fep":
						switch(felev) {
										case 4:
												block =	createBlock("f47","","",3,"Felépítmény típusismeret");
												block+= createBlock("f48","23","",5,"Járműfelépítmény mechanizmusok");
											break;
										case 5:
												block =	createBlock("f56","","",4,"Törés és károsodás");
												block+= createBlock("f57","","",4,"Szendvics szerkezetek");
												block+= createBlock("f58","","",5,"Felépítmény hidraulika és pneumatika");
											break;
										case 6:
												block =	createBlock("f66","51","f75",8,"Felépítmények dinamikája");
												block+= createBlock("f67","51","",4,"Felépítmények vizsgálatai");
												block+= createBlock("f68","51","f76",5,"Vázszerkezet számítás numerikus módszerei I.");
											break;
										case 7:
											block =	createBlock("f75","f66","",3,"Szilárdtest mechanika válogatott fejezetei");
											block+= createBlock("f76","f68","",4,"Vázszerkezet számítás numerikus módszerei II.");
											
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

