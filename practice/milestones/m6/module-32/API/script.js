const title = document.querySelector('#title');
function loadPosts(){
    const url = 'https://jsonplaceholder.typicode.com/posts';
    fetch(url)
        .then(res => res.json())
        .then(data => display(data));
}
const container = document.querySelector('#posts-container');
function display(posts){
    container.innerHTML = '';
    title.innerText = 'All Posts';
    setTimeout(() => {
        posts.forEach(post => {
        const postCard = document.createElement('div');
        postCard.classList.add('post-card');
        postCard.innerHTML = `
        <h2>${post.title}</h2>
        <p>${post.body}</p>
        <a href="#">read more...</a>
        `;
        container.appendChild(postCard);
    });
    }, 500);
}

//  load todos
function loadTodos(){
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(data => displayTodos(data));
        // .catch(error => console.log(error));
}
function displayTodos(todos){
    container.innerHTML = '';
    title.innerText = 'All Todos list';
    todos.forEach(todo => {
        const card = document.createElement('div');
        card.classList.add('todo-card');
        card.innerHTML = `
        ${todo.completed ? '<i class="fa-regular fa-square-check"></i>' : '<i class="fa-regular fa-square"></i>'}
        <h3>${todo.title}</h3>
        `;
        container.append(card);
    })
}