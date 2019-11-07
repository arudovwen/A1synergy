var time = document.getElementById("time");
var offers = document.getElementById("offer");
var about = document.getElementById('about')
var services = document.getElementById('service')
var scrollU = document.getElementById("scrollUp");


offers.style.display = "none";
about.style.display = "none";
services.style.display = "none";
scrollU.style.display = "none";

let date = new Date();

let year = date.getFullYear();
time.innerHTML = year;

var contentShow = () => {
  
  if (window.scrollY > window.innerHeight * 0.3) {
    offers.style.display = "flex";
  }

  if (window.scrollY > window.innerHeight * .8) {
    about.style.display = "flex";
  }
  if (window.scrollY > window.innerHeight * 1.8) {
    services.style.display = "flex";
  }
 
};

const scrollUp = () => {
 
  contentShow()
  
  if (window.scrollY > window.innerHeight * .6) {
  
    scrollU.style.display = "block";
  } else {
    scrollU.style.display = "none";
  }
};
document.getElementById("scrollUp").addEventListener("click", () => {
  window.scrollTo(0, 0);
});

window.addEventListener('scroll', scrollUp)

document.getElementById('angle').addEventListener('click',()=>{
  window.scrollTo(0, window.innerHeight *.9);
})