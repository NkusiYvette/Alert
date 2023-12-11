let temperatures = [];
let sum;
let numT;
let meanTemp;

function getTemp(){
numT = Number(prompt("How many total temperatures do you want to enter: ", numT));
for (let i = 0; i < numT; i++){
    temperatures[i] = Number(prompt(`Enter Temperature ${i} :`));
}}

function getMeanTemp(){
    sum = 0;
    for(let i = 0; i < temperatures.length; i++){
        sum +=temperatures[i];
    }
    meanTemp = sum / temperatures.length;
}

getTemp();
getMeanTemp();
console.log(`Mean Temp : ${meanTemp}`);