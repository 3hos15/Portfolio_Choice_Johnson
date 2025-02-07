console.log("Welcome to my portfolio! :D");

let theButton = document.querySelector("nav button");
let theNav = document.querySelector("body > nav");

theButton.onclick = toggleMenu;

function toggleMenu() {
  theNav.classList.toggle("toonMenu");
  theButton.classList.toggle("toonMenu")
};

const navFilms = document.querySelector("nav ul li:nth-of-type(1) a");
const navEten = document.querySelector("nav ul li:nth-of-type(2) a");
const navInfo = document.querySelector("nav ul li:nth-of-type(3) a");
const navNieuws = document.querySelector("nav ul li:nth-of-type(4) a"); 

navFilms.onclick = function() {
    makeSectionEersteActive();
    toggleMenu();
};

navEten.onclick = function() {
    makeSectionTweedeActive();
    toggleMenu();
};

navInfo.onclick = function() {
    makeSectionVierdeActive();
    toggleMenu();
};

navNieuws.onclick = function() {
    makeSectionDerdeActive();
    toggleMenu();
};

const eersteSection = document.querySelector("section section:nth-of-type(1)");
const tweedeSection = document.querySelector("section section:nth-of-type(2)");
const derdeSection = document.querySelector("section section:nth-of-type(3)");
const vierdeSection = document.querySelector("section section:nth-of-type(4)");

function makeSectionEersteActive() {
	eersteSection.classList.add("active");
	tweedeSection.classList.remove("active");
    derdeSection.classList.remove("active");
    vierdeSection.classList.remove("active");

    navFilms.classList.add("underline")
    navEten.classList.remove("underline") 
    navInfo.classList.remove("underline") 
    navNieuws.classList.remove("underline")  
};

eersteSection.onclick = makeSectionEersteActive;

function makeSectionTweedeActive() {
	tweedeSection.classList.add("active");
	eersteSection.classList.remove("active");
    derdeSection.classList.remove("active");
    vierdeSection.classList.remove("active");

    navFilms.classList.remove("underline")
    navEten.classList.add("underline") 
    navInfo.classList.remove("underline") 
    navNieuws.classList.remove("underline") 
};

tweedeSection.onclick = makeSectionTweedeActive;

function makeSectionDerdeActive() {
    derdeSection.classList.add("active");
    eersteSection.classList.remove("active");
	tweedeSection.classList.remove("active");
    vierdeSection.classList.remove("active");

    navFilms.classList.remove("underline")
    navEten.classList.remove("underline") 
    navInfo.classList.remove("underline") 
    navNieuws.classList.add("underline") 
};

derdeSection.onclick = makeSectionDerdeActive;

function makeSectionVierdeActive() {
    vierdeSection.classList.add("active");  
    eersteSection.classList.remove("active");
	tweedeSection.classList.remove("active");
    derdeSection.classList.remove("active"); 

    navFilms.classList.remove("underline")
    navEten.classList.remove("underline") 
    navInfo.classList.add("underline") 
    navNieuws.classList.remove("underline") 
};

vierdeSection.onclick = makeSectionVierdeActive;


const linksEersteSection = document.querySelectorAll('section section:nth-of-type(1) a')
linksEersteSection.forEach(linkEersteSection =>{
    linkEersteSection.onfocus = makeSectionEersteActive;
});

const linksTweedeSection = document.querySelectorAll('section section:nth-of-type(2) a');
linksTweedeSection.forEach(linkTweedeSection =>{
    linkTweedeSection.onfocus = makeSectionTweedeActive;
});

const linksDerdeSection = document.querySelectorAll('section section:nth-of-type(3) a')
linksDerdeSection.forEach(linkDerdeSection =>{
    linkDerdeSection.onfocus = makeSectionDerdeActive;
});

const linksVierdeSection = document.querySelectorAll('section section:nth-of-type(4) a')
linksVierdeSection.forEach(linkVierdeSection =>{
    linkVierdeSection.onfocus = makeSectionVierdeActive;
});



