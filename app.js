const csvToJson = require('csvtojson');
const fs = require('fs');

csvToJson().fromFile('usuarios.csv')
    .then(users => {
        
        console.log(users);

        fs.writeFile('users.json', JSON.stringify(users, null, 4), (error) => {
            if (error) {
                throw error;
            }
            console.log("Arquivo users.json foi salvo!");
        });

    }).catch(error => {
        console.log(error);
    });
