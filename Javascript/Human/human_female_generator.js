//this run the funtion that prints the names
document.getElementById("generate_female").onclick = generateHumanName2;

//cutting characters function
function capFirst(string){
    return string.charAt(0).toUpperCase(0) + string.slice(1);
}

//Randomizer
function getRandomInt (min,max){
    return Math.floor(Math.random() * (max-min)) + min;
}


function generateHumanName2(){
    var humanFemaleName1 =["Amidala","Aravis","Arwen","Arya","Astoria","Bellatrix","Brienne","Catelyn","Cersei","Daenerys","Elora","Fleur","Galadriel","Gen","Gilly","Jadis","Katniss","Lavender","Luna","Melisandre","Minerva","Missandei","Morla","Nymphadora","Nyota","Olenna","Ornela","Osha","Pansy","Raziel","Ripley","Sansa","Shae","Sorsha","Sybil","Willow","Ygritte","Kinsey"];
    var humanlastName2 = ["Amidala","Aravis","Arwen","Arya","Astoria","Bellatrix","Brienne","Catelyn","Cersei","Daenerys","Elora","Fleur","Galadriel","Gen","Gilly","Jadis","Katniss","Lavender","Luna","Melisandre","Minerva","Missandei","Morla","Nymphadora","Nyota","Olenna","Ornela","Osha","Pansy","Raziel","Ripley","Sansa","Shae","Sorsha","Sybil","Willow","Ygritte","Kinsey"];
    var i = 0, humanFemaleNames = ""
    do
    {
        humanFemaleNames += capFirst(humanFemaleName1[getRandomInt(0, humanFemaleName1.length)]) + " " + capFirst(humanlastName2[getRandomInt(0,humanlastName2.length)]+ '<br/>'+'<br/>');
        i++;
    }
    while(i<5);
    document.getElementById("textArea").innerHTML = humanFemaleNames;
}