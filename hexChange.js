const hex =["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function hexGenerator(){
    let hexNum ="#";
    let randIdx =0;
    while(hexNum.length<7){
        randIdx = getRandomInt(0,16);
        hexNum +=hex[randIdx];
    }
    return hexNum;

}


const root = document.getElementById("root");
root.style.backgroundColor = hexGenerator()