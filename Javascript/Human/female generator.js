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
  
      var names = [];
  
      while (names.length < 5) {
        var forename1 = femaleName1[getRandomInt(0, femaleName1.length)];
        var forename2 = femaleName1[getRandomInt(0, femaleName1.length)];
        var surname1 = femaleName2[getRandomInt(0, femaleName2.length)];
        var surname2 = femaleName2[getRandomInt(0, femaleName2.length)];
  
        var firstName = capFirst(forename1.slice(0, Math.floor(forename1.length / 2))) +
          forename2.slice(Math.floor(forename2.length / 2)).toLowerCase();
        var lastName = capFirst(surname1.slice(0, Math.floor(surname1.length / 2))) +
          surname2.slice(Math.floor(surname2.length / 2)).toLowerCase();
  
        var fullName = firstName + " " + lastName;
  
        if (!names.includes(fullName)) {
          names.push(fullName);
        }
      }
  
      // Mezclar el orden de los nombres
      names.sort(function() {
        return Math.random() - 0.5;
      });
  
      var nameList = document.getElementById("nameList");
      nameList.innerHTML = ""; // Clear previous names
  
      names.forEach(function(name) {
        var listItem = document.createElement("li");
        listItem.textContent = name;
        nameList.appendChild(listItem);
      });
    }
  });
  