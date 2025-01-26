// let arr=[1,3,6,8]
// console.log(arr);

const myArr=new Array(1,2,3,4,5)
console.log(myArr[4]);

//array methods
myArr.push(10) 
myArr.push(8)   //adds element at the last of array
console.log(myArr);
myArr.pop(2)    //removes last element of the array
console.log(myArr);

myArr.unshift(9) //adds element at starting of the array
console.log(myArr);

myArr.shift()
console.log(myArr);//removes the value at starting of array

console.log(myArr.includes(0));//true false o/p whether element is included?
console.log(myArr.indexOf(5));

const newarr=myArr.join() //array to string conversion
console.log(myArr);
console.log(newarr); 
 
//slice,splice
 console.log("original array:",myArr);

 const myn1=myArr.slice(1,3)// returns copy of section of array
 console.log(myn1); //it includes only 1 and 2 not 3 
 console.log("after slice:",myArr);

 const myn2=myArr.splice(1,3)//removes elements from range 1 to 3 it also includes last element
 console.log(myn2);
 console.log("after splice",myArr);
 
 
 


