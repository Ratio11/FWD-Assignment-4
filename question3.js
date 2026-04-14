const n =parseInt(prompt("Enter N:"));
const k =parseInt(prompt("Enter K:"));
let result=-1;
for (let x=0;x<=10000;x++) {
    const sum=n+x;
    const strsum=sum.toString();
    const reversedsum=strsum.split('').reverse().join('');
    if (strsum ===reversedsum && sum%k=== 0) {
        result = x;
        break;
    }
}
alert(result);