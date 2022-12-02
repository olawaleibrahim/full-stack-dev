var database = [
    {
        username: "olawale",
        password: "supersecret"
    },
    {
        username: "sally",
        password: "123"
    },
    {
        username: "ingrid",
        password: "777"
    }
];

var newsFeed = [
    {
        username: "Bobby",
        timeline: "So tired from all that learning"
    },
    {
        username: "Sally",
        timeline: "Javascript is soo cool"
    },
    {
        username: "Mitch",
        timeline: "Javascript is preeettyyy cool"
    }
];

var userNamePrompt = prompt("What is your username?");
var passwordPrompt = prompt("what is your password?");

function isUserValid(username, password) {
    for (var i =0; i<database.length; i++) {
        if (database[i].username === username && 
            database[i].password === password) {
                return true;
            }
    }
    return false;
}

function signIn(user, pass) {
    if (isUserValid(user, pass)) {
        console.log(newsFeed);
    } else {
        alert("Sorry, wrong username and password!");
    }
}

signIn(userNamePrompt, passwordPrompt);