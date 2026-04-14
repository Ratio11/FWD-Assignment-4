let L =parseInt(prompt("Enter the value for L:"));
let R =parseInt(prompt("Enter the value for R:"));
let K =parseInt(prompt("Enter the value for K:"));
let count =0;
function isprime(num){
    if (num<=1) return false;
    for (let i=2; i<= Math.sqrt(num);i++){
        if (num%i===0) return false;
    }
    return true;
}
for (let x=L;x<R;x++){
    if (x%K===0){
        let sumOfdigits =0;
        let temp =x;
        let containszero =false;
        while (temp>0){
            let digit=temp%10;
            if (digit===0){
                containszero =true;
                break;
            }
            sumOfdigits +=digit;
            temp =Math.floor(temp/10);
        }
        if (!containsZero && isprime(sumOfdigits)){
            count++;
        }
    }
}
alert(count);