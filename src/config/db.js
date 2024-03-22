const sequelize = require('sequelize');
//configurações da base de dados
const database = new sequelize('projeto', 'projeto', '123456',
{
dialect: 'mssql', host:'localhost', port: 61516
});
database.sync();
module.exports = database;