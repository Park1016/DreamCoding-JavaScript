let screen = document.querySelector(".screen");
let outer = document.querySelector(".outer");
let inner = document.querySelector(".inner");
let clientWidth = document.querySelector(".clientWidth");

function resize(){
    screen.innerHTML = `${window.screen.width}, ${window.screen.height}`;
    outer.innerHTML = `${window.outerWidth}, ${window.outerHeight}`;
    inner.innerHTML = `${window.innerWidth}, ${window.innerHeight}`;
    clientWidth.innerHTML = `${document.documentElement.clientWidth}, ${document.documentElement.clientHeight}`;
}

window.addEventListener("resize", resize);