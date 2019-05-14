// Your code goes here

const logo = document.querySelector(".logo-heading");

// courtesy of Samantha for showcasing this
logo.addEventListener("mouseover", event => {
    let backgroundProp = event.target.style.background;
    event.target.style.background = backgroundProp == "green" ? "white" : "green";
});

