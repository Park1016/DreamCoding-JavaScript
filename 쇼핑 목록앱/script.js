const ul = document.querySelector("ul");
const input = document.querySelector("input");
const placeholder = input.placeholder;
const trashBtn = document.querySelector(".fa-trash-alt");

function addListHandler(id){
    const inputValue = input.value;
    if(typeof inputValue == "undefined" || inputValue == null || inputValue == ""){
        input.classList.add("change");
        input.placeholder = "쇼핑할 목록을 입력하시라구욧!!";
        return;
    }
    input.classList.remove("change");
    input.placeholder = placeholder;
    const listText = `
    <li id=${id}><span class = "inputText">${inputValue}</span><i class="fas fa-trash-alt"></i></li>
    `;
    LIST.push({list: inputValue, id: id});
    saveLocalStorage();
    ul.insertAdjacentHTML("beforeend", listText);
    input.value = ""
}

function deleteHandler(e){
    const li = e.target.parentNode;
    li.remove();
    const cleanToDos = LIST.filter(function(item) {
        return item.id !== parseInt(li.id);
    })
    LIST = cleanToDos;
    saveLocalStorage();
}



// 로컽스토리지
function loadToDo(LIST){
    LIST.forEach((item)=>{
        const listText = `
        <li id=${item.id}><span class = "inputText">${item.list}</span><i class="fas fa-trash-alt"></i></li>
        `;
        ul.insertAdjacentHTML("beforeend", listText);
    })
}

function saveLocalStorage(){
    localStorage.setItem("ToDo", JSON.stringify(LIST));
}


// addEventListener
input.addEventListener("keydown", (e)=>{
    // e.preventDefault();
    if(e.key === "Enter"){
        addListHandler(id);
        id++;
        //localStorage.clear();
    } else {
        return;
    }
});

document.addEventListener("click", (e)=>{
    e.preventDefault();
    if(e.target.classList.contains("fa-trash-alt")){
        deleteHandler(e);
    } else if(e.target.classList.contains("fa-plus-circle")){
        addListHandler(id);
        id++
    }
})

document.addEventListener("DOMContentLoaded", ()=>{
    if(localStorage.getItem("ToDo")){
        LIST = JSON.parse(localStorage.getItem("ToDo"));
        loadToDo(LIST);
        id = LIST.length;
    }else{
        LIST = [];
        id = 0;
    }
})






