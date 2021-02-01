const spanAll = document.querySelectorAll("span");
const buttons = document.querySelector(".buttons");
const Sb100 = document.querySelector(".Sb100");
const St100 = document.querySelector(".St100");
const SitD = document.querySelector(".SitD");
const diffrent = document.querySelector(".diffrent");
let current;

for(const span of spanAll){
    
    span.addEventListener("click", (e)=>{
        
        clientX = e.clientX;
        clientY = e.clientY;
        pageX = e.pageX;
        pageY = e.pageY;
        
        function fillText(){
            span.innerHTML = `clientX : ${clientX}, clientY : ${clientY},
            pageX : ${pageX}, pageY : ${pageY}`;
        }
        function removeText(){
            current.innerHTML = '';
        }
            
        if(current){
            current.classList.remove("active");
            removeText();
        }
        span.classList.add("active");
        fillText();
        current = span;  
    })
}

function onClick(e){
    if(e.target == Sb100){
        window.scrollBy({
            top: 100,
            left: 0,
            behavior: 'smooth'
          });
    }
    else if (e.target == St100){
        window.scrollTo(0, 100);
    }
    else {
        diffrent.scrollIntoView();
    }
}

buttons.addEventListener("click", onClick)