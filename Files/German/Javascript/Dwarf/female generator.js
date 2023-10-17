document.addEventListener('DOMContentLoaded', function() {

//this run the funtion that prints the names

document.getElementById("generateFemale").onclick = generateDwarfName;


//cutting characters function
function capFirst(string){
    return string.charAt(0).toUpperCase(0) + string.slice(1).toLowerCase();
}

//Randomizer
function getRandomInt (min,max){
    return Math.floor(Math.random() * (max-min)) + min;
}

//name list and slicer
function generateDwarfName(){
    var femaleName1 =["Admina", "Afra", "Cosette", "Dellinger", "Demeter", "Dhara", "Dila", "Dovana", "Eartha", "Ela", "Emorette", "Sienna", "Aden", "Bari", "Fiden", "Montana", "Rarona", "Reginn", "Amethyst", "Crystal", "Dis", "Gimli","Giva", "Lana", "Narvi"];
    var femaleName2 = ["Battlehammer", "Bloodcoat", "Bloodforge", "Bloodminer", "Boatmurderer", "Bonetank", "Chainbreaker", "Deepaxe", "Ironbreaker", "Ironhand", "Ironjaws", "Jumpnkill", "Leatheraxe", "Shieldbreaker", "Stoneheart", "Stonesplitter", "Stronginthearm", "Ashbraid", "Blessedgrog", "Bottlefinger", "Bottlefinger", "Buzzbeard", "Copperpots", "Goldtrickle", "Hammerpants", "Nightguard", "Noblemantle", "Silverbeards", "Silverfinger", "Snowmaker", "Surefoot"];
    
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
