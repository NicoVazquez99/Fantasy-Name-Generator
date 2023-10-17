document.addEventListener('DOMContentLoaded', function() {

//this run the funtion that prints the names
document.getElementById("generateMale").onclick = generateDwarfName2;

//cutting characters function
function capFirst(string){
    return string.charAt(0).toUpperCase(0) + string.slice(1);
}

//Randomizer
function getRandomInt (min,max){
    return Math.floor(Math.random() * (max-min)) + min;
}


function generateDwarfName2(){
    var maleName1 =["Alius","Salmumin","Alvíss ","Angrboða","Argos","Berling","Brafraeg","Dunan","Bamur", "Balor", "Dwokhumlin", "Hokul", "Malgon", "Glorgan", "Dilur", "Ralvol", "Dranan", "Reirgami", "Whuzzod", "Dulan", "Gigan", "Dagion", "Malvur", "Hazeal", "Firguc", "Doulgarlig", "Dwomnaed", "Doursum", "Thondin", "Aigror", "Bagan", "Dalir", "Dumion", "Dalozzurum", "Glorifrir", "Radur", "Duvur", "Avion", "Khubrorlug", "Bifurr", "Bláinn", "Bömburr", "Brökk"];
    var maleName2 = ["Battlehammer", "Bloodcoat", "Bloodforge", "Bloodminer", "Boatmurderer", "Bonetank", "Chainbreaker", "Deepaxe", "Ironbreaker", "Ironhand", "Ironjaws", "Jumpnkill", "Leatheraxe", "Shieldbreaker", "Stoneheart", "Stonesplitter", "Stronginthearm", "Ashbraid", "Blessedgrog", "Bottlefinger", "Bottlefinger", "Buzzbeard", "Copperpots", "Goldtrickle", "Hammerpants", "Nightguard", "Noblemantle", "Silverbeards", "Silverfinger", "Snowmaker", "Surefoot"];
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

