const spanAll = document.querySelectorAll("span");
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
