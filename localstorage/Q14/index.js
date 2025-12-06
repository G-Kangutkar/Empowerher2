const List = [];
const saved = localStorage.getItem('List');
if (saved) {
    try {
        JSON.parse(saved)
    }
    catch {
        List = [];
    }
}
complete = false;
// add task
document.getElementById('addTask').addEventListener('click', () => {

    const tasks = {
        task: document.getElementById('newTask').value,
    }
    List.push(tasks);
    saveData();
    renderCards(List);
})

function saveData() {
    localStorage.setItem('List', JSON.stringify(List))
}

// complete task
function doneTask(index) {
    const cards = document.querySelectorAll('.card')
    const task = cards[index].querySelector('p')
    task.style.textDecoration = "Line-through"
    complete = true;
}

// remove task
function removeTask(index) {
    const removed = List.splice(index, 1);
    localStorage.removeItem('removed');
    renderCards(List)
}

//rendering
const container = document.querySelector(".container")
function renderCards(data) {
    container.innerHTML = '';
    data.forEach((el, index) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
        <p>${el.task}</p>
        <button id="done" onclick="doneTask(${index})">Done</button>
        <button id="removeTask" onclick="removeTask(${index})">Remove</button>

        `;
        container.appendChild(card)
    })
}
renderCards(List)