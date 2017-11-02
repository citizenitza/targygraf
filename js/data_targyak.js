function pushInfo(id, szak) {
	var Idp;
	var szakp;
	switch (szak){
			case "jarmu": szakp = "j"; break;
			case "kozlek": szakp = "k"; break;
			case "logisztika": szakp = "l"; break;
	}
	Idp = szakp + id;
	//document.getElementById("test1").innerHTML = Idp; 
	document.getElementById("targyNev").innerHTML = eval(Idp)['nev'];
	document.getElementById("targyKredit").innerHTML = eval(Idp)['kredit'];
	document.getElementById("targyKod").innerHTML = eval(Idp)['kod'];
	document.getElementById("targyKovetelmeny").innerHTML = eval(Idp)['kovetelmeny'];
	document.getElementById("targyTanszek").innerHTML = '<a href="' +  eval(Idp)['tanszekLink'] + '" target="_blank">' + eval(Idp)['tanszek'] + '</a>';
	document.getElementById("targyFelelos").innerHTML = eval(Idp)['oktato'];
}
/* JARMU *********************************************************/
var j11 = {
	elo: "",
	uto: "21",
	nev: "Matematika A1a",
	kredit: "6",
	kod: "TE90AX00",
	kovetelmeny: "Vizsga",
	tanszek: "Matematika Intézet",
	oktato: "Dr. Petz Dénes",
	tanszekLink: 'http://math.bme.hu/',
	
};

var j12 = {
	elo: "",
	uto: "",
	nev: "Fizika",
	kredit: "3",
	kod: "TE15AX17",
	kovetelmeny: "Vizsga",
	tanszek: "Elméleti Fizika",
	oktato: "Dr. Varga Imre",
	tanszekLink: 'http://dtp.physics.bme.hu/',
	
};

var j13 = {
	elo: "",
	uto: "",
	nev: "Műszaki kémia",
	kredit: "3",
	kod: "VEKTAKO1",
	kovetelmeny: "Vizsga",
	tanszek: 'KKFT',
	oktato: "Dr. Bajnóczy Gábor",
	tanszekLink: 'http://kkft.bme.hu/',
};

var j14 = {
	elo: "",
	uto: "",
	nev: "JKL Rendszerek",
	kredit: "8",
	kod: "KODHA149 ",
	kovetelmeny: "Félévközi jegy ",
	tanszek: "Dékáni",
	oktato: "Dr. Varga István",
	tanszekLink: 'http://kozlekedes.bme.hu/oktatas/jkl-rendszerek/',
	
};

var j15 = {
	elo: "",
	uto: "",
	nev: "Általános járműgéptan",
	kredit: "3",
	kod: "KOVJA112",
	kovetelmeny: "Félévközi jegy",
	tanszek: "VRHT",
	oktato: "Dr. Szabó András",
	tanszekLink: 'http://www.vrht.bme.hu/vasut/targyak/Tant-akt.php?Kepzes=BSc.-MSc.-Nev-Suk&Kod=BMEKOVJA112',
};

var j16 = {
	elo: "",
	uto: "",
	nev: "Programozás",
	kredit: "7",
	kod: "KOKAA146",
	kovetelmeny: "Félévközi jegy",
	tanszek: "KJIT",
	oktato: "Dr. Bécsi Tamás",
	tanszekLink: 'http://www.kjit.bme.hu/index.php/hu/hallgatoknak/bsc-targyak-3/programozas',
};

var j21 = {
	elo: "",
	uto: "",
	nev: "Matematika A2a",
	kredit: "6",
	kod: "TE90AX02",
	kovetelmeny: "Vizsga",
	tanszek: "Matematika Intézet",
	oktato: "Dr. Rónyai Lajos",
	tanszekLink: 'http://math.bme.hu/',
};

var j22 = {
	elo: "",
	uto: "",
	nev: "Anyagismeret",
	kredit: "4",
	kod: "KOJJA106",
	kovetelmeny: "Vizsga",
	tanszek: "GJT",
	oktato: "Dr. Bán Krisztián",
	tanszekLink: 'http://gjt.bme.hu/oktatas/tantargylista/jarmugyartas/bsc',
};

var j23 = {
	elo: "",
	uto: "",
	nev: "Mechanika I",
	kredit: "6",
	kod: "KOJSA141",
	kovetelmeny: "Vizsga",
	tanszek: "JHT",
	oktato: "Dr. Béda Péter ",
	tanszekLink: 'http://www.jht.bme.hu/hun/_okt_bsc_me1_141.html',
};

var j24 = {
	elo: "",
	uto: "",
	nev: "Elektrotechika",
	kredit: "6",
	kod: "KOKAA139",
	kovetelmeny: "Vizsga",
	tanszek: "KJIT",
	oktato: "Dr. Szabó Géza",
	tanszekLink: 'http://www.kjit.bme.hu/index.php/hu/hallgatoknak/bsc-targyak-3/elektrotechnika-elektronika',
};

var j25 = {
	elo: "",
	uto: "",
	nev: "Mikro- és makro ökonómia ",
	kredit: "4",
	kod: "GT30A001",
	kovetelmeny: "Vizsga",
	tanszek: "Közgazdaságtan",
	oktato: "Dr. Meyer Dietmar ",
	tanszekLink: 'http://kgt.bme.hu/cms/index.php?Oktat%C3%A1s___BSc%2FBA',
};

var j26 = {
	elo: "",
	uto: "",
	nev: "Műszaki ábrázolás I.",
	kredit: "4",
	kod: "KOJHA121",
	kovetelmeny: "Félévközi jegy",
	tanszek: "JHT",
	oktato: "Dr. Ficzere Péter ",
	tanszekLink: 'http://www.jht.bme.hu/hun/_okt_bsc_ma1_121.html',
};

var j31 = {
	elo: "",
	uto: "",
	nev: "Matematika A3k",
	kredit: "4",
	kod: "TE90AX53",
	kovetelmeny: "Vizsga",
	tanszek: "Matematika Intézet",
	oktato: "Dr. Nagy Attila",
	tanszekLink: 'http://math.bme.hu/',
};

var j32 = {
	elo: "",
	uto: "",
	nev: "Mechanika 2",
	kredit: "4",
	kod: "KOJSA142",
	kovetelmeny: "Vizsga",
	tanszek: "JHT",
	oktato: "Dr. Béda Péter",
	tanszekLink: 'http://www.jht.bme.hu/hun/_okt_bsc_me2_142.html',
};

var j33 = {
	elo: "",
	uto: "",
	nev: "Menedzsment",
	kredit: "4",
	kod: "KOKGA109",
	kovetelmeny: "vizsga",
	tanszek: "KUKG",
	oktato: "Dr. Kővári Botond",
	tanszekLink: 'http://kukg.bme.hu/index.php/hu/bsc-tantargyak/21-bsc-kozlekedesmernoki-szak/40-menedzsment-es-vallalkozas-gazdasagtan-bmekokga109'
};

var j34 = {
	elo: "",
	uto: "",
	nev: "Hőtan",
	kredit: "3",
	kod: "KOVRA144",
	kovetelmeny: "Vizsga",
	tanszek: "VRHT",
	oktato: "Dr. Veress Árpád",
	tanszekLink: 'http://www.vrht.bme.hu/vasut/targyak/',
};

var j35 = {
	elo: "",
	uto: "",
	nev: "Műszaki ábrázolás II.",
	kredit: "4",
	kod: "KOJSA455",
	kovetelmeny: "Félévközi jegy",
	tanszek: "JHT",
	oktato: "Dr. Ficzere Péter ",
	tanszekLink: 'http://www.jht.bme.hu/hun/_okt_bsc_ma2_455.html',
};


var j36 = {
	elo: "",
	uto: "",
	nev: "Mérnöki számítások ",
	kredit: "3",
	kod: "KOVRA431",
	kovetelmeny: "Félévközi jegy",
	tanszek: "VRHT",
	oktato: "Dr. Rohács József",
	tanszekLink: 'http://www.vrht.bme.hu/vasut/targyak/',
};


var j37 = {
	elo: "",
	uto: "",
	nev: "Járműszerkezeti anyagok",
	kredit: "6",
	kod: "KOGJA450",
	kovetelmeny: "Félévközi jegy",
	tanszek: "GJT",
	oktato: "Dr. Markovits Tamás",
	tanszekLink: 'http://gjt.bme.hu/oktatas/tantargylista/jarmugyartas/bsc',
};


var j41 = {
	elo: "",
	uto: "",
	nev: "Áramlástan",
	kredit: "3",
	kod: "KOVRA145",
	kovetelmeny: "Vizsga",
	tanszek: "VRHT",
	oktato: "Dr. Simongáti Győző",
	tanszekLink: 'http://www.vrht.bme.hu/vasut/targyak/',
};


var j42 = {
	elo: "",
	uto: "",
	nev: "Minőségügy",
	kredit: "2",
	kod: "KOGJA154",
	kovetelmeny: "Félévközi jegy",
	tanszek: "GJT",
	oktato: "Dr. Stukovszky Zsolt",
	tanszekLink: 'http://gjt.bme.hu/oktatas',
};

var j43 = {
	elo: "",
	uto: "",
	nev: "Járműmérnöki mechanika",
	kredit: "4",
	kod: "KOJSA143",
	kovetelmeny: "Vizsga",
	tanszek: "JHT",
	oktato: "Dr. Béda Péter",
	tanszekLink: 'http://www.jht.bme.hu/hun/_okt_bsc_jm.html',
};

var j44 = {
	elo: "",
	uto: "",
	nev: "Járműmérnöki számítások",
	kredit: "3",
	kod: "KOVRA140",
	kovetelmeny: "Félévközi jegy",
	tanszek: "VRHT",
	oktato: "Dr. Rohács József",
	tanszekLink: 'http://www.vrht.bme.hu/vasut/targyak/',
};
var j45 = {
	elo: "",
	uto: "",
	nev: "Jármű- és hajtáselemek I.",
	kredit: "5",
	kod: "KOJSA446",
	kovetelmeny: "Vizsga",
	tanszek: "JHT",
	oktato: "Dr. Lovas László",
	tanszekLink: 'http://www.jht.bme.hu/hun/_okt_bsc_jm.html',
};


var j46 = {
	elo: "",
	uto: "",
	nev: "Járműgyártás és javítás",
	kredit: "5",
	kod: "KOJJA162",
	kovetelmeny: "Vizsga",
	tanszek: "GJT",
	oktato: "Dr. Takács János",
	tanszekLink: 'http://gjt.bme.hu/oktatas',
};


var j51 = {
	elo: "",
	uto: "",
	nev: "Jármű vázszerkezetek ",
	kredit: "3",
	kod: "KOJKA165",
	kovetelmeny: "Félévközi jegy",
	tanszek: "JHT",
	oktato: "Dr. Szőke Dezső",
	tanszekLink: 'http://www.jht.bme.hu/hun/_okt_bsc_jm.html',
};

var j52 = {
	elo: "",
	uto: "",
	nev: "Jármű- és hajtáselemek II.",
	kredit: "4",
	kod: "KOJSA447",
	kovetelmeny: "Vizsga",
	tanszek: "JHT",
	oktato: "Dr. Lovas László ",
	tanszekLink: 'http://www.jht.bme.hu/hun/_okt_bsc_jm.html',
};

