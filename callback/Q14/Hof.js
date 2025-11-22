function evaluation(employee){
    const performance = employee.filter(task => task.tasksCompleted>5);
    //console.log(performance);
    const emplo = performance.map(person => ({
        name:person.name,
        performance:person.rating>4.5?"Excellent"
                   :person.rating>=3?"Good"
                   :"Need Improvements" })
);
    //console.log(emplo)
    const performancepriority ={
        'Excellent': 1,
        'Good':2,
        'Needs Improvements':3
    }
    emplo.sort((a,b)=>{
        return performancepriority[a.performance]-performancepriority[b.performance]
    })
    console.log(emplo)
}






const employee = [

{ name: "Alice", tasksCompleted: 8, rating: 4.7 },

{ name: "Bob", tasksCompleted: 4, rating: 4.0 },

{ name: "Charlie", tasksCompleted: 6, rating: 3.5 },

{ name: "David", tasksCompleted: 10, rating: 4.9 },

{ name: "Eve", tasksCompleted: 7, rating: 2.8 }

];
evaluation(employee)