document.addEventListener('DOMContentLoaded', function() {
    // Assign the function to the button click event
    document.getElementById("generateFemale").onclick = generateFemaleName;

    // Cutting characters function
    function capFirst(string) {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    }

    // Randomizer
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    // This function generates names using both "femaleName1" and "femaleName2" and the functions from above
    function generateFemaleName() {
        var femaleName1 = ["Adaia", "Alisaie", "Allisara", "Alengwan", "Alglaranna", "Alachia", "Alysia", "Amberle", "Anethra", "Anwen", "Apolline", "Arathel", "Ariane", "Arianni", "Ariel", "Arwen", "Ashalle", "Ashniel", "Atara", "Ayara", "Brelyna", "Briala", "Celebrían", "Clothild", "Cullich", "Cylia", "Dalish", "Dirael", "Eldyra", "Elanor", "Elenwen", "Elezen", "Ellia", "Elynea", "Éowyn", "Failla", "Faralda", "Fleur", "Freyalise", "Galadriel", "Gheyna", "Jenassa", "Katriel", "Laina", "Laniatte", "Lauriel", "Liallan", "Liriel", "Liselle", "Loriel", "Lorian", "Lúthien", "Máire", "Mayael", "Merril", "Miara", "Mihris", "Minaeve", "Nadja", "Niranye", "Nirya", "Raewyn", "Selveni", "Sera", "Shaera", "Siofra", "Taarie", "Tauriel", "Valora", "Valya", "Vanadis", "Vanora", "Velanna", "Ylthin", "Ysayle", "Yvraine", "Zelda"];
        var femaleName2 = ["Aearonian", "Agaraen", "Agarher", "Agarvran", "Aire", "Airendil", "Amamion", "Amdirthor", "Amathal", "Amather", "Amathuilos", "Amatheldir", "Amlugol", "Aessereg", "Aupwe", "Calear", "Caranagar", "Cemno", "Duindaer", "Duirro", "Eilianther", "Gaer", "Galadher", "Gollor", "Gulduron", "Guldur", "Guldurion", "Hithaerben", "Holiilo", "Ingolmondur", "Lar", "Leucandil", "Lanthir", "Loeg", "Lo", "Lumorndaer", "Morguldir", "Morgulon", "Naur", "Neithaor", "Nullion", "Olchanar", "Othanar", "Olerydon", "Ranchon", "Rimdor", "Rodor", "Roher", "Rhovanion", "Rhovanion", "Ruina", "Russarocco", "Sir", "Sirdhemion", "Tawaren", "Tawarenion", "Tawarher", "Tordil", "Uirchanar", "Urendur", "Urucher", "Yr"];

        var names = Array.from({ length: 5}, function(){
            var forename1 = femaleName1[getRandomInt(0, femaleName1.length -1)];
            var forename2 = femaleName1[getRandomInt(0, femaleName1.length -1)];
            var surname1 = femaleName2[getRandomInt(0, femaleName2.length -1)];
            var surname2 = femaleName2[getRandomInt(0, femaleName2.length -1)];
    
            var fullName = capFirst(forename1.slice(0, forename1.length / 2)) + forename2.slice(forename2.length / 2).toLowerCase() + " " + capFirst(surname1.slice(0, surname1.length / 2)) + surname2.slice(surname2.length / 2).toLocaleLowerCase();
            return fullName;
        });
    
        var nameList = document.getElementById("nameList");
        nameList.innerHTML=""; //clear previous names
    
        names.forEach(function(name){
            var li = document.createElement("li");
            li.textContent = name;
            nameList.appendChild(li);
        })
    }
    })
    