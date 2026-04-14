const base =parseFloat(prompt("Enter base fare:"));
const distance =parseFloat(prompt("Enter distance:"));
const minutesLate =parseInt(prompt("Enter minutes late:"));
const seed =parseInt(prompt("Enter seed value:"));
let fare =base+(7 *distance);
if (minutesLate >15){
    fare +=20;
}
if (distance>10){
    fare +=(0.10*fare);
}
if (seed %2!==0){
    fare -=seed;
} else{
    fare +=seed;
}
const finalFare =Math.ceil(fare/5)*5;

alert(finalFare);