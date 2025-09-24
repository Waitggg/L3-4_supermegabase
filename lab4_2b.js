fetch('https://jsonplaceholder.typicode.com/users')
    .then((data) => data.json())
    .then((users) => users.map(user => ({
        id: user.id,
        name: user.name,
        username: user.username,
        email: user.email,
        phone: user.phone
    })))
    .then((users) => console.log(users))
    .catch(error => console.log("Ошибка " + error));

fetch('https://jsonplaceholder.typicode.com/todos')
    .then((data) => data.json())
    .then((users) => users.filter(user => user.completed == false))
    .then((users) => console.log(users))
    .catch(error => console.log("Ошибка " + error));