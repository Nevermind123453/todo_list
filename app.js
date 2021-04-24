let text = document.querySelector('#text');
let btn1 = document.querySelector('.ok');
let drop = document.querySelectorAll('.drop');
let start = document.querySelector('.start');
let id = 0;
let allTasks;
btn1.addEventListener('click', f1);

function f1() {
    

    if(text.value == "") {
        alert("Список задач пуст");
    }
    else {

    id++;

    let span = document.createElement('span');
    span.setAttribute("id", id);
    span.draggable = "true";
    span.innerHTML += `Задание №${id} - ${text.value} <img src="img/delete.png" id=${id} style="width:20px;"> <br>`;
    
    let deleteImg = span.querySelector('img');
    console.log(deleteImg);
    deleteImg.onclick = function() {
        if(deleteImg.id == span.id) {
            span.style.display = "none";
        }
    }

    start.appendChild(span);        
    text.value = '';
    allTasks = start.getElementsByTagName('span');
    for(let i = 0; i < allTasks.length; i++) {
        allTasks[i].addEventListener('dragstart', f3);
        function f3(event){
        event.dataTransfer.setData("text", event.target.id);
        }
     }
  }
}

for(let i = 0; i < drop.length; i++) {
drop[i].addEventListener('dragover', f4);

function f4(event) {
    event.preventDefault();
}

drop[i].addEventListener('drop', f5);

function f5(event) {
    event.preventDefault();
    let id = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(id));
    }
}