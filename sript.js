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
  show.innerHTML += `<td>${num++}</td>
    <td>${Name}</td>
    <td>${option}</td>
    <td>${dates}</td>`;

  const student = {
    name: Name,
    status: option,
    date: dates,
  };

  arr.push(student);
  localStorage.setItem("arr", JSON.stringify(arr));

};


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

 let searchingFunction = () => {
  let name = document.querySelector('#searchName');
  let date = document.querySelector('#searhDate');

  let arr = JSON.parse(localStorage.getItem("arr")) || [];
  
  if(name.value){
    let filterArrByName = arr.filter((item) => item.name == name.value);
    filterArrByName.forEach((student, index) => {
      show.innerHTML  = `<tr>
        <td>${index + 1}</td>
        <td>${student.name}</td>
        <td>${student.status}</td>
        <td>${student.date}</td>
      </tr>`;
    });
    
  }else if(date.value){
    let filterArrBtDate = arr.filter((item) => item.date == date.value);
    show.innerHTML = ``;
    filterArrBtDate.forEach((student, index) => {
      show.innerHTML += `<tr>
        <td>${index + 1}</td>
        <td>${student.name}</td>
        <td>${student.status}</td>
        <td>${student.date}</td>
      </tr>`;
    });
  
  }else if(name.value && date.value){
    let filterArrByNameAndDate = arr.filter((item) => (item.name == name.value && item.date == date.value));
    filterArrByNameAndDate.forEach((student, index) => {
      show.innerHTML = `<tr>
        <td>${index + 1}</td>
        <td>${student.name}</td>
        <td>${student.status}</td>
        <td>${student.date}</td>
      </tr>`;
    });
  }
  
  name.value = "";
  date.value= "";
 }