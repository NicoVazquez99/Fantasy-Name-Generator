//this run the funtion that prints the names
document.getElementById("generate_female").onclick = generateDwarfName;


//cutting characters function
function capFirst(string){
    return string.charAt(0).toUpperCase(0) + string.slice(1);
}

//Randomizer
function getRandomInt (min,max){
    return Math.floor(Math.random() * (max-min)) + min;
}


function generateDwarfName(){
    var dwarfFemaleName1 =["Admina", "Afra", "Cosette", "Dellinger", "Demeter", "Dhara", "Dila", "Dovana", "Eartha", "Ela", "Emorette", "Sienna", "Aden", "Bari", "Fiden", "Montana", "Rarona", "Reginn", "Amethyst", "Crystal", "Dis", "Gimli","Giva", "Lana", "Narvi"];
    var dwarflastName2 = ["Battlehammer", "Bloodcoat", "Bloodforge", "Bloodminer", "Boatmurderer", "Bonetank", "Chainbreaker", "Deepaxe", "Ironbreaker", "Ironhand", "Ironjaws", "Jumpnkill", "Leatheraxe", "Shieldbreaker", "Stoneheart", "Stonesplitter", "Stronginthearm", "Ashbraid", "Blessedgrog", "Bottlefinger", "Bottlefinger", "Buzzbeard", "Copperpots", "Goldtrickle", "Hammerpants", "Nightguard", "Noblemantle", "Silverbeards", "Silverfinger", "Snowmaker", "Surefoot"];
    var i = 0, dwarfFemaleNames ="";
    do
    {
        dwarfFemaleNames += capFirst(dwarfFemaleName1[getRandomInt(0, dwarfFemaleName1.length)]) + " " + capFirst(dwarflastName2[getRandomInt(0,dwarflastName2.length)]+ '<br/>'+'<br/>');
        i++;
        
    }
    while(i<5);
    document.getElementById("textArea").innerHTML = dwarfFemaleNames ;
}
