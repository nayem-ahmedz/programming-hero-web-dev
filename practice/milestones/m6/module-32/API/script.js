function loadPosts(){
    const url = 'https://jsonplaceholder.typicode.com/posts';
    fetch(url)
        .then(res => res.json())
        .then(data => display(data));
}
function display(posts){
    const container = document.querySelector('#posts-container');
    container.innerHTML = '';
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