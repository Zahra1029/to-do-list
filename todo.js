window.addEventListener('load' , showtask);
let inp = document.querySelector('input');
let ul = document.querySelector('ul');
let button = document.querySelector('button');
let tasks;
if(!localStorage.getItem('todo')){
    tasks = [];
}
else{
 tasks = gettask();
}
button.addEventListener('click', createtask);
function createtask(text){
    if(inp.value){
  text = inp.value;
  let li = document.createElement('li');
  li.innerHTML = text;
  li.innerHTML += '<span class="trash"><i class="fa-solid fa-trash-can"></i></span>'
  ul.appendChild(li);
  savetask(text);
  inp.value = '';
    }  
}

ul.addEventListener('click', (e)=>{
    if(e.target.nodeName === 'I'){
       let target = e.target.parentElement.parentElement;
       target.style='display : none';
       tasks.splice(tasks.indexOf(target.textContent),1);
       localStorage.setItem('todo', tasks);
    }
    if(e.target.nodeName === 'LI'){
        e.target.classList.toggle('done');
    }
})
function savetask(text){
  tasks.push(text);
  localStorage.setItem('todo' , tasks);
}
function gettask(){
    return localStorage.getItem('todo').split(',');
}
function showtask(){
    for (let element of gettask()){
        let li = document.createElement('li');
        li.innerHTML = element;
        li.innerHTML += '<span class="trash"><i class="fa-solid fa-trash-can"></i></span>'
        ul.appendChild(li);

       
    }
}