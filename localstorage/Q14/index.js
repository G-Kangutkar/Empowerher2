let List = [];
const saved = localStorage.getItem('List');
if (saved) {
    try {
        List=JSON.parse(saved)
    }
    catch {
        List = [];
    }
}


// add task
document.getElementById('addTask').addEventListener('click', () => {

    const tasks = {
        id:Date.now(),
        task: document.getElementById('newTask').value,
        completed:false
    }
    List.push(tasks);
    saveData();
    renderCards(List);
})

function saveData() {
    localStorage.setItem('List', JSON.stringify(List))
}

// complete task
function doneTask(id) {
    const taskIndex = List.findIndex(task => task.id === id);
    if(taskIndex !== -1){
        List[taskIndex].completed = !List[taskIndex].completed;
        saveData();
        renderCards(List)
    }
}

// remove task
function removeTask(id) {
    
    List = List.filter(task => task.id !==id)
    saveData()
    renderCards(List)
}



//rendering
const container = document.querySelector(".container")
function renderCards(data) {
    container.innerHTML = '';
    data.forEach((el) => {
        const card = document.createElement('div');
        card.className = 'card';
        const textStyle = el.completed ? 'text-decoration: line-through; opacity: 0.6;' : '';
        card.innerHTML = `
        <p style="${textStyle}">${el.task}</p>
        <button id="done" onclick="doneTask(${el.id})">${el.completed ? 'Undo': 'Done'}</button>
        <button id="removeTask" onclick="removeTask(${el.id})">Remove</button>

        `;
        container.appendChild(card)
    })
}
renderCards(List)