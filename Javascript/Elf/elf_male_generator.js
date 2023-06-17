//this run the funtion that prints the names
document.getElementById("generate_male").onclick = generate_elf_name;

//cutting characters function
function capFirst(string){
    return string.charAt(0).toUpperCase(1) + string.slice(1);
}

//Randomizer
function getRandomInt (min,max){
    return Math.floor(Math.random() * (max-min)) + min;
}

//selecs a name and a surname and makes a new name
function generate_elf_name(){
    var elfMaleName1 = ["Aelfdene","Aelfric", "Ailwyn", "Aktaion", "Alberic", "Albion", "Aldon", "Alfrey", "Algar", "Alstin", "Aluin", "Alvar", "Alvin", "Alvy", "Anwel", "Argyle", "Arion", "Avery", "Bailey", "Bairrfhionn", "Balin", "Baron", "Basil", "Benzion", "Bing", "Cinwell", "Claus", "Crispin", "Dairion", "Dearborn", "Derion", "Devion", "Edlin", "Edric", "Eion", "Ellgar", "Elvern", "Elvey", "Elvyn", "Emilion", "Endimion", "Fionan", "Fionnbarr", "Fredo", "Garrett", "Gwydion", "Haldir", "Herodion", "Illarion", "Ingamar", "Inge", "Ingel", "Ingemar", "Kelby", "Kenley", "Kingdon", "Kipling", "Lake", "Leaf", "Legolas", "Meirion", "Melanio", "Merlion", "Noel", "Odion", "River", "Torion", "Travion", "Tyrion", "Waters"];
    var elfLastName2 = ["Aearonian","Agaraen","Agarher","Agarvran","Aire","Airendil","Amamion","Amdirthor","Amathal","Amather","Amathuilos","Amatheldir","Amlugol","Aessereg","Aupwe","Calear","Caranagar","Cemno","Duindaer","Duirro","Eilianther","Gaer","Galadher","Gollor","Gulduron","Guldur","Guldurion","Hithaerben","Holiilo","Ingolmondur","Lar","Leucandil","Lanthir","Loeg","Lo","Lumorndaer","Morguldir","Morgulon","Naur","Neithaor","Nullion","Olchanar","Othanar","Olerydon","Ranchon","Rimdor","Rodor","Roher","Rhovanion","Ruina","Russarocco","Sir","Sirdhemion","Tawaren","Tawarenion","Tawarher","Tordil","Uirchanar","Urendur","Urucher","Yr"];
    var i = 0, elfMaleNameGenerator ="";
    do
    {
        elfMaleNameGenerator += capFirst(elfMaleName1[getRandomInt(0, elfMaleName1.length)]) + " " + capFirst(elfLastName2[getRandomInt(0,elfLastName2.length)]+'<br/>'+'<br/>');
        i++;
    }
    while(i<5);
    document.getElementById("textArea").innerHTML = elfMaleNameGenerator;
}
