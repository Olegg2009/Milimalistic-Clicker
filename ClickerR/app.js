let totalclicks = 0;
let clicks = 0;
let power = 1;
let isBought1 = false;
let isBought2 = false;
let isBought3 = false;
let isBought4 = false;

function clicker() {
    clicks += power;
    totalclicks++;
    console.log(clicks) 
    document.getElementById('count').innerText = clicks;
}
function upgrade1() {
    if(clicks > 999 && isBought1 == false){
        power = 10;
        isBought1 = true;  
        clicks -= 1000; 
        document.getElementById('count').innerText = clicks;
        document.getElementById('upgrade1').style.backgroundColor = " rgb(160, 160, 160)";
    }
}
function upgrade2() {
    if(clicks > 19999 && isBought2 == false){
        power = 200;
        isBought2 = true;  
        clicks -= 20000; 
        document.getElementById('count').innerText = clicks;
        document.getElementById('upgrade2').style.backgroundColor = " rgb(160, 160, 160)";
    }
}
function upgrade3() {
    if(clicks > 399999 && isBought3 == false){
        power = 400;
        isBought3 = true;  
        clicks -= 400000; 
        document.getElementById('count').innerText = clicks;
        document.getElementById('upgrade3').style.backgroundColor = " rgb(160, 160, 160)";
    }
}
function upgrade4() {
    if(clicks > 999999 && isBought4 == false){
        power = 400;
        isBought4 = true;  
        clicks -= 1000000; 
        document.getElementById('count').innerText = clicks;
        document.getElementById('upgrade').style.backgroundColor = " rgb(160, 160, 160)";
    }
}

