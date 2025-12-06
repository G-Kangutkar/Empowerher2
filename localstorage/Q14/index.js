const List = []

// add task
document.getElementById('addTask').addEventListener('click',()=>{
    
    const tasks ={
        task : document.getElementById('newTask').value,
    }
    List.push(tasks);
    renderCards(List);
})

//rendering
const container=document.querySelector(".container")
function renderCards(data){
    container.innerHTML='';
    data.forEach((el,index)=>{
        const card = document.createElement('div');
        card.className='card';
        card.innerHTML=`
        <p>${el.task}</p>

        `;
    container.appendChild(card)
    })
}
renderCards(List)