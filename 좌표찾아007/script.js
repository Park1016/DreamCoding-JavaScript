const coor = document.querySelector(".coor");
const lineX = document.querySelector(".lineX");
const lineY = document.querySelector(".lineY");
const target = document.querySelector(".target");
const targetRect = target.getBoundingClientRect();
const targetRectWidth = targetRect.width / 2;
const targetRectHeight = targetRect.height / 2;

window.addEventListener("mousemove", (e)=>{
    const x = e.pageX;
    const y = e.pageY;

    coor.innerHTML = `${x}px, ${y}px`;
    target.style.transform = `translate(${x - targetRectWidth}px, ${y - targetRectHeight}px)`;
    coor.style.transform = `translate(${x}px, ${y}px)`;
    lineX.style.transform = `translateY(${y}px)`;
    lineY.style.transform = `translateX(${x}px)`;
})

