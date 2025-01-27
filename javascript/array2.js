//methods for concatenation of strings

const ar1=["tanvi","pryanka","vedika"]
const ar2=[5,8,9]

// ar1.push(ar2)  //does not combines the two array as a single array
// console.log(ar1);

const ar3=ar1.concat(ar2)//combines the two array as a single array
console.log(ar3);

const ar4=[...ar1,...ar2]//spreading for merging arrays
console.log(ar4);

const array_new=[1,2,3,[4,5,6],7,[6,7,[9,10]]]
//converts multiple arrays included in one array as elements of single array

const array_new1=array_new.flat(Infinity)
console.log(array_new1);

console.log(Array.from("Tanvi"))//string to array
console.log(Array.isArray("kumbhar"))//tells array or not

let s1=100
let s2=200
let s3=300

console.log(Array.of(s1,s2,s3))


