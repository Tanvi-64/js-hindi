const Jsuser = {
    name: "tanvi",
    age: 20,
    email: "tanvikumbhar64@gmail.com"
}
console.log(Jsuser.email);
Object.freeze(Jsuser)
console.log(Jsuser["email"]);

