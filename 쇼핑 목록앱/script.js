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
    <li id=${id}><span class = "inputText">${inputValue}</span><i class="far fa-edit"></i><i class="fas fa-trash-alt"></i></li>
    `;
    LIST.push({text: inputValue, id: id});
    saveLocalStorage();
    ul.insertAdjacentHTML("beforeend", listText);
    input.value = ""
}

function deleteHandler(e){
    const li = e.target.parentNode;
    li.remove();
    const cleanList = LIST.filter(function(item) {
        return item.id !== parseInt(li.id);
    })
    LIST = cleanList;
    saveLocalStorage();
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
    editInput.addEventListener("keydown", (e)=>{
        if(e.key !== "Enter"){
            return;
        }else{
            // if(typeof editInput.value == "undefined" || editInput.value == null || editInput.value == ""){
            //     editInput.classList.add("change");
            //     editInput.placeholder = "수정할 목록을 입력해주세요";
            //     return;
            // }
            li.childNodes[1].style.display = "";
            li.childNodes[2].style.display = "";
            const editValue = editInput.value;
            list.innerText = editValue;
            li.replaceChild(list, editInput);
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
    }else if(e.target.classList.contains("fa-plus-circle")){
        addListHandler(id);
        id++
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






