const promise = new Promise((resolve, reject) => {
    if (true) {
        resolve("Stuff Worked");
    } else {
        reject("Error, it broke")
    }
})

promise.then(result => result + "!").then(
    result2 => result2 + "?" ).catch(
        () => console.log("error!")).then(result3 => {
            console.log(result3 + "!")
        })


const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, "HIII")
})

const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, "POOKIE")
})

const promise4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, "Are you looking for me?")
})

Promise.all([promise, promise2, promise3, promise4]).then(
    values => {
        console.log(values);
    }
)


// ASYNC AWAIT
async function fetchUsers() {
    const resp = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await resp.json();
    console.log(data);
}


const urls = [
    "https://jsonplaceholder.typicode.com/users",
    "https://jsonplaceholder.typicode.com/posts",
    "https://jsonplaceholder.typicode.com/albums"
];

Promise.all(urls.map(url => 
    fetch(url).then(resp => resp.json()))).then(array => {
        console.log("users", array[0])
        console.log("posts", array[1])
        console.log("albums", array[2])
    }).catch("oops");


const getData = async function() {
    try {
        const [ users, posts, albums ] = await Promise.all(urls.map(url => 
            fetch(url).then(resp => resp.json())))

        console.log("users", users);
        console.log("posts", posts);
        console.log("albums", albums);
    } catch (err) {
        console.log("oooooopss", err);
    }
};
