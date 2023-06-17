
//this run the funtion that prints the names
document.getElementById("generate_male").onclick = generateDwarfName2;

//cutting characters function
function capFirst(string){
    return string.charAt(0).toUpperCase(0) + string.slice(1);
}

//Randomizer
function getRandomInt (min,max){
    return Math.floor(Math.random() * (max-min)) + min;
}


function generateDwarfName2(){
    var dwarfMaleName1 =["Alius","Salmumin","Alvíss ","Angrboða","Argos","Berling","Brafraeg","Dunan","Bamur", "Balor", "Dwokhumlin", "Hokul", "Malgon", "Glorgan", "Dilur", "Ralvol", "Dranan", "Reirgami", "Whuzzod", "Dulan", "Gigan", "Dagion", "Malvur", "Hazeal", "Firguc", "Doulgarlig", "Dwomnaed", "Doursum", "Thondin", "Aigror", "Bagan", "Dalir", "Dumion", "Dalozzurum", "Glorifrir", "Radur", "Duvur", "Avion", "Khubrorlug", "Bifurr", "Bláinn", "Bömburr", "Brökk"];
    var dwarflastName2 = ["Battlehammer", "Bloodcoat", "Bloodforge", "Bloodminer", "Boatmurderer", "Bonetank", "Chainbreaker", "Deepaxe", "Ironbreaker", "Ironhand", "Ironjaws", "Jumpnkill", "Leatheraxe", "Shieldbreaker", "Stoneheart", "Stonesplitter", "Stronginthearm", "Ashbraid", "Blessedgrog", "Bottlefinger", "Bottlefinger", "Buzzbeard", "Copperpots", "Goldtrickle", "Hammerpants", "Nightguard", "Noblemantle", "Silverbeards", "Silverfinger", "Snowmaker", "Surefoot"];
    var i = 0, dwarfMaleNames = ""
    do
    {
        dwarfMaleNames += capFirst(dwarfMaleName1[getRandomInt(0, dwarfMaleName1.length + 1)]) + " " + capFirst(dwarflastName2[getRandomInt(0,dwarflastName2.length + 1)]+ '<br/>'+ '<br/>');
        i++;
    }
    while(i<5);
    document.getElementById("textArea").innerHTML = dwarfMaleNames;
}