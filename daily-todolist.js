const todoList = document.querySelector('.todo-list');
const todoEnter = document.querySelector('.todo-enter');
const todoInput = document.querySelector('.todo-input');

todoEnter.addEventListener('click', () => {
  if(todoInput.value === ''){
    alert('Please enter a task!');
  } else {
    addToDo();
    todoInput.value = '';
  }
});

todoInput.onkeydown = (event) => {

  if (event.key === 'Enter') {
    if(todoInput.value === ''){
      alert('Please enter a task!');
    } else {
      addToDo();
      todoInput.value = '';
    }
    
  }
}

function addToDo(){
  const task = document.createElement('li');
  const leftSpan = document.createElement('span');
  const checkbox = document.createElement('input');
  const taskName = document.createElement('span');
  const rightSpan = document.createElement('span');
  const text = todoInput.value;

  task.className = 'task';
  leftSpan.className = 'left-span';
  checkbox.className = 'checkbox';
  taskName.className = 'task-name';
  rightSpan.className = 'right-span';

  checkbox.setAttribute('type', 'checkbox');
  
  taskName.innerText = text;
  rightSpan.innerText = 'Delete';
 
  taskName.addEventListener('dblclick', editToDo);
  rightSpan.addEventListener('click', deleteToDo);
  checkbox.addEventListener('click', doneToDo);
  
  leftSpan.appendChild(taskName);
  leftSpan.appendChild(checkbox);
  task.appendChild(leftSpan);
  task.appendChild(rightSpan);
  todoList.appendChild(task);
  
}

function deleteToDo(event){
  const todoTask = event.target.parentElement; 
  todoList.removeChild(todoTask);
}

function doneToDo(event){
  if (event.target.checked){
    event.target.parentElement.parentElement.classList.toggle('finished');
    event.target.parentElement.classList.toggle('line-through');
  } else {
    event.target.parentElement.parentElement.classList.toggle('finished');
    event.target.parentElement.classList.toggle('line-through');
  }
}

function editToDo(event){
  let previousTask = event.target.innerHTML;
  html = `<input type="text" class="edit-todo" 
            onkeydown="enterNewTask(event, event.target, this.value);" 
            onfocusout="removeEditToDo(event, '${previousTask}');">
          `;
  event.target.innerHTML = html;
  event.target.children[0].select();
}

function enterNewTask(event, current, value) {
  if (event.key === 'Enter'){
    if (event.target.value === ''){
      alert('Please enter a text!');
    } else {
      current.parentElement.innerHTML = value;
      current.replaceWith(value);
    }
  } 
}

function removeEditToDo(event, previous){
  event.target.parentElement.innerHTML = previous;
}

  


