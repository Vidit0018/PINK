
window.addEventListener('scroll', function() {
var nav = document.querySelector('.main-nav');
var logo = document.querySelector("nav a");

const links = document.querySelectorAll(".nav-item");
var home =document.getElementById('home');
var about = document.getElementById('about');
var contact = document.getElementById("contact");
var more = document.getElementById("more");

if (window.scrollY > 50) {
    nav.classList.add('affix');
} else {
    nav.classList.remove('affix');
}
});
