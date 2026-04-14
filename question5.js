const n =parseInt(prompt("Enter N:"));
const seed =parseInt(prompt("Enter seed:"));
const skipdivisor=seed+2;
let currentSum=0;
let m=0;
while (currentSum<n) {
    m++;
    if (m%skipdivisor !==0) {
        currentSum +=m;
    }
}
alert(`m:${m}, Sum:${currentSum}`);