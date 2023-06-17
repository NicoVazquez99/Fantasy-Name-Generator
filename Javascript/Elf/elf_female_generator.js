//this run the funtion that prints the names
document.getElementById("generate_female").onclick = generate_elf_Name;

//cutting characters function
function capFirst(string){
    return string.charAt(0).toUpperCase(0) + string.slice(1);
}

//Randomizer
function getRandomInt (min,max){
    return Math.floor(Math.random() * (max-min)) + min;
}

//this function generates names using both "elfFemName" and "elfLastName" and the functions from above
function generate_elf_Name(){
    var elfFemName1 = ["Adaia","Alisaie","Allisara","Alengwan","Alglaranna","Alachia","Alysia","Amberle","Anethra","Anwen","Apolline","Arathel","Ariane","Arianni","Ariel","Arwen","Ashalle","Ashniel","Atara","Ayara","Brelyna","Briala","Celebrían","Clothild","Cullich","Cylia","Dalish","Dirael","Eldyra","Elanor","Elenwen","Elezen","Ellia","Elynea","Éowyn","Failla","Faralda","Fleur","Freyalise","Galadriel","Gheyna","Jenassa","Katriel","Kira","Laina","Laniatte","Lauriel","Liallan","Liriel","Liselle","Loriel","Lorian","Lúthien","Máire","Mayael","Merril","Miara","Mihris","Minaeve","Nadja","Niranye","Nirya","Raewyn","Selveni","Sera","Shaera","Siofra","Taarie","Tauriel","Valora","Valya","Vanadis","Vanora","Velanna","Ylthin","Ysayle","Yvraine","Zelda"];
    var elfLastName2 =  ["Aearonian"," Agaraen","Agarher","Agarvran","Aire","Airendil","Amamion","Amdirthor","Amathal","Amather","Amathuilos","Amatheldir ","Amlugol","Aessereg","Aupwe","Calear","Caranagar","Cemno","Duindaer","Duirro","Eilianther","Gaer","Galadher","Gollor","Gulduron","Guldur","Guldurion","Hithaerben","Holiilo","Ingolmondur","Lar","Leucandil","Lanthir","Loeg","Lo","Lumorndaer","Morguldir","Morgulon","Naur","Neithaor","Nullion","Olchanar","Othanar","Olerydon","Ranchon","Rimdor","Rodor","Roher","Rhovanion","Rhovanion","Ruina","Russarocco","Sir","Sirdhemion","Tawaren","Tawarenion","Tawarher","Tordil","Uirchanar","Urendur","Urucher","Yr"];
    var i = 0, elfFemNameGenerator ="";
    do
    {
        elfFemNameGenerator += capFirst(elfFemName1[getRandomInt(0, elfFemName1.length)]) + " " + capFirst(elfLastName2[getRandomInt(0,elfLastName2.length)]+'<br/>'+'<br/>');
        i++;
    }
    while(i<5);
    document.getElementById("textArea").innerHTML = elfFemNameGenerator;
}