const username = document.getElementById("username");
const password = document.getElementById("password");
const logusername = document.getElementById("logusername");
const logpassword = document.getElementById("logpassword");
const btn = document.getElementById("btn")


let arrr = JSON.parse(localStorage.getItem("signdata")) || [];
    
const log = () => {
    let save = {
        signname : username.value,
        signpass : password.value
    };
    arrr.push(save);
    localStorage.setItem("signdata", JSON.stringify(arrr));
}
const sig = () => {
    let logname = logusername.value;
    let logpass = logpassword.value;

    arrr = JSON.parse(localStorage.getItem("signdata")) || [];
    
    let matchuser = arrr.filter(user=>user.signname == logname && user.signpass == logpass)
    console.log(matchuser)
    if(matchuser.length > 0){
        window.location.href = "../main.html";
    }else{
        alert("wrong")
    }
}
