var todos = [
    "clean room",
    "brush teeth",
    "exercise",
    "study javascript",
    "eat healthy"
];

var todosImportant = [
    "clean room!",
    "brush teeth!",
    "exercise!",
    "study javascript!",
    "eat healthy!"
];

var todosLength = todos.length;
for (var i=0; i < todosLength; i++) {
    console.log(i);
}

function logTodos(todo, i) {
    console.log(todo, i);
}

todos.forEach(logTodos);
todosImportant.forEach(logTodos);

// todos.forEach(function(todos, j) {
//     console.log(todos, j);
// })

// for (var i=0; i < todos.length; i++) {
//     todos[i] = todos[i] + "!";
// }

// var counterOne = 0;
// while (counterOne < 10) {
//     console.log(counterOne);
//     counterOne++
// }

// var counterTwo = 10
// do {
//     console.log(counterTwo);
//     counterTwo--;
// } while (counterTwo > 0);