var j53 = {
	elo: "",
	uto: "",
	nev: "Hőág I.",
	kredit: "4",
	kod: "KOVRA463",
	kovetelmeny: "Vizsga",
	tanszek: "VRHT",
	oktato: "Dr. Veress Árpád",
	tanszekLink: 'http://www.vrht.bme.hu/vasut/targyak/',
};

var j54 = {
	elo: "",
	uto: "",
	nev: "Logikai hálózatok",
	kredit: "3",
	kod: "KOKAA137",
	kovetelmeny: "Félévközi jegy",
	tanszek: "KJIT",
	oktato: "Dr. Bokor József",
	tanszekLink: 'http://www.kjit.bme.hu/index.php/hu/',
};

var j55 = {
	elo: "",
	uto: "",
	nev: "Irányítástechnika",
	kredit: "3",
	kod: "KOKAA138",
	kovetelmeny: "Vizsga",
	tanszek: "KJIT",
	oktato: "Dr. Bokor József",
	tanszekLink: 'http://www.kjit.bme.hu/index.php/hu/',
};

var j61 = {
	elo: "",
	uto: "",
	nev: "Üzleti jog",
	kredit: "2",
	kod: "GT55A001",
	kovetelmeny: "Félévközi jegy",
	tanszek: "Üzleti Jog Tanszék",
	oktato: "Dr. Pázmándi Kinga",
	tanszekLink: 'http://www.law.bme.hu/',
};

var j62 = {
	elo: "",
	uto: "",
	nev: "Jármű- és hajtáselemek III.",
	kredit: "4",
	kod: "KOJHA158",
	kovetelmeny: "Félévközi jegy",
	tanszek: "JHT",
	oktato: "Dr. Lovas László",
	tanszekLink: 'http://www.jht.bme.hu/hun/_okt_bsc_jm.html',
};

var j63 = {
	elo: "",
	uto: "",
	nev: "Hőág II.",
	kredit: "3",
	kod: "KOVRA464",
	kovetelmeny: "Vizsga",
	tanszek: "VRHT",
	oktato: "Dr. Simongáti Győző",
	tanszekLink: 'http://www.vrht.bme.hu/vasut/targyak/',
};

var j71 = {
	elo: "",
	uto: "",
	nev: "Üzemszervezés",
	kredit: "2",
	kod: "KOKUA169",
	kovetelmeny: "Félévközi jegy",
	tanszek: "ALRT",
	oktato: "Dr. Bóna Krisztián",
	tanszekLink: 'https://www.logisztika.bme.hu/hu/',
};

var j72 = {
	elo: "",
	uto: "",
	nev: "Munkavédelem",
	kredit: "2",
	kod: "KOEAA111",
	kovetelmeny: "Félévközi jegy",
	tanszek: "ALRT",
	oktato: "Dr. Bohács Gábor",
	tanszekLink: 'https://www.logisztika.bme.hu/hu/',
};

/*GEPJARMUVEK SZAKIRANY ************************************************/

var jg47 = {
	elo: "",
	uto: "",
	nev: "Gépjárművek erőátvitele I.",
	kredit: "3",
	kod: "KOGJA511",
	kovetelmeny: "Félévközi jegy",
	tanszek: "GJT",
	oktato: "Dr. Németh Huba",
	tanszekLink: 'http://gjt.bme.hu/oktatas',
};

var jg48 = {
	elo: "",
	uto: "",
	nev: "Gépjármű futóművek I.",
	kredit: "5",
	kod: "KOGJA513",
	kovetelmeny: "Félévközi jegy",
	tanszek: "GJT",
	oktato: "Dr. Szabó Bálint",
	tanszekLink: 'http://gjt.bme.hu/oktatas',
};

var jg56 = {
	elo: "",
	uto: "",
	nev: "Gépjárművek erőátvitele II.",
	kredit: "4",
	kod: "KOGJA512",
	kovetelmeny: "Félévközi jegy",
	tanszek: "GJT",
	oktato: "Dr. Németh Huba",
	tanszekLink: 'http://gjt.bme.hu/oktatas',
};

var jg57 = {
	elo: "",
	uto: "",
	nev: "Gépjármű futóművek II.",
	kredit: "5",
	kod: "KOGJA514",
	kovetelmeny: "Vizsga",
	tanszek: "GJT",
	oktato: "Dr. Szabó Bálint",
	tanszekLink: 'http://gjt.bme.hu/oktatas',
};

var jg58 = {
	elo: "",
	uto: "",
	nev: "Gépjármű motorok I.",
	kredit: "4",
	kod: "KOGJA515",
	kovetelmeny: "Félévközi jegy",
	tanszek: "GJT",
	oktato: "Dr. Németh Huba",
	tanszekLink: 'http://gjt.bme.hu/oktatas',
};

var jg66 = {
	elo: "",
	uto: "",
	nev: "Gépjármű motorok II.",
	kredit: "8",
	kod: "KOGJA516",
	kovetelmeny: "Vizsga",
	tanszek: "GJT",
	oktato: "Dr. Németh Huba",
	tanszekLink: 'http://gjt.bme.hu/oktatas',
};

var jg67 = {
	elo: "",
	uto: "",
	nev: "Gépjárművek üzeme I.",
	kredit: "4",
	kod: "KOGJA517",
	kovetelmeny: "Vizsga",
	tanszek: "GJT",
	oktato: "Dr. Szabó Bálint",
	tanszekLink: 'http://gjt.bme.hu/oktatas',
};

var jg68 = {
	elo: "",
	uto: "",
	nev: "Gépjármű elektronika I.",
	kredit: "5",
	kod: "KOGJA519",
	kovetelmeny: "Vizsga",
	tanszek: "GJT",
	oktato: "Dr. Szalay Zsolt",
	tanszekLink: 'http://gjt.bme.hu/oktatas',
};

var jg75 = {
	elo: "",
	uto: "",
	nev: "Gépjárművek üzeme II.",
	kredit: "3",
	kod: "KOGJA518",
	kovetelmeny: "Félévközi jegy",
	tanszek: "GJT",
	oktato: "Dr. Szabó Bálint",
	tanszekLink: 'http://gjt.bme.hu/oktatas',
};

var jg76 = {
	elo: "",
	uto: "",
	nev: "Gépjármű elektronika II.",
	kredit: "4",
	kod: "KOGJA520",
	kovetelmeny: "Félévközi jegy",
	tanszek: "GJT",
	oktato: "Dr. Szalay Zsolt",
	tanszekLink: 'http://gjt.bme.hu/oktatas',
};

/*REPULOGÉPEK SZAKIRANY ************************************************/
var jl47 = {
	elo: "",
	uto: "",
	nev: "Aerodinamika",
	kredit: "3",
	kod: "KOVRA454",
	kovetelmeny: "Félévközi jegy",
	tanszek: "VRHT",
	oktato: "Dr. Rohács József",
	tanszekLink: 'http://www.vrht.bme.hu/vasut/targyak/index.php',
};

var jl48 = {
	elo: "",
	uto: "",
	nev: "Rep. hajt. elm. I.",
	kredit: "5",
	kod: "KOVRA451",
	kovetelmeny: "Félévközi jegy",
	tanszek: "VRHT",
	oktato: "Dr. Veress Árpád",
	tanszekLink: 'http://www.vrht.bme.hu/vasut/targyak/index.php',
};

var jl56 = {
	elo: "",
	uto: "",
	nev: "Rep. hajt. elm. II.",
	kredit: "4",
	kod: "KORHA522",
	kovetelmeny: "Vizsga",
	tanszek: "VRHT",
	oktato: "Dr. Beneda Károly",
	tanszekLink: 'http://www.vrht.bme.hu/vasut/targyak/index.php',
};

var jl57 = {
	elo: "",
	uto: "",
	nev: "Repülőgépek szerkezete",
	kredit: "5",
	kod: "KORHA526",
	kovetelmeny: "Félévközi jegy",
	tanszek: "VRHT",
	oktato: "Dr. Gáti Balázs",
	tanszekLink: 'http://www.vrht.bme.hu/vasut/targyak/index.php',
};

var jl58 = {
	elo: "",
	uto: "",
	nev: "Repülésmechanika",
	kredit: "4",
	kod: "KORHA525",
	kovetelmeny: "Félévközi jegy",
	tanszek: "VRHT",
	oktato: "Dr. Gáti Balázs",
	tanszekLink: 'http://www.vrht.bme.hu/vasut/targyak/index.php',
};

var jl66 = {
	elo: "",
	uto: "",
	nev: "Fenntartható repülés ",
	kredit: "8",
	kod: "KOVRA458",
	kovetelmeny: "Vizsga",
	tanszek: "VRHT",
	oktato: "Dr. Rohács Dániel ",
	tanszekLink: 'http://www.vrht.bme.hu/vasut/targyak/index.php',
};

var jl67 = {
	elo: "",
	uto: "",
	nev: "Rep. hajt. szerk.",
	kredit: "4",
	kod: "KOVRA453",
	kovetelmeny: "Vizsga",
	tanszek: "VRHT",
	oktato: "Dr. Beneda Károly",
	tanszekLink: 'http://www.vrht.bme.hu/vasut/targyak/index.php',
};

var jl68 = {
	elo: "",
	uto: "",
	nev: "Rep. rendszerei és avionika",
	kredit: "5",
	kod: "KOVRA457",
	kovetelmeny: "Vizsga",
	tanszek: "VRHT",
	oktato: "Dr. Rohács József",
	tanszekLink: 'http://www.vrht.bme.hu/vasut/targyak/index.php',
};

var jl75 = {
	elo: "",
	uto: "",
	nev: "Rep.bizt.",
	kredit: "3",
	kod: "KOVRA462",
	kovetelmeny: "Félévközi jegy",
	tanszek: "VRHT",
	oktato: "Dr. Rohács József",
	tanszekLink: '#',
};

var jl76 = {
	elo: "",
	uto: "",
	nev: "Légi eszközök",
	kredit: "4",
	kod: "KOVRA461",
	kovetelmeny: "Félévközi jegy",
	tanszek: "VRHT",
	oktato: "Dr. Gáti Balázs",
	tanszekLink: 'http://www.vrht.bme.hu/vasut/targyak/index.php',
};

/*VAASUTIJARMUVEK SZAKIRANY ************************************************/

var jv47 = {
	elo: "",
	uto: "",
	nev: "Vasúti jármű mechatronika",
	kredit: "3",
	kod: "KOVJA530",
	kovetelmeny: "Félévközi jegy",
	tanszek: "VRHT",
	oktato: "Dr. Zábori Zoltán",
	tanszekLink: 'http://www.vrht.bme.hu/vasut/targyak/index.php',
};

var jv48 = {
	elo: "",
	uto: "",
	nev: "Vasúti járműszerkezetek I.",
	kredit: "5",
	kod: "KOVJA502",
	kovetelmeny: "Félévközi jegy",
	tanszek: "VRHT",
	oktato: "Dr. Zobory István",
	tanszekLink: 'http://www.vrht.bme.hu/vasut/targyak/index.php',
};

var jv56 = {
	elo: "",
	uto: "",
	nev: "Vasúti járműszerkezetek II.",
	kredit: "3",
	kod: "KOVJA503",
	kovetelmeny: "Vizsga",
	tanszek: "VRHT",
	oktato: "Dr. Zobory István",
	tanszekLink: 'http://www.vrht.bme.hu/vasut/targyak/index.php',
};

