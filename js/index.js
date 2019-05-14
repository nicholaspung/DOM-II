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
    p.textContent += `${event.code} `;
});

// wheel event
const container = document.querySelectorAll(".container");

// hides container content
container[1].addEventListener("wheel", event => {
    console.log(event);
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
    console.log(event.target);
    img.removeAttribute("style");
});