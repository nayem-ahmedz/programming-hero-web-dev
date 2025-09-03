// placeholder json

fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(result => console.log(result, typeof result));
