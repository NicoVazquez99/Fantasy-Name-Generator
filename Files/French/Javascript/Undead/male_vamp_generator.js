//function runner
document.getElementById("generate_male").onclick = generateMaleVampName;

//cutting characters function
function capFirst(string){
    return string.charAt(0).toUpperCase(0) + string.slice(1);
}

//Randomizer
function getRandomInt (min,max){
    return Math.floor(Math.random() * (max-min)) + min;
}
//loop up to ten
function generateMaleVampName(){
    var vampMaleName1=["Adelrick","Aethelfrith","Aethelred","Ahreddan","Ailfred","Alarick","Aleister","Alfredas","Ambrose","Ambrosius","Ambroz","Andre","Arius","Atanasius","Athan","Atherton","Augustus","Balthazar","Barnabas","Baylor","Benjen","Brickell","Bridger","Caith","Caius","Carlisle","Carrick","Ceolfrith","Cepheus","Ceredig","Conrad","Cornelius","Courtland","Crowley","Crowell","Demetrius","Dmitri","Edgar","Edward","Eilam","Eilif","Eldred","Eleazer","Elfred","Elvin","Emmett","Emrys","Everett","Ferdinand","Frederick","Heathcliff","Henrick","Hollister","Jasper","Kadrick","Khaldun","Klaus","Klyde","Lannister","Louis","Mortimer","Nikolaj","Norval","Redford","Rufus","Spike","Thanasis","Thano","Tristram","Vlad","Vladamir","Vladimir","Vladislav","Willfred"];
    var i = 0 , vampName2 ='';
    do 
    {
       vampName2 += capFirst(vampMaleName1[getRandomInt(0, vampMaleName1.length)] + '<br/>'+'<br/>');
        i++;
    } 
    while(i<5);
    
    document.getElementById("textArea").innerHTML = vampName2 ;
    
}
