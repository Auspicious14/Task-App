// Declaring Variables
const taskInput = document.querySelector('#task');
const addTaskBtn = document.querySelector('.btn');
// const deleteTaskBtn = document.querySelector('.delete-task');

// input event handler
addTaskBtn.addEventListener( 'click',  (e) => {
    const list = document.querySelector('ol');
    const li = document.createElement('li');
    li.className = 'list-item';
    li.textContent = taskInput.value;
    li.style.display = 'flex';
    li.style.justifyContent = 'space-between';
    li.style.alignItems = 'flex-start';
    console.log(li);
    list.appendChild(li);
    taskInput.value = '';
    
    const deleteBtn = document.createElement('input');
    deleteBtn.className = 'delete-btn';
    deleteBtn.type = 'submit';
    deleteBtn.value = 'Delete Task';
    deleteBtn.style.width = '200px';
    deleteBtn.style.backgroundColor = 'blue';
    deleteBtn.style.color = 'white';
    deleteBtn.style.fontFamily = "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif";
    deleteBtn.style.padding = '.5rem ';
    deleteBtn.style.outline = 'none';
    deleteBtn.style.border = 'none';
    deleteBtn.style.alignItems = '';
    li.appendChild(deleteBtn);

    console.log(deleteBtn);
    e.preventDefault();
});


// create a delete button

