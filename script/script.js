console.log("Welcome to my portfolio! :D");

let theButton = document.querySelector("nav button");
let theNav = document.querySelector("body > nav");

theButton.onclick = toggleMenu;

function toggleMenu() {
  theNav.classList.toggle("toonMenu");
  theButton.classList.toggle("toonMenu")
};

const navhellothere = document.querySelector("nav ul li:nth-of-type(1) a");
const navphotography = document.querySelector("nav ul li:nth-of-type(2) a");
const navaboutme = document.querySelector("nav ul li:nth-of-type(3) a");
const navmywork = document.querySelector("nav ul li:nth-of-type(4) a"); 

navhellothere.onclick = function() {
    makeSectionEersteActive();
    toggleMenu();
};

navphotography.onclick = function() {
    makeSectionTweedeActive();
    toggleMenu();
};

navaboutme.onclick = function() {
    makeSectionVierdeActive();
    toggleMenu();
};

navmywork.onclick = function() {
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

    navhellothere.classList.add("underline")
    navphotography.classList.remove("underline") 
    navaboutme.classList.remove("underline") 
    navmywork.classList.remove("underline")  
};

eersteSection.onclick = makeSectionEersteActive;

function makeSectionTweedeActive() {
	tweedeSection.classList.add("active");
	eersteSection.classList.remove("active");
    derdeSection.classList.remove("active");
    vierdeSection.classList.remove("active");

    navhellothere.classList.remove("underline")
    navphotography.classList.add("underline") 
    navaboutme.classList.remove("underline") 
    navmywork.classList.remove("underline") 
};

tweedeSection.onclick = makeSectionTweedeActive;

function makeSectionDerdeActive() {
    derdeSection.classList.add("active");
    eersteSection.classList.remove("active");
	tweedeSection.classList.remove("active");
    vierdeSection.classList.remove("active");

    navhellothere.classList.remove("underline")
    navphotography.classList.remove("underline") 
    navaboutme.classList.remove("underline") 
    navmywork.classList.add("underline") 
};

derdeSection.onclick = makeSectionDerdeActive;

function makeSectionVierdeActive() {
    vierdeSection.classList.add("active");  
    eersteSection.classList.remove("active");
	tweedeSection.classList.remove("active");
    derdeSection.classList.remove("active"); 

    navhellothere.classList.remove("underline")
    navphotography.classList.remove("underline") 
    navaboutme.classList.add("underline") 
    navmywork.classList.remove("underline") 
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



