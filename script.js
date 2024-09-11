let name = prompt("შეიყვანეთ თქვენი სახელი");
let parol = prompt("შეიყვანეთ თქვენი პაროლი");

function Admin(name,parol){
    if(name==="admin" && parol==="1234"){
        console.log("Hallo Admin");
    }
    else{
        console.log("Hallo Guest");
    }
}
Admin(name,parol);