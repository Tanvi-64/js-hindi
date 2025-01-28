const Jsuser = {
    name: "tanvi",
    age: 20,
    email: "tanvikumbhar64@gmail.com"
}
console.log(Jsuser.email);
Object.freeze(Jsuser)
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