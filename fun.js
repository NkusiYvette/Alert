let temperatures;
let sum;
let meanTemp;
function getMeanTemp(){
    sum = 0;
    for(let i =0; i < temperatures.length; i++){
        sum +=temperatures[i];
    }
    meanTemp = sum / temperatures.length;
}

temperatures = [20,5,12,30,56];

getMeanTemp();
console.log(`Mean Temp : ${meanTemp}`);