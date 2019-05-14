// Your code goes here

// mouseover event
// courtesy of Samantha for showcasing this
// changes logo background from green to white
const logo = document.querySelector(".logo-heading");

logo.addEventListener("mouseover", event => {
    let backgroundProp = event.target.style.background;
    event.target.style.background = backgroundProp == "green" ? "white" : "green";
    event.stopPropagation();
});

// keydown event
// adds keystrokes to bottom of header paragraph
const p = document.createElement("p");

const funBusHeader = document.querySelector(".intro");
funBusHeader.appendChild(p);

document.addEventListener("keydown", event => {
    p.style.background = "yellow";
    p.textContent += `${event.code} `;
    event.stopPropagation();
});

// wheel event
const container = document.querySelectorAll(".container");

// hides container content
container[1].addEventListener("wheel", event => {
    if (event.pageY > 1500) {
        container[1].style.display = "none";
    }
    event.stopPropagation();
});

// displays container content if wheel event is used on navbar
container[0].addEventListener("wheel", event => {
    if (container[1].style.display == "none") {
        container[1].removeAttribute("style");
    }
    event.stopPropagation();
});

// drag / drop event
const img = document.querySelector("header img");

img.addEventListener("drag", event => {
    event.target.style.display ="none";
    event.stopPropagation();
});

img.addEventListener("dragend", event => {
    img.removeAttribute("style");
    event.stopPropagation();
});

// load event
img.addEventListener("load", event => {
    alert("hello there, i have loaded beautifully");
    event.stopPropagation();
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
    event.stopPropagation();
});

// resize event
const home = document.querySelector(".home");
const html = document.querySelector("html");

window.addEventListener("resize", event => {
    p.textContent += `${window.innerWidth} and ${window.innerHeight}`;
    p.style.background = "green";
    event.stopPropagation();
})

// scroll event
const p1 = document.createElement("p");
funBusHeader.appendChild(p1);

window.addEventListener("scroll", event => {
    p1.textContent = `Timestamp triggered by scrolling: ${event.timeStamp}`;
    event.stopPropagation();
});

// select event
const p2 = document.createElement("p");
contentDestination.appendChild(p2);

inputFocus.addEventListener("select", event => {
    p2.textContent = `You selected: ${event.target.value}, couldn't get it to work with highlighted words, isntead of the entire thing.`;
})

// dblclick event
funBusHeader.addEventListener("dblclick", event => {
    let fontSizeVar= "50px";
    fontSizeVar = event.target.style.fontSize;
    event.target.style.fontSize = fontSizeVar === "20px" ? "50px" : "20px";
    event.stopPropagation();
})

// stop nav links from refreshing page
const nav = document.querySelectorAll(".nav-link");
nav[1].addEventListener("click", e => {
    event.target.style.background = "pink";
    event.stopImmediatePropagation();
})

// stop event propagation
nav.forEach(e => e.addEventListener("click", e => {
    event.target.style.background = "green";
    e.preventDefault();
}))