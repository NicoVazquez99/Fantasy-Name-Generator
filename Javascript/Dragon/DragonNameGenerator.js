//function runner
document.getElementById("generate_dragon").onclick = generateDragonName;

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
    var dragonName1=["Arman","Falkor","Dagahra","Saphira","Darksmoke","Mushu","Diaval","Toothless","Dragonite","Draco","Eborsisk","Smaug","Errol","Elliot","Eustace","Puff","Firnen","Apalala","Ghidorah","Apep","Haku","Apophis","Katla","Askook","Leviathan","Astarot","Lockheed","Attor","Maleficent","Chua","Rhaegal","Coatl","Shenron","Dracul","Thorn","Uruloki","Drakon","Viserion","Ehecatl","Aiden","Fafnir","Belindo","Glaurung","Brantley","Herensuge","Brenton","Jormungand","Cadmus","Knucker","Drake","Ladon","Kai","Longwei","Nithe","Nagendra","Ormr","Nidhogg","Pendragon","Nilakanta","Tatsuya","Ophiuchus","Tyson","Ormarr","Xiuhcoatl","Ormr","Adalinda","Orochi","Aine","Pythagoras","Alina","Pythios","Hyperion","Quetzalcoatl","Brenna","Ryuu","Samael","Chumana","Shesha"];
    var i = 0 , dragonName2 ='';
    do 
    {
       dragonName2 += capFirst(dragonName1[getRandomInt(0, dragonName1.length)] + '<br/>'+'<br/>');
        i++;
    } 
    while(i<5);
    
    document.getElementById("textArea").innerHTML = dragonName2 ;
    
}
