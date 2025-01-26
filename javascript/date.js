let myDate = new Date()
// console.log(myDate);
// console.log("tanvi");
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(typeof myDate); //object
//  let mycresteddate=new Date(2004,5,18)
//  console.log(mycresteddate.toDateString());
let mycresteddate=new Date("2025-01-26")
console.log(mycresteddate.toLocaleString());

let mytimestamp=Date.now();
console.log(mytimestamp);
console.log(mycresteddate.getTime());
console.log( Math.floor(Date.now()/1000));//for converting in seconds
  
let newDate=new Date()
console.log(newDate.getDay());
console.log(newDate.getMonth()+1);

console.log(newDate.toLocaleString(`default`,{
    weekday:'short' //o/p ->sun,  long=sunday,narrow=s
}));



 
