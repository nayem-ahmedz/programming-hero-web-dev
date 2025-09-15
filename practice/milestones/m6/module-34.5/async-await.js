function thenCatch(){
    console.log(1);
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(json => console.log('result fethed'))
    .catch(err => console.log(err));
    console.log(2);
    console.log(3);
}

// thenCatch();

async function asyncAwait(){
    console.log(1);
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const json = await res.json();
    console.log('fetched result', json[0]);
    console.log(2);
    console.log(3);
}

// asyncAwait();

// using arrow func
const myArrow = async() => {
    console.log(1);
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const json = await res.json();
    console.log('fetched result', json[0].name);
    console.log(2);
    console.log(3);
}

myArrow();