const n =parseInt(prompt("Enter N:"));
const seed =parseInt(prompt("Enter seed:"));
let result =n;

for (let i = 0; i < 3; i++) {
    if (result %2===0) {
        result =(result/ 2)+seed;
    } else {
        result =(result*3)-seed;
    }
}
const isthreedigits =result >=100 && result <=999;
const middledigit = Math.floor(result / 10)%10;
if (isthreedigits &&middledigit=== seed) {
    alert(`YES,${result}`);
} else {
    alert(`NO,${result}`);
}