var jv57 = {
	elo: "",
	uto: "",
	nev: "Villamos vasutak I.",
	kredit: "6",
	kod: "KOVJA506",
	kovetelmeny: "Félévközi jegy",
	tanszek: "VRHT",
	oktato: "Dr. Zábori Zoltán",
	tanszekLink: 'http://www.vrht.bme.hu/vasut/targyak/index.php',
};

var jv58 = {
	elo: "",
	uto: "",
	nev: "Dízel vontatójárművek I.",
	kredit: "4",
	kod: "KOVJA504",
	kovetelmeny: "Félévközi jegy",
	tanszek: "VRHT",
	oktato: "Dr. Szabó András",
	tanszekLink: 'http://www.vrht.bme.hu/vasut/targyak/index.php',
};

var jv66 = {
	elo: "",
	uto: "",
	nev: "Dízel vontatójárművek II.",
	kredit: "5",
	kod: "KOVJA505",
	kovetelmeny: "Vizsga",
	tanszek: "VRHT",
	oktato: "Dr. Szabó András",
	tanszekLink: 'http://www.vrht.bme.hu/vasut/targyak/index.php',
};

var jv67 = {
	elo: "",
	uto: "",
	nev: "Vas.járm. karb. és jav.",
	kredit: "3",
	kod: "KOVJA592",
	kovetelmeny: "Félévközi jegy",
	tanszek: "VRHT",
	oktato: "Dr. Szabó András",
	tanszekLink: 'http://www.vrht.bme.hu/vasut/targyak/index.php',
};

var jv68 = {
	elo: "",
	uto: "",
	nev: "Villamos vasutak II.",
	kredit: "3",
	kod: "KOVJA507",
	kovetelmeny: "Vizsga",
	tanszek: "VRHT",
	oktato: "Dr. Zábori Zoltán",
	tanszekLink: 'http://www.vrht.bme.hu/vasut/targyak/index.php',
};

var jv69 = {
	elo: "",
	uto: "",
	nev: "Vas.járm.üzm, diagn.",
	kredit: "4",
	kod: "KOVJA508",
	kovetelmeny: "Vizsga",
	tanszek: "VRHT",
	oktato: "Dr. Csiba József",
	tanszekLink: 'http://www.vrht.bme.hu/vasut/targyak/index.php',
};

var jv692 = {
	elo: "",
	uto: "",
	nev: "Vasúti fékberendezések",
	kredit: "2",
	kod: "KOVJA509",
	kovetelmeny: "Félévközi jegy",
	tanszek: "VRHT",
	oktato: "Dr. Zobory István",
	tanszekLink: 'http://www.vrht.bme.hu/vasut/targyak/index.php',
};

var jv75 = {
	elo: "",
	uto: "",
	nev: "Megbízhatóság és biztonság",
	kredit: "3",
	kod: "KOKAA582",
	kovetelmeny: "Félévközi jegy",
	tanszek: "KJIT",
	oktato: "Dr. Sághi Balázs",
	tanszekLink: 'http://kjit.bme.hu/index.php/hu/hallgatoknak/bsc-targyak/megbizhatosag-es-biztonsag',
};

var jv76 = {
	elo: "",
	uto: "",
	nev: "Vasúti jármű méréstechnika",
	kredit: "4",
	kod: "KOVJA510",
	kovetelmeny: "Félévközi jegy",
	tanszek: "VRHT",
	oktato: "Dr. Tulipánt Gergely",
	tanszekLink: 'http://www.vrht.bme.hu/vasut/targyak/index.php',
};

/*HAJOK SZAKIRANY ************************************************/

var jh47 = {
	elo: "",
	uto: "",
	nev: "Hajók hajtása I.",
	kredit: "3",
	kod: "KOVRA465",
	kovetelmeny: "Félévközi jegy",
	tanszek: "VRHT",
	oktato: "Dr. Simongáti Győző",
	tanszekLink: 'http://www.vrht.bme.hu/vasut/targyak/index.php',
};

var jh48 = {
	elo: "",
	uto: "",
	nev: "Hajók elmélete I.",
	kredit: "5",
	kod: "KOVRA470",
	kovetelmeny: "Félévközi jegy",
	tanszek: "VRHT",
	oktato: "Dr. Simongáti Győző",
	tanszekLink: 'http://www.vrht.bme.hu/vasut/targyak/index.php',
};

var jh56 = {
	elo: "",
	uto: "",
	nev: "Hajók hajtása II.",
	kredit: "5",
	kod: "KOVRA466",
	kovetelmeny: "Vizsga",
	tanszek: "VRHT",
	oktato: "Dr. Simongáti Győző",
	tanszekLink: 'http://www.vrht.bme.hu/vasut/targyak/index.php',
};

var jh57 = {
	elo: "",
	uto: "",
	nev: "Hajók elmélete II.",
	kredit: "4",
	kod: "KORHA534",
	kovetelmeny: "Félévközi jegy",
	tanszek: "VRHT",
	oktato: "Dr. Simongáti Győző",
	tanszekLink: 'http://www.vrht.bme.hu/vasut/targyak/index.php',
};

var jh58 = {
	elo: "",
	uto: "",
	nev: "Hajószerkezettan",
	kredit: "4",
	kod: "KOVRA467",
	kovetelmeny: "Félévközi jegy",
	tanszek: "VRHT",
	oktato: "Dr. Simongáti Győző",
	tanszekLink: 'http://www.vrht.bme.hu/vasut/targyak/index.php',
};

var jh66 = {
	elo: "",
	uto: "",
	nev: "Hajóépítés technológiája",
	kredit: "3",
	kod: "KOVRA468",
	kovetelmeny: "Félévközi jegy",
	tanszek: "VRHT",
	oktato: "Dr. Simongáti Győző",
	tanszekLink: 'http://www.vrht.bme.hu/vasut/targyak/index.php',
};

var jh67 = {
	elo: "",
	uto: "",
	nev: "Hajógépek",
	kredit: "4",
	kod: "KOVRA469",
	kovetelmeny: "Vizsga",
	tanszek: "VRHT",
	oktato: "Dr. Simongáti Győző",
	tanszekLink: 'http://www.vrht.bme.hu/vasut/targyak/index.php',
};

var jh68 = {
	elo: "",
	uto: "",
	nev: "Fedélzeti berendezések",
	kredit: "5",
	kod: "KOVRA471",
	kovetelmeny: "Vizsga",
	tanszek: "VRHT",
	oktato: "Dr. Simongáti Győző",
	tanszekLink: 'http://www.vrht.bme.hu/vasut/targyak/index.php',
};

var jh69 = {
	elo: "",
	uto: "",
	nev: "Hajó csőrendszerek",
	kredit: "3",
	kod: "KOVRA474",
	kovetelmeny: "Vizsga",
	tanszek: "VRHT",
	oktato: "Dr. Simongáti Győző",
	tanszekLink: 'http://www.vrht.bme.hu/vasut/targyak/index.php',
};

var jh692 = {
	elo: "",
	uto: "",
	nev: "Hajózási üzemtan",
	kredit: "2",
	kod: "KOVRA473",
	kovetelmeny: "Félévközi jegy",
	tanszek: "VRHT",
	oktato: "Dr. Simongáti Győző",
	tanszekLink: 'http://www.vrht.bme.hu/vasut/targyak/index.php',
};

var jh75 = {
	elo: "",
	uto: "",
	nev: "Hajózási gazdaságtan",
	kredit: "3",
	kod: "KORHA544",
	kovetelmeny: "Félévközi jegy",
	tanszek: "VRHT",
	oktato: "Dr. Rohács Dániel",
	tanszekLink: 'http://www.vrht.bme.hu/vasut/targyak/index.php',
};

var jh76 = {
	elo: "",
	uto: "",
	nev: "Kishajók",
	kredit: "4",
	kod: "KOVRA472",
	kovetelmeny: "Félévközi jegy",
	tanszek: "VRHT",
	oktato: "Dr. Simongáti Győző",
	tanszekLink: 'http://www.vrht.bme.hu/vasut/targyak/index.php',
};
/*MECHATRONIKA SZAKIRANY ************************************************/

var jm47 = {
	elo: "",
	uto: "",
	nev: "Jarmű hidr. és pneum.",
	kredit: "4",
	kod: "KOEAA545",
	kovetelmeny: "Félévközi jegy",
	tanszek: "ALRT",
	oktato: "Dr. Bohács Gábor",
	tanszekLink: 'http://logisztika.bme.hu',
};

var jm48 = {
	elo: "",
	uto: "",
	nev: "Járműfedélzeti rendszerek I.",
	kredit: "4",
	kod: "KOKAA573",
	kovetelmeny: "Félévközi jegy",
	tanszek: "KJIT",
	oktato: "Dr. Bécsi Tamás",
	tanszekLink: 'http://kjit.bme.hu/index.php/hu/hallgatoknak/jarmumechatronika-szakirany/jarmufedelzeti-rendszerek-i',
};

var jm56 = {
	elo: "",
	uto: "",
	nev: "Járműfedélzeti rendszerek II.",
	kredit: "5",
	kod: "KOKAA574",
	kovetelmeny: "Vizsga",
	tanszek: "KJIT",
	oktato: "Dr. Bécsi Tamás",
	tanszekLink: 'http://kjit.bme.hu/index.php/hu/hallgatoknak/jarmumechatronika-szakirany/jarmufedelzeti-rendszerek-ii',
};

var jm57 = {
	elo: "",
	uto: "",
	nev: "Érzékelők és beavatkozók I. ",
	kredit: "4",
	kod: "KOKAA576",
	kovetelmeny: "Félévközi jegy",
	tanszek: "KJIT",
	oktato: "Dr. Soumelidis Alexandros",
	tanszekLink: 'http://kjit.bme.hu/index.php/hu/hallgatoknak/jarmumechatronika-szakirany/erzekelok-es-beavatkozok-i',
};

var jm58 = {
	elo: "",
	uto: "",
	nev: "Járműirányítás I.",
	kredit: "4",
	kod: "KOKAA578",
	kovetelmeny: "Félévközi jegy",
	tanszek: "KJIT",
	oktato: "Dr. Bokor József",
	tanszekLink: 'http://www.kjit.bme.hu/index.php/hu/hallgatoknak/jarmumechatronika-szakirany/jarmuiranyitas-i',
};

var jm66 = {
	elo: "",
	uto: "",
	nev: "Járműfedélzeti rendszerek III.",
	kredit: "5",
	kod: "KOKAA575",
	kovetelmeny: "Vizsga",
	tanszek: "KJIT",
	oktato: "Dr. Bécsi Tamás",
	tanszekLink: 'http://www.kjit.bme.hu/index.php/hu/hallgatoknak/jarmumechatronika-szakirany/jarmufedelzeti-rendszerek-iii',
};

var jm67 = {
	elo: "",
	uto: "",
	nev: "Érzékelők és beavatkozók II.",
	kredit: "4",
	kod: "KOKAA577",
	kovetelmeny: "Vizsga",
	tanszek: "KJIT",
	oktato: "Dr. Soumelidis Alexandros",
	tanszekLink: 'http://www.kjit.bme.hu/index.php/hu/hallgatoknak/jarmumechatronika-szakirany/erzekelok-es-beavatkozok-ii',
};

