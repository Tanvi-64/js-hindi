if(true){//local/block scope
    let a=10
    const b=20
    var c=30 

}
//console.log(a);
//console.log(b);
//console.log(c);//golbal scope

function one(){
    const username="Tanvi"

    function two(){
        const id=65
        console.log(username);//here global variables can access locally
    }
    console.log(id);//local variables can't access outside
    
    two()
}
one()
