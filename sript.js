const show = document.getElementById("show");
const name = document.getElementById("name").value;
const opt = document.getElementById("opt").value;
const date = document.getElementById("date").value;
const nameshow = document.getElementById("nameshow").value;
const nubershow = document.getElementById("nubershow").value;
const dateshow = document.getElementById("dateshow").value;
const statusshow = document.getElementById("statusshow").value;

const result = () =>{
    show.innerHTML = `<tbody id="show">${name}</tbody>`
    console.log("hi")
}