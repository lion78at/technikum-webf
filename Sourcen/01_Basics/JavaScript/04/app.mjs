// NOTE: requires node-fetch library, i.e. npm install node-fetch

// concepts: fetch api, promise

import fetch from "node-fetch";

fetch('https://randomuser.me/api?results=10')
    .then(response => response.json())
    .then(data => data.results)
    .then(users => {
        const femaleUsers = users
            .filter(user => user.gender === "female")
            .map(user => user.name.first + ' ' + user.name.last)
            .join(", ");
        console.log(femaleUsers);
    })
    .catch(error => console.log(error.message));

// console.log('Fertig!');
