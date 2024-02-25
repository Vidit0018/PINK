<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>

window.addEventListener('scroll', function() {
var nav = document.querySelector('.main-nav');
var logo = document.querySelector("nav a");
var home = document.querySelector("#home");
var about = document.querySelector("#about");
var contact = document.querySelector("#contact");
var more = document.querySelector("#more");

if (window.scrollY > 50) {
    nav.classList.add('affix');
    logo.classList.add("white");
    home.classList.add("white");
    about.classList.add("white");
    contact.classList.add("white");
    more.classList.add("white");    
} else {
    nav.classList.remove('affix');
    logo.classList.remove("white");
    home.classList.add("white");
    about.classList.add("white");
    contact.classList.add("white");
    more.classList.add("white");
}
});