var jm68 = {
	elo: "",
	uto: "",
	nev: "Járműirányítás II.",
	kredit: "4",
	kod: "KOKAA579",
	kovetelmeny: "Vizsga",
	tanszek: "KJIT",
	oktato: "Dr. Bokor József",
	tanszekLink: 'http://www.kjit.bme.hu/index.php/hu/hallgatoknak/jarmumechatronika-szakirany/jarmuiranyitas-ii',
};

var jm69 = {
	elo: "",
	uto: "",
	nev: "Járműfedélzeti kommunikáció",
	kredit: "4",
	kod: "KOKAA580",
	kovetelmeny: "Félévközi jegy",
	tanszek: "KJIT",
	oktato: "Dr. Szabó Géza",
	tanszekLink: 'http://www.kjit.bme.hu/index.php/hu/hallgatoknak/jarmumechatronika-szakirany/jarmufedelzeti-kommunikacio',
};

var jm75 = {
	elo: "",
	uto: "",
	nev: "Megbízhatóság és biztonság",
	kredit: "3",
	kod: "KOKAA582",
	kovetelmeny: "Félévközi jegy",
	tanszek: "VRHT",
	oktato: "Dr. Sághi Balázs",
	tanszekLink: 'http://www.kjit.bme.hu/index.php/hu/hallgatoknak/bsc-targyak/megbizhatosag-es-biztonsag',
};

var jm76 = {
	elo: "",
	uto: "",
	nev: "Mobil gépek mechatronikája",
	kredit: "4",
	kod: "KOEAA581",
	kovetelmeny: "Félévközi jegy",
	tanszek: "KJIT",
	oktato: "Dr. Aradi Szilárd",
	tanszekLink: 'http://www.kjit.bme.hu/index.php/hu/hallgatoknak/jarmumechatronika-szakirany/mobil-gepek-m',
};

var jy47 = {
	elo: "",
	uto: "",
	nev: "Járműanyagok",
	kredit: "8",
	kod: "KOJJA565",
	kovetelmeny: "Félévközi jegy",
	tanszek: "GJT",
	oktato: "Dr. Bán Krisztián",
	tanszekLink: 'http://gjt.bme.hu/',
};

var jy56 = {
	elo: "",
	uto: "",
	nev: "Szenzorika és anyagai",
	kredit: "2",
	kod: "KOJJA441",
	kovetelmeny: "Félévközi jegy",
	tanszek: "GJT",
	oktato: "Dr. Bánlaki Pál",
	tanszekLink: 'http://gjt.bme.hu/',
};

var jy57 = {
	elo: "",
	uto: "",
	nev: "Gyártásautomatizálás",
	kredit: "7",
	kod: "KOJJA567",
	kovetelmeny: "Vizsga",
	tanszek: "GJT",
	oktato: "Dr. Takács János",
	tanszekLink: 'http://gjt.bme.hu/',
};

var jy58 = {
	elo: "",
	uto: "",
	nev: "Járműgyártás folyamatai I.",
	kredit: "4",
	kod: "KOJJA568",
	kovetelmeny: "Félévközi jegy",
	tanszek: "GJT",
	oktato: "Dr. Markovits Tamás",
	tanszekLink: 'http://gjt.bme.hu/',
};

var jy66 = {
	elo: "",
	uto: "",
	nev: "Járműgyártás folyamatai II.",
	kredit: "13",
	kod: "KOJJA569",
	kovetelmeny: "Vizsga",
	tanszek: "GJT",
	oktato: "Dr. Takács János",
	tanszekLink: 'http://gjt.bme.hu/',
};

var jy67 = {
	elo: "",
	uto: "",
	nev: "Minőségügyi rendszerek",
	kredit: "4",
	kod: "KOJJA570",
	kovetelmeny: "Vizsga",
	tanszek: "GJT",
	oktato: "Dr. Markovits Tamás",
	tanszekLink: 'http://gjt.bme.hu/',
};

var jy75 = {
	elo: "",
	uto: "",
	nev: "Járműdiagnosztika",
	kredit: "3",
	kod: "KOJJA572",
	kovetelmeny: "Félévközi jegy",
	tanszek: "GJT",
	oktato: "Dr. Dömötör Ferenc",
	tanszekLink: 'http://gjt.bme.hu/',
};

var jy76 = {
	elo: "",
	uto: "",
	nev: "Szerelés, minőségbiztosítás",
	kredit: "4",
	kod: "KOJJA571",
	kovetelmeny: "Félévközi jegy",
	tanszek: "GJT",
	oktato: "Dr. Markovits Tamás",
	tanszekLink: 'http://gjt.bme.hu/',
};
/*EPITOGEPEK ---------------------------------------------------------*/
var je47 = {
	elo: "",
	uto: "",
	nev: "Anyagmozgatógépek I.",
	kredit: "4",
	kod: "KOALA486",
	kovetelmeny: "Félévközi jegy",
	tanszek: "ALRT",
	oktato: "Dr. Bohács Gábor",
	tanszekLink: 'https://www.logisztika.bme.hu/hu/',
};

var je48 = {
	elo: "",
	uto: "",
	nev: "Hajtástechnika I.",
	kredit: "4",
	kod: "KOALA488",
	kovetelmeny: "Félévközi jegy",
	tanszek: "ALRT",
	oktato: "Gáspár Dániel",
	tanszekLink: 'https://www.logisztika.bme.hu/hu/',
};

var je56 = {
	elo: "",
	uto: "",
	nev: "Építőipari projekt m.",
	kredit: "3",
	kod: "KOALA452",
	kovetelmeny: "Félévközi jegy",
	tanszek: "ALRT",
	oktato: "Gyimesi András",
	tanszekLink: 'https://www.logisztika.bme.hu/hu/',
};

var je57 = {
	elo: "",
	uto: "",
	nev: "Betontechnológiai gépek I.",
	kredit: "5",
	kod: "KOALA484",
	kovetelmeny: "Vizsga",
	tanszek: "ALRT",
	oktato: "Gyimesi András",
	tanszekLink: 'https://www.logisztika.bme.hu/hu/',
};

var je58 = {
	elo: "",
	uto: "",
	nev: "Automatizálás-technika",
	kredit: "5",
	kod: "KOALA492",
	kovetelmeny: "Félévközi jegy",
	tanszek: "ALRT",
	oktato: "Gáspár Dániel",
	tanszekLink: 'https://www.logisztika.bme.hu/hu/',
};

var je66 = {
	elo: "",
	uto: "",
	nev: "Betontechnológiai gépek II.",
	kredit: "7",
	kod: "KOALA485",
	kovetelmeny: "Vizsga",
	tanszek: "ALRT",
	oktato: "Gyimesi András",
	tanszekLink: 'https://www.logisztika.bme.hu/hu/',
};

var je67 = {
	elo: "",
	uto: "",
	nev: "Építőgépek I.",
	kredit: "5",
	kod: "KOALA448",
	kovetelmeny: "Vizsga",
	tanszek: "ALRT",
	oktato: "Gyimesi András",
	tanszekLink: 'https://www.logisztika.bme.hu/hu/',
};

var je68 = {
	elo: "",
	uto: "",
	nev: "Hajtástechnika II.",
	kredit: "5",
	kod: "KOALA489",
	kovetelmeny: "Vizsga",
	tanszek: "ALRT",
	oktato: "Gyimesi András",
	tanszekLink: 'https://www.logisztika.bme.hu/hu/',
};

var je75 = {
	elo: "",
	uto: "",
	nev: "Mobilgépek fed. eszközei",
	kredit: "3",
	kod: "KOALA491",
	kovetelmeny: "Félévközi jegy",
	tanszek: "ALRT",
	oktato: "Gyimesi András",
	tanszekLink: 'https://www.logisztika.bme.hu/hu/',
};

var je76 = {
	elo: "",
	uto: "",
	nev: "Építőgépek II.",
	kredit: "4",
	kod: "KOALA449",
	kovetelmeny: "Félévközi jegy",
	tanszek: "ALRT",
	oktato: "Gyimesi András",
	tanszekLink: 'https://www.logisztika.bme.hu/hu/',
};

var ja47 = {
	elo: "",
	uto: "",
	nev: "Anyagmozgatógépek I.",
	kredit: "4",
	kod: "KOALA486",
	kovetelmeny: "Félévközi jegy",
	tanszek: "ALRT",
	oktato: "Dr. Bohács Gábor",
	tanszekLink: 'https://www.logisztika.bme.hu/hu/',
};

var ja48 = {
	elo: "",
	uto: "",
	nev: "Hajtástechnika I.",
	kredit: "4",
	kod: "KOALA488",
	kovetelmeny: "Félévközi jegy",
	tanszek: "ALRT",
	oktato: "Gáspár Dániel",
	tanszekLink: 'https://www.logisztika.bme.hu/hu/',
};

var ja56 = {
	elo: "",
	uto: "",
	nev: "Anyagmozgatási projekt m.",
	kredit: "3",
	kod: "KOALA456",
	kovetelmeny: "Félévközi jegy",
	tanszek: "ALRT",
	oktato: "Dr. Bohács Gábor",
	tanszekLink: 'https://www.logisztika.bme.hu/hu/',
};

var ja57 = {
	elo: "",
	uto: "",
	nev: "Anyagmozgatógépek II",
	kredit: "5",
	kod: "KOALA477",
	kovetelmeny: "Vizsga",
	tanszek: "ALRT",
	oktato: "Dr. Bohács Gábor",
	tanszekLink: 'https://www.logisztika.bme.hu/hu/',
};

var ja58 = {
	elo: "",
	uto: "",
	nev: "Automatizálás-technika",
	kredit: "5",
	kod: "KOALA492",
	kovetelmeny: "Félévközi jegy",
	tanszek: "ALRT",
	oktato: "Gáspár Dániel",
	tanszekLink: 'https://www.logisztika.bme.hu/hu/',
};

var ja66 = {
	elo: "",
	uto: "",
	nev: "Anyagmozgatási projekt",
	kredit: "7",
	kod: "KOALA459",
	kovetelmeny: "Vizsga",
	tanszek: "ALRT",
	oktato: "Dr. Bohács Gábor",
	tanszekLink: 'https://www.logisztika.bme.hu/hu/',
};

var ja67 = {
	elo: "",
	uto: "",
	nev: "Robottechnika",
	kredit: "5",
	kod: "KOALA460",
	kovetelmeny: "Vizsga",
	tanszek: "ALRT",
	oktato: "Szabó Péter",
	tanszekLink: 'https://www.logisztika.bme.hu/hu/',
};

var ja68 = {
	elo: "",
	uto: "",
	nev: "Hajtástechnika II.",
	kredit: "5",
	kod: "KOALA489",
	kovetelmeny: "Vizsga",
	tanszek: "ALRT",
	oktato: "Gyimesi András",
	tanszekLink: 'https://www.logisztika.bme.hu/hu/',
};

var ja75 = {
	elo: "",
	uto: "",
	nev: "Mobilgépek fed. eszközei",
	kredit: "3",
	kod: "KOALA491",
	kovetelmeny: "Félévközi jegy",
	tanszek: "ALRT",
	oktato: "Gyimesi András",
	tanszekLink: 'https://www.logisztika.bme.hu/hu/',
};

var ja76 = {
	elo: "",
	uto: "",
	nev: "Járműipari anyagmozgatási r.",
	kredit: "4",
	kod: "KOALA430",
	kovetelmeny: "Félévközi jegy",
	tanszek: "ALRT",
	oktato: "Szabó Péter",
	tanszekLink: 'https://www.logisztika.bme.hu/hu/',
};

