//prime number divisible by 2?

let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
const isPrime = num => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++)
        if(num % i ) return false; 
    return num %1;
}
let num = readLine().split(" ")
let s = readLine()
console.log(num);

