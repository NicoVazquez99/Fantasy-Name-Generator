document.addEventListener("DOMContentLoaded", function() {
    // This runs the function that prints the names
    document.getElementById("generateMale").onclick = generateMaleName;
  
    // Cutting characters function
    function capFirst(string) {
      return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    }
  
    // Randomizer
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  
    // Selects a name and a surname and makes a new name
    function generateMaleName() {
      var maleName1 = ["Aelfdene", "Aelfric", "Ailwyn", "Aktaion", "Alberic", "Albion", "Aldon", "Alfrey", "Algar", "Alstin", "Aluin", "Alvar", "Alvin", "Alvy", "Anwel", "Argyle", "Arion", "Avery", "Bailey", "Bairrfhionn", "Balin", "Baron", "Basil", "Benzion", "Bing", "Cinwell", "Claus", "Crispin", "Dairion", "Dearborn", "Derion", "Devion", "Edlin", "Edric", "Eion", "Ellgar", "Elvern", "Elvey", "Elvyn", "Emilion", "Endimion", "Fionan", "Fionnbarr", "Fredo", "Garrett", "Gwydion", "Haldir", "Herodion", "Illarion", "Ingamar", "Inge", "Ingel", "Ingemar", "Kelby", "Kenley", "Kingdon", "Kipling", "Lake", "Leaf", "Legolas", "Meirion", "Melanio", "Merlion", "Noel", "Odion", "River", "Torion", "Travion", "Tyrion", "Waters"];
      var maleName2 = ["Bowie", "Burton", "Connor", "Deckard", "Donovan", "Jackson", "Kirk", "Montgomery", "Mulder", "Murphy", "Roarke", "Serling", "Verne", "Westley"];
  

      var names = Array.from({ length: 5 }, function () {
        var forename1 = maleName1[getRandomInt(0, maleName1.length -1)];
        var forename2 = maleName1[getRandomInt(0, maleName1.length -1)];
        var surname1 = maleName2[getRandomInt(0, maleName2.length -1)];
        var surname2 = maleName2[getRandomInt(0, maleName2.length -1)];

        var newName = capFirst(forename1.slice(0, forename1.length / 2)) + forename2.slice(forename2.length / 2).toLowerCase() + " " + capFirst(surname1.slice(0, surname1.length / 2)) + surname2.slice(surname2.length / 2).toLowerCase();
        return newName;
    });

    var nameList = document.getElementById("nameList");
    nameList.innerHTML = ""; // Clear previous names

    names.forEach(function(name) {
        var li = document.createElement("li");
        li.textContent = name;
        nameList.appendChild(li);
    });
}

});

