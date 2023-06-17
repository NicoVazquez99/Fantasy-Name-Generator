//function runner
document.getElementById("generate_female").onclick = generateFemaleVampName;

//cutting characters function
function capFirst(string){
    return string.charAt(0).toUpperCase(0) + string.slice(1);
}

//Randomizer
function getRandomInt (min,max){
    return Math.floor(Math.random() * (max-min)) + min;
}
//loop up to ten
function generateFemaleVampName(){
    var vampFemaleName1=["Adira","Aerith","Ailith","Aithne","Aldith","Aletia","Alice","Almeta","Almirah","Amadora","Amare","Amber","Ambrosia","Ambrosine","Anniceta","Anahi","Ardith","Aspasia","Atanasya","Aurora","Bella","Blythe","Callidora","Casimira","Cherith","Cithara","Claire","Clareta","Claudia","Coleta","Constance","Crimson","Cvetana","Daianira","Dawn","Diyanira","Drusilla","Edra","Eilith","Elisaveta","Elizabeth","Elvira","Erith","Esme","Eztli","Hazel","Isolde","Iveta","Jade","Jane","Jaquith","Kajetana","Kasimira","Katherine","Layla","Lenora","Lilith","Lily","Lindira","Lucinda","Midnight","Night","Nitya","Ofira","Omeira","Ophira","Palmira","Palmira","Perenna","Raven","Ravena","Reneta","Rosalie","Safira","Samirah","Scarlett","Saphira","Subira","Tahira","Tansey","Thana","Victoria","Violet","Zorina"];
    var i = 0 , vampName2 ='';
    do 
    {
       vampName2 += capFirst(vampFemaleName1[getRandomInt(0, vampFemaleName1.length)] + '<br/>'+'<br/>');
        i++;
    } 
    while(i<5);
    
    document.getElementById("textArea").innerHTML = vampName2 ;
    
}