var jf47 = {
	elo: "",
	uto: "",
	nev: "Felépítmény típusismeret",
	kredit: "3",
	kod: "KOJSA483",
	kovetelmeny: "Félévközi jegy",
	tanszek: "JHT",
	oktato: "Dr. Béda Péter",
	tanszekLink: 'http://www.jht.bme.hu/hun/_okt_bsc_ftip_583.html',
};

var jf48 = {
	elo: "",
	uto: "",
	nev: "Járműfelépítmény mech.",
	kredit: "5",
	kod: "KOJKA584",
	kovetelmeny: "Félévközi jegy",
	tanszek: "JHT",
	oktato: "Dr. Béda Péter",
	tanszekLink: 'http://www.jht.bme.hu/hun/_okt_bsc_jfm_584.html',
};

var jf56= {
	elo: "",
	uto: "",
	nev: "Törés és károsodás",
	kredit: "4",
	kod: "KOJSA478",
	kovetelmeny: "Félévközi jegy",
	tanszek: "JHT",
	oktato: "Dr. Lovas László",
	tanszekLink: 'http://www.jht.bme.hu/hun/_okt_bsc_jm.html',
};

var jf57 = {
	elo: "",
	uto: "",
	nev: "Szendvics szerkezetek",
	kredit: "4",
	kod: "KOJSA476",
	kovetelmeny: "Félévközi jegy",
	tanszek: "JHT",
	oktato: "Dr. Lovas László",
	tanszekLink: 'http://www.jht.bme.hu/hun/_okt_bsc_jm.html',
};

var jf58 = {
	elo: "",
	uto: "",
	nev: "Felépítmény hidr. és pneum.",
	kredit: "5",
	kod: "KOJSA475",
	kovetelmeny: "Vizsga",
	tanszek: "JHT	",
	oktato: "Dr. Béda Péter",
	tanszekLink: 'http://www.jht.bme.hu/hun/_okt_bsc_jm.html',
};

var jf66 = {
	elo: "",
	uto: "",
	nev: "Felépítmények dinamikája",
	kredit: "8",
	kod: "KOJSA479",
	kovetelmeny: "Vizsga",
	tanszek: "JHT",
	oktato: "Dr. Pápai Ferenc",
	tanszekLink: 'http://www.jht.bme.hu/hun/_okt_bsc_jm.html',
};

var jf67 = {
	elo: "",
	uto: "",
	nev: "Felépítmények vizsgálatai",
	kredit: "4",
	kod: "KOJSA480",
	kovetelmeny: "Vizsga",
	tanszek: "JHT",
	oktato: "Dr. Pápai Ferenc",
	tanszekLink: 'http://www.jht.bme.hu/hun/_okt_bsc_jm.html',
};

var jf68 = {
	elo: "",
	uto: "",
	nev: "Vázszerk. szám.I.",
	kredit: "5",
	kod: "KOJSA481",
	kovetelmeny: "Vizsga",
	tanszek: "JHT",
	oktato: "Dr. Pápai Ferenc",
	tanszekLink: 'http://www.jht.bme.hu/hun/_okt_bsc_jm.html',
};

var jf75 = {
	elo: "",
	uto: "",
	nev: "Szil. test mech. fejezetei",
	kredit: "3",
	kod: "KOJSA482",
	kovetelmeny: "Félévközi jegy",
	tanszek: "JHT",
	oktato: "Dr. Béda Péter",
	tanszekLink: 'http://www.jht.bme.hu/hun/_okt_bsc_jm.html',
};

var jf76 = {
	elo: "",
	uto: "",
	nev: "Vázszerk. szám.II.",
	kredit: "4",
	kod: "KOJSA487",
	kovetelmeny: "Félévközi jegy",
	tanszek: "JHT",
	oktato: "Dr. Pápai Ferenc",
	tanszekLink: 'http://www.jht.bme.hu/hun/_okt_bsc_jm.html',
};

/*KOZLEKEDES MERNOK ---------------------------------------------------------------------------------------------------------*/
var k11 = {
	elo: "",
	uto: "21",
	nev: "Matematika A1a",
	kredit: "6",
	kod: "TE90AX00",
	kovetelmeny: "Vizsga",
	tanszek: "Matematika Intézet",
	oktato: "Dr. Petz Dénes",
	tanszekLink: 'http://math.bme.hu/',
	
};

var k12 = {
	elo: "",
	uto: "",
	nev: "Fizika",
	kredit: "3",
	kod: "TE15AX17",
	kovetelmeny: "Vizsga",
	tanszek: "Elméleti Fizika",
	oktato: "Dr. Varga Imre",
	tanszekLink: 'http://dtp.physics.bme.hu/',
	
};

var k13 = {
	elo: "",
	uto: "",
	nev: "Műszaki kémia",
	kredit: "3",
	kod: "VEKTAKO1",
	kovetelmeny: "Vizsga",
	tanszek: 'KKFT',
	oktato: "Dr. Bajnóczy Gábor",
	tanszekLink: 'http://kkft.bme.hu/',
};

var k14 = {
	elo: "",
	uto: "",
	nev: "JKL Rendszerek",
	kredit: "8",
	kod: "KODHA149 ",
	kovetelmeny: "Félévközi jegy ",
	tanszek: "Dékáni",
	oktato: "Dr. Varga István",
	tanszekLink: 'http://kozlekedes.bme.hu/oktatas/jkl-rendszerek/',
	
};

var k15 = {
	elo: "",
	uto: "",
	nev: "Általános járműgéptan",
	kredit: "3",
	kod: "KOVJA112",
	kovetelmeny: "Félévközi jegy",
	tanszek: "VRHT",
	oktato: "Dr. Szabó András",
	tanszekLink: 'http://www.vrht.bme.hu/vasut/targyak/Tant-akt.php?Kepzes=BSc.-MSc.-Nev-Suk&Kod=BMEKOVJA112',
};

var k16 = {
	elo: "",
	uto: "",
	nev: "Programozás",
	kredit: "7",
	kod: "KOKAA146",
	kovetelmeny: "Félévközi jegy",
	tanszek: "KJIT",
	oktato: "Dr. Bécsi Tamás",
	tanszekLink: 'http://www.kjit.bme.hu/index.php/hu/hallgatoknak/bsc-targyak-3/programozas',
};

var k21 = {
	elo: "",
	uto: "",
	nev: "Matematika A2a",
	kredit: "6",
	kod: "TE90AX02",
	kovetelmeny: "Vizsga",
	tanszek: "Matematika Intézet",
	oktato: "Dr. Rónyai Lajos",
	tanszekLink: 'http://math.bme.hu/',
};

var k22 = {
	elo: "",
	uto: "",
	nev: "Anyagismeret",
	kredit: "4",
	kod: "KOJJA106",
	kovetelmeny: "Vizsga",
	tanszek: "GJT",
	oktato: "Dr. Bán Krisztián",
	tanszekLink: 'http://gjt.bme.hu/oktatas/tantargylista/jarmugyartas/bsc',
};

var k23 = {
	elo: "",
	uto: "",
	nev: "Mechanika I",
	kredit: "6",
	kod: "KOJSA141",
	kovetelmeny: "Vizsga",
	tanszek: "JHT",
	oktato: "Dr. Béda Péter ",
	tanszekLink: 'http://www.jht.bme.hu/hun/_okt_bsc_me1_141.html',
};

var k24 = {
	elo: "",
	uto: "",
	nev: "Elektrotechika",
	kredit: "6",
	kod: "KOKAA139",
	kovetelmeny: "Vizsga",
	tanszek: "KJIT",
	oktato: "Dr. Szabó Géza",
	tanszekLink: 'http://www.kjit.bme.hu/index.php/hu/hallgatoknak/bsc-targyak-3/elektrotechnika-elektronika',
};

var k25 = {
	elo: "",
	uto: "",
	nev: "Mikro- és makro ökonómia ",
	kredit: "4",
	kod: "GT30A001",
	kovetelmeny: "Vizsga",
	tanszek: "Közgazdaságtan",
	oktato: "Dr. Meyer Dietmar ",
	tanszekLink: 'http://kgt.bme.hu/cms/index.php?Oktat%C3%A1s___BSc%2FBA',
};

var k26 = {
	elo: "",
	uto: "",
	nev: "Műszaki ábrázolás alapjai",
	kredit: "4",
	kod: "KOJSA147",
	kovetelmeny: "Félévközi jegy",
	tanszek: "JHT",
	oktato: "Dr. Ficzere Péter",
	tanszekLink: 'http://www.jht.bme.hu/hun/_okt_bsc_maa_147.html',
};

var k31 = {
	elo: "",
	uto: "",
	nev: "Matematika A3k",
	kredit: "4",
	kod: "TE90AX53",
	kovetelmeny: "Vizsga",
	tanszek: "Matematika Intézet",
	oktato: "Dr. Nagy Attila",
	tanszekLink: 'http://math.bme.hu/',
};

var k32 = {
	elo: "",
	uto: "",
	nev: "Mechanika 2",
	kredit: "4",
	kod: "KOJSA142",
	kovetelmeny: "Vizsga",
	tanszek: "JHT",
	oktato: "Dr. Béda Péter",
	tanszekLink: 'http://www.jht.bme.hu/hun/_okt_bsc_me2_142.html',
};

var k34 = {
	elo: "",
	uto: "",
	nev: "Hőtan",
	kredit: "3",
	kod: "KOVRA144",
	kovetelmeny: "Vizsga",
	tanszek: "VRHT",
	oktato: "Dr. Veress Árpád",
	tanszekLink: 'http://www.vrht.bme.hu/vasut/targyak/',
};

var k33 = {
	elo: "",
	uto: "",
	nev: "Menedzsment",
	kredit: "4",
	kod: "KOKGA109",
	kovetelmeny: "vizsga",
	tanszek: "KUKG",
	oktato: "Dr. Kővári Botond",
	tanszekLink: 'http://kukg.bme.hu/index.php/hu/bsc-tantargyak/21-bsc-kozlekedesmernoki-szak/40-menedzsment-es-vallalkozas-gazdasagtan-bmekokga109'
};

var k35 = {
	elo: "",
	uto: "",
	nev: "Járműelemek",
	kredit: "3",
	kod: "KOJSA166",
	kovetelmeny: "Félévközi jegy",
	tanszek: "JHT",
	oktato: "Dr. Lovas László",
	tanszekLink: 'http://www.jht.bme.hu/hun/_okt_bsc_jel_166.html',
};

var k36 = {
	elo: "",
	uto: "",
	nev: "Közlekedésföldrajz",
	kredit: "3",
	kod: "KOKKA167",
	kovetelmeny: "Félévközi jegy",
	tanszek: "KUKG",
	oktato: "Nagy Zoltán",
	tanszekLink: 'http://kukg.bme.hu/index.php/hu/bsc-tantargyak',
};

var k37 = {
	elo: "",
	uto: "",
	nev: "Anyagtech., járműfenntartás",
	kredit: "4",
	kod: "KOGJA254",
	kovetelmeny: "Félévközi jegy",
	tanszek: "GJT",
	oktato: "Dr. Pál Zoltán",
	tanszekLink: 'http://gjt.bme.hu/',
};

