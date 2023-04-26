const fs = require('fs');
const path = require("path");

const usersFilePath = path.join(__dirname, '../data/usersDataBase.json');

const User = {
    fileName: usersFilePath,

    getData: function (){
        return JSON.parse(fs.readFileSync(this.fileName, 'utf-8'))
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