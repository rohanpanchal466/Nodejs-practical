const Sequelize = require('sequelize')

const sequelize =  new Sequelize('node-complete','root','Rohan@28465',{
    dialect:'mysql',
    host:'localhost'
})

module.exports = sequelize