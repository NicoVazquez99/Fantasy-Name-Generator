document.addEventListener('DOMContentLoaded', function() {
//function runner
document.getElementById("generateDragon").onclick = generateDragonName;

//cutting characters function
function capFirst(string){
    return string.charAt(0).toUpperCase(0) + string.slice(1);
}

//Randomizer
function getRandomInt (min,max){
    return Math.floor(Math.random() * (max-min)) + min;
}
//loop up to ten
function generateDragonName(){
    var dragonName1=["Arman","Falkor","Lockheed","Attor","Maleficent","Chua","Rhaegal","Coatl","Shenron","Dracul","Thorn","Uruloki","Drakon","Viserion","Ehecatl","Aiden","Fafnir","Belindo","Glaurung","Brantley","Herensuge","Brenton","Jormungand","Cadmus","Knucker","Drake","Ormr","Adalinda","Orochi","Aine","Pythagoras","Alina","Pythios","Hyperion","Quetzalcoatl","Brenna","Ryuu","Samael","Chumana","Shesha"];
    var dragonName2=["Darksmoke","Mushu","Diaval","Toothless","Dragonite","Draco","Eborsisk","Smaug","Errol","Elliot","Eustace","Puff","Firnen","Dagahra","Saphira","Apalala","Ghidorah","Apep","Haku","Apophis","Katla","Askook","Leviathan","Astarot","Ladon","Kai","Longwei","Nithe","Nagendra","Ormr","Nidhogg","Pendragon","Nilakanta","Tatsuya","Ophiuchus","Tyson","Ormarr","Xiuhcoatl",]
    
    var names = Array.from({ length: 5}, function(){
        var forename1 = dragonName1[getRandomInt(0, dragonName1.length -1)];
        var forename2 = dragonName2[getRandomInt(0, dragonName2.length -1)];
        var fullName = capFirst(forename1.slice(0, forename1.length / 2)) + forename2.slice(forename2.length / 2).toLowerCase();
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

