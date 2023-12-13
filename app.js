'use strict'


const form = document.getElementById( 'form');
const todoCard = document.querySelector('.list-item')
let input = document.getElementById('todo-list-input');





form.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputValue = input.value;
    todoCard.innerHTML += `
                            <div>
                               <p class="checked">${inputValue}</p>
                               <ion-icon class="icon" name="close-circle-outline"></ion-icon>
                           </div>`
    form.reset();

    taskDone();
    deleteTask();


});




const taskDone = () => {
    let checked = document.querySelectorAll('.checked');
    console.log(checked);
    for (let i = 0; i < checked.length; i++){
        checked[i].onclick = function () {
            this.style.textDecoration = "line-through"
        }
    }
}

const deleteTask = () => {
    let deleteTask = document.querySelectorAll('.icon');
    for (let i = 0; i < deleteTask.length; i++){
        deleteTask[i].onclick = function (){
            this.parentNode.remove();
        }
    }
}