var k38 = {
	elo: "",
	uto: "",
	nev: "Közlekedési pályák",
	kredit: "3",
	kod: "KOKKA238",
	kovetelmeny: "Félévközi jegy",
	tanszek: "KUKG",
	oktato: "Dr. Juhász János",
	tanszekLink: 'http://kukg.bme.hu/index.php/hu/bsc-tantargyak',
};

var k41 = {
	elo: "",
	uto: "",
	nev: "Áramlástan",
	kredit: "3",
	kod: "KOVRA145",
	kovetelmeny: "Vizsga",
	tanszek: "VRHT",
	oktato: "Dr. Simongáti Győző",
	tanszekLink: 'http://www.vrht.bme.hu/vasut/targyak/',
};

var k42 = {
	elo: "",
	uto: "",
	nev: "Közlekedésstatisztika",
	kredit: "3",
	kod: "KOKGA178",
	kovetelmeny: "Félévközi jegy",
	tanszek: "KUKG",
	oktato: "Dr. Békefi Zoltán",
	tanszekLink: 'http://kukg.bme.hu/index.php/hu/bsc-tantargyak',
};

var k43 = {
	elo: "",
	uto: "",
	nev: "Közlekedési technológia",
	kredit: "5",
	kod: "KOKKA239",
	kovetelmeny: "Vizsga",
	tanszek: "KUKG",
	oktato: "Dr. Mándoki Péter",
	tanszekLink: 'http://kukg.bme.hu/index.php/hu/bsc-tantargyak',
};

var k44 = {
	elo: "",
	uto: "",
	nev: "Járműdinamika",
	kredit: "2",
	kod: "KOVJA177",
	kovetelmeny: "Félévközi jegy",
	tanszek: "VRHT",
	oktato: "Dr. Szabó András",
	tanszekLink: 'http://www.vrht.bme.hu/vasut/targyak/',
};

var k45 = {
	elo: "",
	uto: "",
	nev: "Számítógépes műszaki alk.",
	kredit: "3",
	kod: "KOKAA270",
	kovetelmeny: "Félévközi jegy",
	tanszek: "KJIT",
	oktato: "Dr. Bede Zsuzsanna",
	tanszekLink: 'http://www.kjit.bme.hu/index.php/hu/',
};

var k46 = {
	elo: "",
	uto: "",
	nev: "Közlekedési inf. rendszerek I.",
	kredit: "5",
	kod: "KOKKA240",
	kovetelmeny: "Félévközi jegy",
	tanszek: "KUKG",
	oktato: "Dr. Csiszár Csaba",
	tanszekLink: 'http://kukg.bme.hu/index.php/hu/bsc-tantargyak',
};

var k47 = {
	elo: "",
	uto: "",
	nev: "Közlekedési automatika",
	kredit: "4",
	kod: "KOKAA179",
	kovetelmeny: "Vizsga",
	tanszek: "KJIT",
	oktato: "Dr. Sághi Balázs",
	tanszekLink: 'http://www.kjit.bme.hu/index.php/hu/',
};

var k48 = {
	elo: "",
	uto: "",
	nev: "Üzleti jog",
	kredit: "2",
	kod: "GT55A001",
	kovetelmeny: "Félévközi jegy",
	tanszek: "Üzleti Jog Tanszék",
	oktato: "Dr. Pázmándi Kinga",
	tanszekLink: 'http://www.law.bme.hu/',
};

var k51 = {
	elo: "",
	uto: "",
	nev: "Üzemszervezés",
	kredit: "6",
	kod: "KOKUA180",
	kovetelmeny: "Vizsga",
	tanszek: "KUKG",
	oktato: "Dr. Juhász János",
	tanszekLink: 'http://kukg.bme.hu/index.php/hu/bsc-tantargyak',
};

var k52 = {
	elo: "",
	uto: "",
	nev: "Logikai hálózatok",
	kredit: "3",
	kod: "KOKAA137",
	kovetelmeny: "Félévközi jegy",
	tanszek: "KJIT",
	oktato: "Dr. Bokor József",
	tanszekLink: 'http://kjit.bme.hu/index.php/hu/',
};

var k53 = {
	elo: "",
	uto: "",
	nev: "Irányítástechnika",
	kredit: "3",
	kod: "KOKAA138",
	kovetelmeny: "Vizsga",
	tanszek: "KJIT",
	oktato: "Dr. Bokor József",
	tanszekLink: 'http://kjit.bme.hu/index.php/hu/hallgatoknak/bsc-targyak-3/iranyitastechnika',
};

var k54 = {
	elo: "",
	uto: "",
	nev: "Közlekedési inf. rendszerek II.",
	kredit: "5",
	kod: "KOKKA252",
	kovetelmeny: "Vizsga",
	tanszek: "KUKG",
	oktato: "Dr. Csiszár Csaba",
	tanszekLink: 'http://kukg.bme.hu/index.php/hu/bsc-tantargyak',
};

var k61 = {
	elo: "",
	uto: "",
	nev: "Közlekedés-gazdaságtan",
	kredit: "5",
	kod: "KOKKA262",
	kovetelmeny: "Vizsga",
	tanszek: "KUKG",
	oktato: "Dr. Török Ádám",
	tanszekLink: 'http://kukg.bme.hu/index.php/hu/bsc-tantargyak',
};

var k63 = {
	elo: "",
	uto: "",
	nev: "Menedzser tréning",
	kredit: "2",
	kod: "KOKKA199",
	kovetelmeny: "Félévközi jegy",
	tanszek: "KUKG",
	oktato: "Dr. Mészáros Ferenc",
	tanszekLink: 'http://kukg.bme.hu/index.php/hu/bsc-tantargyak',
};

var k64 = {
	elo: "",
	uto: "",
	nev: "Közlekedési hálózattervezés",
	kredit: "5",
	kod: "KOKKA271",
	kovetelmeny: "Vizsga",
	tanszek: "KUKG",
	oktato: "Dr. Tóth János",
	tanszekLink: 'http://kukg.bme.hu/index.php/hu/bsc-tantargyak',
};

var k65 = {
	elo: "",
	uto: "",
	nev: "Minőségügy",
	kredit: "2",
	kod: "KOGJA148",
	kovetelmeny: "Félévközi jegy",
	tanszek: "GJT",
	oktato: "Dr. Stukovszky Zsolt",
	tanszekLink: 'http://gjt.bme.hu/',
};

var k71 = {
	elo: "",
	uto: "",
	nev: "Munkavédelem",
	kredit: "2",
	kod: "KOEAA111",
	kovetelmeny: "Félévközi jegy",
	tanszek: "ALRT",
	oktato: "Dr. Bohács Gábor",
	tanszekLink: 'https://www.logisztika.bme.hu/hu/',
};

var k73 = {
	elo: "",
	uto: "",
	nev: "Kommunikációs rendszerek",
	kredit: "5",
	kod: "KOKAA272",
	kovetelmeny: "Félévközi jegy",
	tanszek: "KJIT",
	oktato: "Dr. Szabó Géza",
	tanszekLink: 'http://kjit.bme.hu/index.php/hu/hallgatoknak/bsc-targyak-3/kommunikacios-rendszerek',
};

var kk49 = {
	elo: "",
	uto: "",
	nev: "Közúti pályák",
	kredit: "3",
	kod: "KOEAA213",
	kovetelmeny: "Félévközi jegy",
	tanszek: "KUKG",
	oktato: "Dr. Juhász János",
	tanszekLink: 'http://kukg.bme.hu/index.php/hu/bsc-tantargyak',
};

var kk55 = {
	elo: "",
	uto: "",
	nev: "Közúti forgalomirányítás I.",
	kredit: "3",
	kod: "KOKAA265",
	kovetelmeny: "Félévközi jegy",
	tanszek: "KJIT",
	oktato: "Dr. Tettamanti Tamás",
	tanszekLink: 'http://www.kjit.bme.hu/index.php/hu/hallgatoknak/bsc-targyak-3/kozuti-forgalomiranyitas-i',
};

var kk56 = {
	elo: "",
	uto: "",
	nev: "Közúti menedzsment",
	kredit: "4",
	kod: "KOKKA260",
	kovetelmeny: "Félévközi jegy",
	tanszek: "KUKG",
	oktato: "Sipos Tibor",
	tanszekLink: 'http://kukg.bme.hu/index.php/hu/bsc-tantargyak',
};

var kk57 = {
	elo: "",
	uto: "",
	nev: "Gépjármű üzemtan",
	kredit: "2",
	kod: "KOKKA268",
	kovetelmeny: "Félévközi jegy",
	tanszek: "KUKG",
	oktato: "Dr. Mándoki Péter",
	tanszekLink: 'http://kukg.bme.hu/index.php/hu/bsc-tantargyak',
};

var kk58 = {
	elo: "",
	uto: "",
	nev: "Forgalomtechnika",
	kredit: "4",
	kod: "KOKUA209",
	kovetelmeny: "Vizsga",
	tanszek: "KUKG",
	oktato: "Kózel Miklós",
	tanszekLink: 'http://kukg.bme.hu/index.php/hu/bsc-tantargyak',
};

var kk67 = {
	elo: "",
	uto: "",
	nev: "Integrált áruszáll. rendszerek",
	kredit: "5",
	kod: "KOKKA275",
	kovetelmeny: "Félévközi jegy",
	tanszek: "KUKG",
	oktato: "Dr. Duleba Szabolcs",
	tanszekLink: 'http://kukg.bme.hu/index.php/hu/bsc-tantargyak',
};

var kk68 = {
	elo: "",
	uto: "",
	nev: "Közúti forgalomirányítás II.",
	kredit: "4",
	kod: "KOKAA266",
	kovetelmeny: "Vizsga",
	tanszek: "KJIT",
	oktato: "Dr. Tettamanti Tamás",
	tanszekLink: 'http://www.kjit.bme.hu/index.php/hu/hallgatoknak/bsc-targyak-3/kozuti-forgalomiranyitas-ii',
};

var kk69 = {
	elo: "",
	uto: "",
	nev: "Közúti informatika",
	kredit: "3",
	kod: "KOKUA212",
	kovetelmeny: "Vizsga",
	tanszek: "KUKG",
	oktato: "Dr. Tóth János",
	tanszekLink: 'http://kukg.bme.hu/index.php/hu/bsc-tantargyak',
};

var kv49 = {
	elo: "",
	uto: "",
	nev: "Vasúti pályák",
	kredit: "3",
	kod: "KOEAA221",
	kovetelmeny: "Félévközi jegy",
	tanszek: "ALRT",
	oktato: "Gyimesi András",
	tanszekLink: 'https://www.logisztika.bme.hu/hu/',
};

var kv55 = {
	elo: "",
	uto: "",
	nev: "Vasúti automatika I.",
	kredit: "3",
	kod: "KOKAA276",
	kovetelmeny: "Félévközi jegy",
	tanszek: "KJIT",
	oktato: "Dr. Sághi Balázs",
	tanszekLink: 'http://www.kjit.bme.hu/index.php/hu/',
};

var kv56 = {
	elo: "",
	uto: "",
	nev: "Vasúti menedzsment",
	kredit: "4",
	kod: "KOKKA269",
	kovetelmeny: "Félévközi jegy",
	tanszek: "KUKG",
	oktato: "Dr. Békefi Zoltán",
	tanszekLink: 'http://kukg.bme.hu/index.php/hu/bsc-tantargyak',
};

