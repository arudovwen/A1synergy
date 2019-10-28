var time = document.getElementById("time");

let date = new Date();

let year = date.getFullYear();
time.innerHTML = year;
console.log(year);