// Mobile Menu

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Typing Animation

const typing = document.querySelector(".typing");

const texts = [
    "Frontend Developer",
    "AI Enthusiast",
    "Software Developer",
    "CSE Student"
];

let index = 0;
let charIndex = 0;

function typeEffect() {

    if(charIndex < texts[index].length){
        typing.textContent += texts[index].charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 100);
    }
    else{
        setTimeout(eraseEffect, 1500);
    }
}

function eraseEffect(){

    if(charIndex > 0){
        typing.textContent =
        texts[index].substring(0, charIndex - 1);

        charIndex--;
        setTimeout(eraseEffect, 50);
    }
    else{
        index++;

        if(index >= texts.length){
            index = 0;
        }

        setTimeout(typeEffect, 500);
    }
}

typeEffect();

// Reveal Animation

window.addEventListener("scroll", reveal);

function reveal(){

    const reveals = document.querySelectorAll(".reveal");

    for(let i = 0; i < reveals.length; i++){

        const windowHeight = window.innerHeight;
        const revealTop = reveals[i].getBoundingClientRect().top;
        const revealPoint = 100;

        if(revealTop < windowHeight - revealPoint){
            reveals[i].classList.add("active");
        }
    }
}

reveal();

// Back To Top Button

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){
        topBtn.style.display = "block";
    }
    else{
        topBtn.style.display = "none";
    }
});

topBtn.addEventListener("click", () => {
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
});

// Active Navbar

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop;

        if(pageYOffset >= sectionTop - 200){
            current = section.getAttribute("id");
        }
    });

    navItems.forEach(a => {

        a.classList.remove("active");

        if(a.getAttribute("href") === "#" + current){
            a.classList.add("active");
        }
    });
});
