
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
    logo.classList.add("white");
    home.classList.add("white")
    home.classList.remove("pink");
    about.classList.add("white");
    about.classList.remove("pink");
    contact.classList.add("white");
    contact.classList.remove("pink");
    more.classList.add("white");
    more.classList.remove("pink");
} else {
    nav.classList.remove('affix');
    logo.classList.remove("white");
    home.classList.add("pink");
    home.classList.remove("white");
    about.classList.add("pink");
    about.classList.remove("white");
    contact.classList.add("pink");
    contact.classList.remove("white");
    more.classList.add("pink");
    more.classList.remove("white");
    
}
});
