document.addEventListener("DOMContentLoaded", function() {
    // This runs the function that prints the names
    document.getElementById("generateMale").onclick = generateMaleName;

    // Cutting characters function
    function capFirst(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    // Randomizer
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    // Selects a name and a surname and makes a new name
    function generateMaleName() {
        var maleName1 = ["Aelfdene", "Aelfric", "Ailwyn", "Aktaion", "Alberic", "Albion", "Aldon", "Alfrey", "Algar", "Alstin", "Aluin", "Alvar", "Alvin", "Alvy", "Anwel", "Argyle", "Arion", "Avery", "Bailey", "Bairrfhionn", "Balin", "Baron", "Basil", "Benzion", "Bing", "Cinwell", "Claus", "Crispin", "Dairion", "Dearborn", "Derion", "Devion", "Edlin", "Edric", "Eion", "Ellgar", "Elvern", "Elvey", "Elvyn", "Emilion", "Endimion", "Fionan", "Fionnbarr", "Fredo", "Garrett", "Gwydion", "Haldir", "Herodion", "Illarion", "Ingamar", "Inge", "Ingel", "Ingemar", "Kelby", "Kenley", "Kingdon", "Kipling", "Lake", "Leaf", "Legolas", "Meirion", "Melanio", "Merlion", "Noel", "Odion", "River", "Torion", "Travion", "Tyrion", "Waters"];
        var maleName2 = ["Aearonian", "Agaraen", "Agarher", "Agarvran", "Aire", "Airendil", "Amamion", "Amdirthor", "Amathal", "Amather", "Amathuilos", "Amatheldir", "Amlugol", "Aessereg", "Aupwe", "Calear", "Caranagar", "Cemno", "Duindaer", "Duirro", "Eilianther", "Gaer", "Galadher", "Gollor", "Gulduron", "Guldur", "Guldurion", "Hithaerben", "Holiilo", "Ingolmondur", "Lar", "Leucandil", "Lanthir", "Loeg", "Lo", "Lumorndaer", "Morguldir", "Morgulon", "Naur", "Neithaor", "Nullion", "Olchanar", "Othanar", "Olerydon", "Ranchon", "Rimdor", "Rodor", "Roher", "Rhovanion", "Ruina", "Russarocco", "Sir", "Sirdhemion", "Tawaren", "Tawarenion", "Tawarher", "Tordil", "Uirchanar", "Urendur", "Urucher", "Yr"];

        var Names = Array.from({ length: 5 }, function () {
            var forename = maleName1[getRandomInt(0, maleName1.length)];
            var surname = maleName2[getRandomInt(0, maleName2.length)];
            return capFirst(forename) + " " + capFirst(surname);
        });

        var nameList = document.getElementById("nameList");
        nameList.innerHTML = ""; // Clear previous names

        Names.forEach(function(name) {
            var li = document.createElement("li");
            li.textContent = name;
            nameList.appendChild(li);
        });
    }
});
