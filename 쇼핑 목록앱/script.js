const ul = document.querySelector("ul");
const input = document.querySelector("input");
const placeholder = input.placeholder;
const trashBtn = document.querySelector(".fa-trash-alt");

function addListHandler(id){
    //localStorage.clear();
    const inputValue = input.value;
    if(typeof inputValue == "undefined" || inputValue == null || inputValue == ""){
        input.classList.add("change");
        input.placeholder = "쇼핑할 목록을 입력하시라구욧!!";
        return;
    }
    input.classList.remove("change");
    input.placeholder = placeholder;
    const listText = `
    <li id=${id}><span class = "inputText">${inputValue}</span><i class="far fa-edit"></i><i class="fas fa-trash-alt"></i></li>
    `;
    LIST.push({text: inputValue, id: id});
    saveLocalStorage();
    ul.insertAdjacentHTML("beforeend", listText);
    ul.lastChild.previousSibling.scrollIntoView({behavior: "smooth", block: "center"});
    input.value = "";
    input.focus();
}

function deleteHandler(e){
    const AllList = document.querySelectorAll("li");
    const li = e.target.parentNode;
    let id = li.id;
    li.remove();
    const cleanList = LIST.filter(function(item) {
        return item.id !== parseInt(id);
    })
    LIST.forEach((item)=>{
        if(item.id > id){
            return item.id = item.id-1;
        }
    })
    LIST = cleanList;
    saveLocalStorage();

    Array.from(AllList).forEach((item)=>{
        if(item.id > id){
            return item.id = item.id-1;
        }
    })
}

function editHandler(e){
    const li = e.target.parentNode;
    li.childNodes[1].style.display = "none";
    li.childNodes[2].style.display = "none";
    const id = li.id;
    let list = li.childNodes[0];
    let listText = li.childNodes[0].innerText;
    const editInput = document.createElement("input");
    editInput.classList.add("editInput");
    editInput.value = listText;
    li.replaceChild(editInput, list);
    editInput.focus();
    editInput.addEventListener("keydown", (e)=>{
        if(e.key !== "Enter"){
            return;
        }else{
            if(typeof editInput.value == "undefined" || editInput.value == null || editInput.value == ""){
                editInput.classList.add("change");
                editInput.placeholder = "수정할 목록을 입력해주세요";
                return;
            }
            li.childNodes[1].style.display = "";
            li.childNodes[2].style.display = "";
            const editValue = editInput.value;
            list.innerText = editValue;
            li.replaceChild(list, editInput);
            input.focus();
            LIST[id].text = editValue;
            saveLocalStorage();
        }
    })
}



// 로컽스토리지
function loadToDo(LIST){
    LIST.forEach((item)=>{
        const listText = `
        <li id=${item.id}><span class = "inputText">${item.text}</span><i class="far fa-edit"></i><i class="fas fa-trash-alt"></i></li>
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
        id = parseInt(ul.lastChild.previousSibling.id)+1;
    } else {
        return;
    }
});

document.addEventListener("click", (e)=>{
    e.preventDefault();
    if(e.target.classList.contains("fa-trash-alt")){
        deleteHandler(e);
        id = parseInt(ul.lastChild.previousSibling.id)+1;
    }else if(e.target.classList.contains("fa-plus-circle")){
        addListHandler(id);
        id = parseInt(ul.lastChild.previousSibling.id)+1;
    }else if(e.target.classList.contains("fa-edit")){
        editHandler(e);
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






