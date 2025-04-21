const show = document.getElementById("show");
const names = document.getElementById("names");
const opt = document.getElementById("opt");
const date = document.getElementById("date");
const nameshow = document.getElementById("nameshow");
const numbershow = document.getElementById("numbershow");
const dateshow = document.getElementById("dateshow");
const statusshow = document.getElementById("statusshow");

let num = 1;
let arr = JSON.parse(localStorage.getItem("arr")) || [];

const result = () => {
  let Name = names.value;
  let option = opt.value;
  let dates = date.value;
  show.innerHTML += ` <td>${num}</td>
    <td>${Name}</td>
    <td>${option}</td>
    <td>${dates}</td>`;

  // set item
  localStorage.setItem("name", Name);
  localStorage.setItem("status", option);
  localStorage.setItem("date", dates);

  const student = {
    name: Name,
    status: option,
    date: dates,
  };

  arr.push(student);
  localStorage.setItem("arr", JSON.stringify(arr));

};
console.log(arr);

window.onload = () => {
    arr.forEach((student, index) => {
      show.innerHTML += `<tr>
        <td>${index + 1}</td>
        <td>${student.name}</td>
        <td>${student.status}</td>
        <td>${student.date}</td>
      </tr>`;
    });
    num = arr.length + 1; 
  };
  
