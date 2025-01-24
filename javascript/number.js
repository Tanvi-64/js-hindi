//numbers
const score=400
 console.log(score);

 const balance=new Number(100)
 console.log(balance);

 console.log(balance.toString().length);
 console.log(balance.toFixed(5));
  
 const number2=145.49
 console.log(number2.toPrecision(3))

 const number3=100000
 console.log(number3.toLocaleString('en-IN'));

 //maths
 console.log(Math);
 console.log("positive of no.::",Math.abs(-4));
 console.log("round figure:",Math.round(7,9));
 console.log(Math.ceil(4,2));
 console.log(Math.floor(5,9));
 console.log(Math.min(6,8,2,1));
 console.log(Math.max(6,9,0,3));

 console.log(Math.random());
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);

const min=10;
const max=20;

console.log(Math.floor(Math.random()*(max-min+1))+min);

 