var kv57 = {
	elo: "",
	uto: "",
	nev: "Vasúti üzemtan",
	kredit: "6",
	kod: "KOKKA267",
	kovetelmeny: "Vizsga",
	tanszek: "KUKG",
	oktato: "Dr. Mándoki Péter",
	tanszekLink: 'http://kukg.bme.hu/index.php/hu/bsc-tantargyak',
};

var kv67 = {
	elo: "",
	uto: "",
	nev: "Integrált áruszáll. rendszerek",
	kredit: "5",
	kod: "KOKKA275",
	kovetelmeny: "Félévközi jegy",
	tanszek: "KUKG",
	oktato: "Dr. Duleba Szabolcs",
	tanszekLink: 'http://kukg.bme.hu/index.php/hu/bsc-tantargyak',
};

var kv68 = {
	elo: "",
	uto: "",
	nev: "Vasúti automatika II.",
	kredit: "4",
	kod: "KOKAA273",
	kovetelmeny: "Vizsga",
	tanszek: "KJIT",
	oktato: "Dr. Sághi Balázs",
	tanszekLink: 'http://www.kjit.bme.hu/index.php/hu/',
};

var kv69 = {
	elo: "",
	uto: "",
	nev: "Vasúti informatika",
	kredit: "3",
	kod: "KOKUA220",
	kovetelmeny: "Vizsga",
	tanszek: "KUKG",
	oktato: "Bánfi Miklós",
	tanszekLink: 'http://kukg.bme.hu/index.php/hu/bsc-tantargyak',
};

var kl49 = {
	elo: "",
	uto: "",
	nev: "Légterek, repülőterek",
	kredit: "3",
	kod: "KOKUA229",
	kovetelmeny: "Félévközi jegy",
	tanszek: "KUKG",
	oktato: "Mudra István",
	tanszekLink: 'http://kukg.bme.hu/index.php/hu/bsc-tantargyak',
};

var kl55 = {
	elo: "",
	uto: "",
	nev: "Légi ir. I.",
	kredit: "3",
	kod: "KOKAA222",
	kovetelmeny: "Félévközi jegy",
	tanszek: "KJIT",
	oktato: "Dr. Varga István",
	tanszekLink: 'http://www.kjit.bme.hu/index.php/hu/',
};

var kl56 = {
	elo: "",
	uto: "",
	nev: "Légiközlekedési menedzs.",
	kredit: "4",
	kod: "KOKKA257",
	kovetelmeny: "Félévközi jegy",
	tanszek: "KUKG",
	oktato: "Dr. Kővári Botond",
	tanszekLink: 'http://kukg.bme.hu/index.php/hu/bsc-tantargyakS',
};

var kl57 = {
	elo: "",
	uto: "",
	nev: "Repülés üzemeltetés",
	kredit: "6",
	kod: "KOVRA274",
	kovetelmeny: "Vizsga",
	tanszek: "VRHT",
	oktato: "Dr. Rohács József",
	tanszekLink: 'http://www.vrht.bme.hu/vasut/targyak/',
};

var kl67 = {
	elo: "",
	uto: "",
	nev: "Integrált áruszáll. rendszerek",
	kredit: "5",
	kod: "KOKKA275",
	kovetelmeny: "Félévközi jegy",
	tanszek: "KUKG",
	oktato: "Dr. Duleba Szabolcs",
	tanszekLink: 'http://kukg.bme.hu/index.php/hu/bsc-tantargyak',
};

var kl68 = {
	elo: "",
	uto: "",
	nev: "Légi ir. II.",
	kredit: "4",
	kod: "KOKAA253",
	kovetelmeny: "Vizsga",
	tanszek: "KJIT",
	oktato: "Dr. Varga István",
	tanszekLink: 'http://www.kjit.bme.hu/index.php/hu/',
};

var kl69 = {
	elo: "",
	uto: "",
	nev: "Légi informatika",
	kredit: "3",
	kod: "KOKUA228",
	kovetelmeny: "Vizsga",
	tanszek: "KUKG",
	oktato: "Dr. Markovits-Somogyi Rita",
	tanszekLink: 'http://kukg.bme.hu/index.php/hu/bsc-tantargyak',
};

var kh49 = {
	elo: "",
	uto: "",
	nev: "Vizi utak és műtárgyak",
	kredit: "3",
	kod: "KORHA237",
	kovetelmeny: "Félévközi jegy",
	tanszek: "VRHT",
	oktato: "Dr. Rohács Dániel",
	tanszekLink: 'http://www.vrht.bme.hu/vasut/targyak/',
};

var kh55 = {
	elo: "",
	uto: "",
	nev: "Viziközl. i+k rendszerek I.",
	kredit: "3",
	kod: "KOKAA230",
	kovetelmeny: "Félévközi jegy",
	tanszek: "KJIT",
	oktato: "Dr. Varga István",
	tanszekLink: 'http://www.kjit.bme.hu/index.php/hu/',
};

var kh56 = {
	elo: "",
	uto: "",
	nev: "Hajózási menedzsment",
	kredit: "4",
	kod: "KOKKA264",
	kovetelmeny: "Félévközi jegy",
	tanszek: "KUKG",
	oktato: "Dr. Mészáros Ferenc",
	tanszekLink: 'http://kukg.bme.hu/index.php/hu/bsc-tantargyak',
};

var kh57 = {
	elo: "",
	uto: "",
	nev: "Hajózási üzemtan",
	kredit: "6",
	kod: "KOVRA263",
	kovetelmeny: "Vizsga",
	tanszek: "VRHT",
	oktato: "Dr. Simongáti Győző",
	tanszekLink: 'http://www.vrht.bme.hu/vasut/targyak/Tant-akt.php?Kepzes=BSc.-MSc.-Nev-Suk&Kod=BMEKOVRA263',
};

var kh67 = {
	elo: "",
	uto: "",
	nev: "Integrált áruszáll. rendszerek",
	kredit: "5",
	kod: "KOKKA275",
	kovetelmeny: "Félévközi jegy",
	tanszek: "KUKG",
	oktato: "Dr. Duleba Szabolcs",
	tanszekLink: 'http://kukg.bme.hu/index.php/hu/bsc-tantargyak',
};

var kh68 = {
	elo: "",
	uto: "",
	nev: "Viziközl. i+k rendszerek II.",
	kredit: "4",
	kod: "KOKAA261",
	kovetelmeny: "Vizsga",
	tanszek: "KJIT",
	oktato: "Dr. Varga István",
	tanszekLink: 'http://www.kjit.bme.hu/index.php/hu/',
};

var kh69 = {
	elo: "",
	uto: "",
	nev: "Hajózási informatika",
	kredit: "3",
	kod: "KOKUA236",
	kovetelmeny: "Vizsga",
	tanszek: "KUKG",
	oktato: "Dr. Juhász János",
	tanszekLink: 'http://kukg.bme.hu/index.php/hu/bsc-tantargyak',
};

var l11 = {
	elo: "",
	uto: "21",
	nev: "Matematika A1a",
	kredit: "6",
	kod: "TE90AX00",
	kovetelmeny: "Vizsga",
	tanszek: "Matematika Intézet",
	oktato: "Dr. Petz Dénes",
	tanszekLink: 'http://math.bme.hu/',
	
};

var l12 = {
	elo: "",
	uto: "",
	nev: "Fizika",
	kredit: "3",
	kod: "TE15AX17",
	kovetelmeny: "Vizsga",
	tanszek: "Elméleti Fizika",
	oktato: "Dr. Varga Imre",
	tanszekLink: 'http://dtp.physics.bme.hu/',
	
};

var l13 = {
	elo: "",
	uto: "",
	nev: "Műszaki kémia",
	kredit: "3",
	kod: "VEKTAKO1",
	kovetelmeny: "Vizsga",
	tanszek: 'KKFT',
	oktato: "Dr. Bajnóczy Gábor",
	tanszekLink: 'http://kkft.bme.hu/',
};

var l14 = {
	elo: "",
	uto: "",
	nev: "JKL Rendszerek",
	kredit: "8",
	kod: "KODHA149 ",
	kovetelmeny: "Félévközi jegy ",
	tanszek: "Dékáni",
	oktato: "Dr. Varga István",
	tanszekLink: 'http://kozlekedes.bme.hu/oktatas/jkl-rendszerek/',
	
};

var l15 = {
	elo: "",
	uto: "",
	nev: "Általános járműgéptan",
	kredit: "3",
	kod: "KOVJA112",
	kovetelmeny: "Félévközi jegy",
	tanszek: "VRHT",
	oktato: "Dr. Szabó András",
	tanszekLink: 'http://www.vrht.bme.hu/vasut/targyak/Tant-akt.php?Kepzes=BSc.-MSc.-Nev-Suk&Kod=BMEKOVJA112',
};

var l16 = {
	elo: "",
	uto: "",
	nev: "Programozás",
	kredit: "7",
	kod: "KOKAA146",
	kovetelmeny: "Félévközi jegy",
	tanszek: "KJIT",
	oktato: "Dr. Bécsi Tamás",
	tanszekLink: 'http://www.kjit.bme.hu/index.php/hu/hallgatoknak/bsc-targyak-3/programozas',
};
var l21 = {
	elo: "",
	uto: "",
	nev: "Matematika A2a",
	kredit: "6",
	kod: "TE90AX02",
	kovetelmeny: "Vizsga",
	tanszek: "Matematika Intézet",
	oktato: "Dr. Rónyai Lajos",
	tanszekLink: 'http://math.bme.hu/',
};

var l22 = {
	elo: "",
	uto: "",
	nev: "Anyagismeret",
	kredit: "4",
	kod: "KOJJA106",
	kovetelmeny: "Vizsga",
	tanszek: "GJT",
	oktato: "Dr. Bán Krisztián",
	tanszekLink: 'http://gjt.bme.hu/oktatas/tantargylista/jarmugyartas/bsc',
};

var l23 = {
	elo: "",
	uto: "",
	nev: "Mechanika I",
	kredit: "6",
	kod: "KOJSA141",
	kovetelmeny: "Vizsga",
	tanszek: "JHT",
	oktato: "Dr. Béda Péter ",
	tanszekLink: 'http://www.jht.bme.hu/hun/_okt_bsc_me1_141.html',
};

var l24 = {
	elo: "",
	uto: "",
	nev: "Elektrotechika",
	kredit: "6",
	kod: "KOKAA139",
	kovetelmeny: "Vizsga",
	tanszek: "KJIT",
	oktato: "Dr. Szabó Géza",
	tanszekLink: 'http://www.kjit.bme.hu/index.php/hu/hallgatoknak/bsc-targyak-3/elektrotechnika-elektronika',
};

var l25 = {
	elo: "",
	uto: "",
	nev: "Mikro- és makro ökonómia ",
	kredit: "4",
	kod: "GT30A001",
	kovetelmeny: "Vizsga",
	tanszek: "Közgazdaságtan",
	oktato: "Dr. Meyer Dietmar ",
	tanszekLink: 'http://kgt.bme.hu/cms/index.php?Oktat%C3%A1s___BSc%2FBA',
};

var l26 = {
	elo: "",
	uto: "",
	nev: "Műszaki ábrázolás alapjai",
	kredit: "4",
	kod: "KOJSA147",
	kovetelmeny: "Félévközi jegy",
	tanszek: "JHT",
	oktato: "Dr. Ficzere Péter",
	tanszekLink: 'http://www.jht.bme.hu/hun/_okt_bsc_maa_147.html',
};

