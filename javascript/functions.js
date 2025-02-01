//  method 1
//  function add(n1,n2){
//     console.log(n1+n2);
// }
// add(4,7)//for this mathod directly call function like this

function add(n1,n2){
    // let result=n1+n2
    // return result
    return n1+n2
    
}
const result=add(8,8)
console.log("result:",result);

function login(username){
    return `${username} just logged in`
}
console.log(login("tanvi"));//for returned value function must be called under console.log

function loginuser(user){
    if(user==undefined){
        console.log("please enter the username");
    }
}
console.log(loginuser());
//rest operator
function calculatecartprice(...num1){//3 dots called rest operator it binds multiple inputs into single array
    return num1
}
console.log(calculatecartprice(200,400,600))

//objects in function
const user1={
    username:"Tanvi",
    price:500
}
function handleobject(o1){
    console.log(`username is ${o1.username} and price is ${o1.price}`);
}
handleobject(user1)

//array in function
const ar1=[100,200,300,400,500]

function f1(getar1){
    return getar1[3]
}
console.log(f1(ar1));
