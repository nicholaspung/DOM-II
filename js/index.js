// Your code goes here

// mouseover event
// courtesy of Samantha for showcasing this
// changes logo background from green to white
const logo = document.querySelector(".logo-heading");

logo.addEventListener("mouseover", event => {
    let backgroundProp = event.target.style.background;
    event.target.style.background = backgroundProp == "green" ? "white" : "green";
});

// keydown event
// adds keystrokes to bottom of header paragraph
const p = document.createElement("p");

const funBusHeader = document.querySelector(".intro");
funBusHeader.appendChild(p);

document.addEventListener("keydown", event => {
    p.style.background = "yellow";
    p.textContent += `${event.code} `;
});

// wheel event
const container = document.querySelectorAll(".container");

// hides container content
container[1].addEventListener("wheel", event => {
    if (event.pageY > 1500) {
        container[1].style.display = "none";
    }
});

// displays container content if wheel event is used on navbar
container[0].addEventListener("wheel", event => {
    if (container[1].style.display == "none") {
        container[1].removeAttribute("style");
    }
});

// drag / drop event
const img = document.querySelector("header img");

img.addEventListener("drag", event => {
    event.target.style.display ="none";
});

img.addEventListener("dragend", event => {
    img.removeAttribute("style");
});

// load event
img.addEventListener("load", event => {
    alert("hello there, i have loaded beautifully");
});

// focus event
// create input element
const input = document.createElement("input");
input.type = "email";

// add input element to "pick your destiantion" container
const contentDestination = document.querySelector(".content-destination");
contentDestination.appendChild(input);

// when input is clicked, it changes to random color according to list
const inputFocus = document.querySelector("input");

inputFocus.addEventListener("focus", event => {
    let colors = ['red', 'green', 'blue', 'grey', 'black'];
    event.target.style.background = colors[Math.floor(Math.random() * colors.length)];
    console.log(event.target);
});

// resize event
const home = document.querySelector(".home");
const html = document.querySelector("html");

window.addEventListener("resize", event => {
    p.textContent += `${window.innerWidth} and ${window.innerHeight}`;
    p.style.background = "green";
})