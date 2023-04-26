const fs = require('fs');

const User = {
    fileName: "C:/Users/corde/grupo_12_reselec/src/data/usersDataBase.json",

    getData: function (){
        return  JSON.parse(fs.readFileSync(this.fileName, 'utf-8'))
    },

    findAll: function () {
        return this.getData();
    },

    findByPK: function (id) {
        let allUsers = this.findAll();
        let userFound = allUsers.find(oneUser => oneUser.id === id);
        return userFound;
    },

    findByField: function (field, text) {
        let allUsers = this.findAll();
        let userFound = allUsers.find(oneUser => oneUser[field] === text);
        return userFound;
    },

}

module.exports = User;