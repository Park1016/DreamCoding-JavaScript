const coor = document.querySelector(".coor");
const lineX = document.querySelector(".lineX");
const lineY = document.querySelector(".lineY");
const target = document.querySelector(".target");

window.addEventListener("mousemove", (e)=>{
    const x = e.pageX;
    const y = e.pageY;
    coor.innerHTML = `${x}px, ${y}px`;
    target.style.left= `${x}px`
    target.style.top= `${y}px`
    coor.style.left = `${x}px`;
    coor.style.top = `${y}px`;
    lineX.style.top = `${y}px`;
    lineY.style.left = `${x}px`;
})

