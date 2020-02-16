const svg = document.querySelector(".box");
const wave = document.querySelector(".wave");
let targ = document.querySelector(".target");
const message = document.querySelector(".message");
console.log(document.documentElement.clientWidth);

const setCoordsOfTarget = (offsetY, offsetX) => {
    const clientHeight = svg.clientHeight;
    const y = (468 / (clientHeight / offsetY)) + 16;
    const clientWidth = svg.clientWidth;
    const x = (1254 / (clientWidth / offsetX)) - 22;
    targ.setAttribute("y", y - 44);
    targ.setAttribute("x", x + 18);
    message.setAttribute("transform", `translate(${x}, 
        ${y}) scale(0.02500000,-0.02500000)`);
    targ.innerHTML = 60 - Math.round((y - 16 - 138) / 4.66);
}

document.querySelector(".wave").addEventListener("mouseenter", 
(e) => {
    setCoordsOfTarget(e.offsetY, e.offsetX);
})
document.querySelector(".wave").addEventListener("mouseleave", 
(e) => {
    setCoordsOfTarget(e.offsetY, e.offsetX);
})
document.querySelector(".wave1").addEventListener("mouseenter", 
(e) => {
    setCoordsOfTarget(e.offsetY, e.offsetX);
})
document.querySelector(".wave1").addEventListener("mouseleave", 
(e) => {
    setCoordsOfTarget(e.offsetY, e.offsetX);
})