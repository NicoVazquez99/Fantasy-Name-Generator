//this run the funtion that prints the names
document.getElementById("generate_male").onclick = generateHumanName2;

//cutting characters function
function capFirst(string){
    return string.charAt(0).toUpperCase(0) + string.slice(1);
}

//Randomizer
function getRandomInt (min,max){
    return Math.floor(Math.random() * (max-min)) + min;
}


function generateHumanName2(){
    var humanMaleName1 =["Abraham","Albus","Ambrose"," Alex","Arthur","Blade","Carter","Chase","Davy","Drax","Emmett","Garrick","Harrison","Ian","Jack","Jamie","Jareth","Jason","Jon","Lando","Leonard","Lex","Luke","Mace","Malcolm","Max","Nicholas","Peter","Sam","Tyrion"];
    var humanlastName2 = ["Bowie","Burton","Connor","Deckard","Donovan","Jackson","Kirk","Montgomery","Mulder","Murphy","Roarke","Serling","Verne","Westley"];
    var i = 0, humanMaleNames = ""
    do
    {
        humanMaleNames += capFirst(humanMaleName1[getRandomInt(0, humanMaleName1.length)]) + " " + capFirst(humanlastName2[getRandomInt(0,humanlastName2.length)]+ '<br/>'+'<br/>');
        i++;
    }
    while(i<5);
    document.getElementById("textArea").innerHTML = humanMaleNames;
}