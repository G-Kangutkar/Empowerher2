export function displayTodos(data){
    const container = document.getElementById('todosContainer');
    container.innerHTML = '';
    data.forEach(todo =>{
        const todoItem = document.createElement('div');
        todoItem.className='todo-item'
        todoItem.innerHTML=`
        <span class="todo-title">${todo.title}</span>
        `
        container.appendChild(todoItem)
    })

}