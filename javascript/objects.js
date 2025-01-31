const Jsuser = {
    name: "tanvi",
    age: 20,
    email: "tanvikumbhar64@gmail.com"
}
console.log(Jsuser.email);
console.log(Jsuser["email"]);

const user1={}

user1.id="123tanvi"
user1.name="tanvi"
user1.isloggedin=false

//console.log(user1);

const user2={//nested objects
    email:"tanvik64@gmail.com",
    fullname:{
        firstname:"tanvik",
        lastname:"kumbhar"
    }
}
console.log(user2.fullname.firstname);//accessing nested objects
const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
const obj3={5:"e",6:"f"}

const obj4=Object.assign({},obj1,obj2,obj3)
console.log(obj4);

console.log(Object.keys(user1));
console.log(Object.values(user1));
console.log(Object.entries(user1));

console.log(user1.hasOwnProperty('isloggedin'));

const course={
    coursename:"CSE",
    price:10000,
    instructor:"Tanvi"
}
const{coursename: n}=course// coursename is replaced by n 
console.log(n);

//JSON 
//JSON (JavaScript Object Notation) is a lightweight data interchange format that's easy for humans to read and write, and easy for machines to parse and generate. It's often used to transmit data between a server and a web application.
{
    coursename:"CSE",
    price:10000,
    instructor:"Tanvi"
}
