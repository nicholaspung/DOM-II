// Your code goes here

// courtesy of Samantha for showcasing this
// changes logo background from green to white
const logo = document.querySelector(".logo-heading");

logo.addEventListener("mouseover", event => {
    let backgroundProp = event.target.style.background;
    event.target.style.background = backgroundProp == "green" ? "white" : "green";
});

// adds keystrokes to bottom of header paragraph
const p = document.createElement("p");

const funBusHeader = document.querySelector(".intro");
funBusHeader.appendChild(p);

document.addEventListener("keydown", event => {
    p.textContent += `${event.code} `;
});