var l31 = {
	elo: "",
	uto: "",
	nev: "Matematika A3k",
	kredit: "4",
	kod: "TE90AX53",
	kovetelmeny: "Vizsga",
	tanszek: "Matematika Intézet",
	oktato: "Dr. Nagy Attila",
	tanszekLink: 'http://math.bme.hu/',
};

var l32 = {
	elo: "",
	uto: "",
	nev: "Mechanika 2",
	kredit: "4",
	kod: "KOJSA142",
	kovetelmeny: "Vizsga",
	tanszek: "JHT",
	oktato: "Dr. Béda Péter",
	tanszekLink: 'http://www.jht.bme.hu/hun/_okt_bsc_me2_142.html',
};

var l33 = {
	elo: "",
	uto: "",
	nev: "Menedzsment",
	kredit: "4",
	kod: "KOKGA109",
	kovetelmeny: "vizsga",
	tanszek: "KUKG",
	oktato: "Dr. Kővári Botond",
	tanszekLink: 'http://kukg.bme.hu/index.php/hu/bsc-tantargyak/21-bsc-kozlekedesmernoki-szak/40-menedzsment-es-vallalkozas-gazdasagtan-bmekokga109'
};

var l34 = {
	elo: "",
	uto: "",
	nev: "Közlekedésföldrajz",
	kredit: "3",
	kod: "KOKKA167",
	kovetelmeny: "Félévközi jegy",
	tanszek: "KUKG",
	oktato: "Nagy Zoltán",
	tanszekLink: 'http://kukg.bme.hu/index.php/hu/bsc-tantargyak',
};

var l35 = {
	elo: "",
	uto: "",
	nev: "Anyagtechnológia, igyr.",
	kredit: "4",
	kod: "KOGJA334",
	kovetelmeny: "Félévközi jegy",
	tanszek: "GJT",
	oktato: "Dr. Pál Zoltán",
	tanszekLink: 'http://gjt.bme.hu/',
};

var l36 = {
	elo: "",
	uto: "",
	nev: "Járműelemek",
	kredit: "3",
	kod: "KOJSA166",
	kovetelmeny: "Félévközi jegy",
	tanszek: "JHT",
	oktato: "Dr. Lovas László",
	tanszekLink: 'http://www.jht.bme.hu/hun/_okt_bsc_jel_166.html',
};

var l37 = {
	elo: "",
	uto: "",
	nev: "Logisztikai adatbázis r.",
	kredit: "5",
	kod: "KOALA340",
	kovetelmeny: "Vizsga",
	tanszek: "ALRT",
	oktato: "Dr. Tokodi Jenő",
	tanszekLink: 'https://www.logisztika.bme.hu/hu/hallgatoknak/tananyagok.html',
};

var l38 = {
	elo: "",
	uto: "",
	nev: "Csomagolástechnika",
	kredit: "3",
	kod: "KOKUA620",
	kovetelmeny: "Félévközi jegy",
	tanszek: "ALRT",
	oktato: "Dr. Kovács Gábor",
	tanszekLink: 'https://www.logisztika.bme.hu/hu/hallgatoknak/tananyagok.html',
};

var l41 = {
	elo: "",
	uto: "",
	nev: "Áramlástan",
	kredit: "3",
	kod: "KOVRA145",
	kovetelmeny: "Vizsga",
	tanszek: "VRHT",
	oktato: "Dr. Simongáti Győző",
	tanszekLink: 'http://www.vrht.bme.hu/vasut/targyak/',
};

var l42 = {
	elo: "",
	uto: "",
	nev: "Üzemszervezéstan alapjai",
	kredit: "4",
	kod: "KOALA196",
	kovetelmeny: "Félévközi jegy",
	tanszek: "ALRT",
	oktato: "Dr. Bóna Krisztián",
	tanszekLink: 'https://www.logisztika.bme.hu/hu/hallgatoknak/tananyagok.html',
};

var l43 = {
	elo: "",
	uto: "",
	nev: "Logisztikai menedzsment",
	kredit: "2",
	kod: "KOKKA197",
	kovetelmeny: "Félévközi jegy",
	tanszek: "KUKG",
	oktato: "Nagy Zoltán",
	tanszekLink: 'http://kukg.bme.hu/index.php/hu/bsc-tantargyak',
};

var l44 = {
	elo: "",
	uto: "",
	nev: "Üzleti jog",
	kredit: "2",
	kod: "GT55A001",
	kovetelmeny: "Félévközi jegy",
	tanszek: "Üzleti Jog Tanszék",
	oktato: "Dr. Pázmándi Kinga",
	tanszekLink: 'http://www.law.bme.hu/',
};

var l45 = {
	elo: "",
	uto: "",
	nev: "Logisztikai inf. rendszerek",
	kredit: "5",
	kod: "KOALA333",
	kovetelmeny: "Vizsga",
	tanszek: "ALRT",
	oktato: "Dr. Tokodi Jenő",
	tanszekLink: 'https://www.logisztika.bme.hu/hu/hallgatoknak/tananyagok.html',
};

var l46 = {
	elo: "",
	uto: "",
	nev: "Logisztikai iden. rendszerek",
	kredit: "5",
	kod: "KOALA330",
	kovetelmeny: "Félévközi jegy",
	tanszek: "ALRT",
	oktato: "Gáspár Dániel",
	tanszekLink: 'https://www.logisztika.bme.hu/hu/hallgatoknak/tananyagok.html',
};

var l47 = {
	elo: "",
	uto: "",
	nev: "Szállítási logisztika",
	kredit: "5",
	kod: "KOALA332",
	kovetelmeny: "Vizsga",
	tanszek: "ALRT",
	oktato: "Dr. Kovács Gábor",
	tanszekLink: 'https://www.logisztika.bme.hu/hu/hallgatoknak/tananyagok.html',
};

var l48 = {
	elo: "",
	uto: "",
	nev: "Szállítmányozás alapjai",
	kredit: "4",
	kod: "KOKKA331",
	kovetelmeny: "Vizsga",
	tanszek: "KUKG",
	oktato: "Dr. Mészáros Ferenc",
	tanszekLink: 'http://kukg.bme.hu/index.php/hu/bsc-tantargyak',
};

var l51 = {
	elo: "",
	uto: "",
	nev: "Bevezetés a lean szemléletbe",
	kredit: "3",
	kod: "KOALA198",
	kovetelmeny: "Félévközi jegy",
	tanszek: "ALRT",
	oktato: "Kosztolányi János",
	tanszekLink: 'https://www.logisztika.bme.hu/hu/hallgatoknak/tananyagok.html',
};

var l52 = {
	elo: "",
	uto: "",
	nev: "Munkavédelem",
	kredit: "2",
	kod: "KOEAA111",
	kovetelmeny: "Félévközi jegy",
	tanszek: "ALRT",
	oktato: "Dr. Bohács Gábor",
	tanszekLink: 'https://www.logisztika.bme.hu/hu/hallgatoknak/tananyagok.html',
};

var l53 = {
	elo: "",
	uto: "",
	nev: "Statisztika",
	kredit: "3",
	kod: "KOALA337",
	kovetelmeny: "Vizsga",
	tanszek: "ALRT",
	oktato: "Dr. Bóna Krisztián",
	tanszekLink: 'https://www.logisztika.bme.hu/hu/hallgatoknak/tananyagok.html',
};

var l54 = {
	elo: "",
	uto: "",
	nev: "Irányítástechnika",
	kredit: "3",
	kod: "KOKAA138",
	kovetelmeny: "Vizsga",
	tanszek: "KJIT",
	oktato: "Dr. Bokor József",
	tanszekLink: 'http://www.kjit.bme.hu/index.php/hu/hallgatoknak/bsc-targyak-3/iranyitastechnika',
};

var l55 = {
	elo: "",
	uto: "",
	nev: "Anyagmozgató gépek és e.",
	kredit: "5",
	kod: "KOALA336",
	kovetelmeny: "Félévközi jegy",
	tanszek: "ALRT",
	oktato: "Dr. Bohács Gábor",
	tanszekLink: 'https://www.logisztika.bme.hu/hu/hallgatoknak/tananyagok.html',
};

var l56 = {
	elo: "",
	uto: "",
	nev: "Termelési logisztika",
	kredit: "5",
	kod: "KOALA327",
	kovetelmeny: "Vizsga",
	tanszek: "ALRT",
	oktato: "Dr. Bóna Krisztián",
	tanszekLink: 'https://www.logisztika.bme.hu/hu/hallgatoknak/tananyagok.html',
};

var l57 = {
	elo: "",
	uto: "",
	nev: "Ellátási-elosztási rendszerek",
	kredit: "5",
	kod: "KOALA335",
	kovetelmeny: "Vizsga",
	tanszek: "ALRT",
	oktato: "Dr. Bóna Krisztián",
	tanszekLink: 'https://www.logisztika.bme.hu/hu/hallgatoknak/tananyagok.html',
};

var l61 = {
	elo: "",
	uto: "",
	nev: "Operációkutatás és dönt.",
	kredit: "7",
	kod: "KOALA339",
	kovetelmeny: "Vizsga",
	tanszek: "ALRT",
	oktato: "Dr. Bóna Krisztián",
	tanszekLink: 'https://www.logisztika.bme.hu/hu/hallgatoknak/tananyagok.html',
};

var l62 = {
	elo: "",
	uto: "",
	nev: "Minőségügy",
	kredit: "2",
	kod: "KOGJA148",
	kovetelmeny: "Félévközi jegy",
	tanszek: "GJT",
	oktato: "Dr. Stukovszky Zsolt",
	tanszekLink: 'http://www.gjt.bme.hu/',
};

var l63 = {
	elo: "",
	uto: "",
	nev: "Anyagmozg. és rakt. foly.",
	kredit: "5",
	kod: "KOALA338",
	kovetelmeny: "Vizsga",
	tanszek: "ALRT",
	oktato: "Dr. Bóna Krisztián",
	tanszekLink: 'https://www.logisztika.bme.hu/hu/hallgatoknak/tananyagok.html',
};

var l64 = {
	elo: "",
	uto: "",
	nev: "Logisztikai rendszerek aut.",
	kredit: "5",
	kod: "KOALA341",
	kovetelmeny: "Vizsga",
	tanszek: "ALRT",
	oktato: "Gáspár Dániel",
	tanszekLink: 'https://www.logisztika.bme.hu/hu/hallgatoknak/tananyagok.html'
};

var l65 = {
	elo: "",
	uto: "",
	nev: "Logisztikai projektirányítás",
	kredit: "5",
	kod: "KOALA328",
	kovetelmeny: "Félévközi jegy",
	tanszek: "ALRT",
	oktato: "Antal Norbert",
	tanszekLink: 'https://www.logisztika.bme.hu/hu/hallgatoknak/tananyagok.html'
};

var l71 = {
	elo: "",
	uto: "",
	nev: "Logisztikai projekt",
	kredit: "11",
	kod: "KOALA329",
	kovetelmeny: "Félévközi jegy",
	tanszek: "ALRT",
	oktato: "Antal Norbert",
	tanszekLink: 'https://www.logisztika.bme.hu/hu/hallgatoknak/tananyagok.html'
};
