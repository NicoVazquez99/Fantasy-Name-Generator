// Assign the function to the button click event
document.getElementById("generateFemale").onclick = generate_elf_Name;

// Cutting characters function
function capFirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Randomizer
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

// This function generates names using both "femaleName1" and "femaleName2" and the functions from above
function generate_elf_Name() {
    var femaleName1 = ["Adaia", "Alisaie", "Allisara", "Alengwan", "Alglaranna", "Alachia", "Alysia", "Amberle", "Anethra", "Anwen", "Apolline", "Arathel", "Ariane", "Arianni", "Ariel", "Arwen", "Ashalle", "Ashniel", "Atara", "Ayara", "Brelyna", "Briala", "Celebrían", "Clothild", "Cullich", "Cylia", "Dalish", "Dirael", "Eldyra", "Elanor", "Elenwen", "Elezen", "Ellia", "Elynea", "Éowyn", "Failla", "Faralda", "Fleur", "Freyalise", "Galadriel", "Gheyna", "Jenassa", "Katriel", "Kira", "Laina", "Laniatte", "Lauriel", "Liallan", "Liriel", "Liselle", "Loriel", "Lorian", "Lúthien", "Máire", "Mayael", "Merril", "Miara", "Mihris", "Minaeve", "Nadja", "Niranye", "Nirya", "Raewyn", "Selveni", "Sera", "Shaera", "Siofra", "Taarie", "Tauriel", "Valora", "Valya", "Vanadis", "Vanora", "Velanna", "Ylthin", "Ysayle", "Yvraine", "Zelda"];
    var femaleName2 = ["Aearonian", "Agaraen", "Agarher", "Agarvran", "Aire", "Airendil", "Amamion", "Amdirthor", "Amathal", "Amather", "Amathuilos", "Amatheldir", "Amlugol", "Aessereg", "Aupwe", "Calear", "Caranagar", "Cemno", "Duindaer", "Duirro", "Eilianther", "Gaer", "Galadher", "Gollor", "Gulduron", "Guldur", "Guldurion", "Hithaerben", "Holiilo", "Ingolmondur", "Lar", "Leucandil", "Lanthir", "Loeg", "Lo", "Lumorndaer", "Morguldir", "Morgulon", "Naur", "Neithaor", "Nullion", "Olchanar", "Othanar", "Olerydon", "Ranchon", "Rimdor", "Rodor", "Roher", "Rhovanion", "Rhovanion", "Ruina", "Russarocco", "Sir", "Sirdhemion", "Tawaren", "Tawarenion", "Tawarher", "Tordil", "Uirchanar", "Urendur", "Urucher", "Yr"];

    var Names = Array.from({ length: 5 }, function () {
        var forename = femaleName1[getRandomInt(0, femaleName1.length)];
        var surname = femaleName2[getRandomInt(0, femaleName2.length)];
        return capFirst(forename) + " " + capFirst(surname);
    });

    var femaleNameGenerator = Names.join("<br/><br/>");
    document.getElementById("nameWindow").value = femaleNameGenerator;
}

