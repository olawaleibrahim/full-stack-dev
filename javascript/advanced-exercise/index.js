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