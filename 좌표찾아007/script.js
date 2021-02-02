let coor = document.querySelector(".coor");
let lineX = document.querySelector(".lineX");
let lineY = document.querySelector(".lineY");

window.addEventListener("mousemove", (e)=>{
    coor.innerHTML = `${e.pageX}, ${e.pageY}`;
    coor.style.left = `${e.pageX+90}px`;
    coor.style.top = `${e.pageY+75}px`;
    lineX.style.left = "0px";
    lineX.style.top = `${e.pageY+26.5}px`;
    lineY.style.top = "0px";
    lineY.style.left = `${e.pageX+59}px`;
})

