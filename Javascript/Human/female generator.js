document.addEventListener("DOMContentLoaded", function() {
    // This runs the function that prints the names
    document.getElementById("generateFemale").onclick = generateFemaleNames;
  
    // Cutting characters function
    function capFirst(string) {
      return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    }
  
    // Randomizer
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }
  
    function generateFemaleNames() {
      var femaleName1 = ["Amidala", "Aravis", "Arwen", "Arya", "Astoria", "Bellatrix", "Brienne", "Catelyn", "Cersei", "Daenerys", "Elora", "Fleur", "Galadriel", "Gen", "Gilly", "Jadis", "Katniss", "Lavender", "Luna", "Melisandre", "Minerva", "Missandei", "Morla", "Nymphadora", "Nyota", "Olenna", "Ornela", "Osha", "Pansy", "Raziel", "Ripley", "Sansa", "Shae", "Sorsha", "Sybil", "Willow", "Ygritte", "Kinsey"];
      var femaleName2 = ["Amidala", "Aravis", "Arwen", "Arya", "Astoria", "Bellatrix", "Brienne", "Catelyn", "Cersei", "Daenerys", "Elora", "Fleur", "Galadriel", "Gen", "Gilly", "Jadis", "Katniss", "Lavender", "Luna", "Melisandre", "Minerva", "Missandei", "Morla", "Nymphadora", "Nyota", "Olenna", "Ornela", "Osha", "Pansy", "Raziel", "Ripley", "Sansa", "Shae", "Sorsha", "Sybil", "Willow", "Ygritte", "Kinsey"];
  
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
