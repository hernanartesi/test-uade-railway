const { dbConnection } = require("../config/db") 
const { DataTypes } = require('sequelize')

const Materia = dbConnection.define('Materia', {
    nombre: DataTypes.STRING
})

const Alumno = dbConnection.define('Alumno', {
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING
})

const Nota = dbConnection.define('Nota', { 
    valor: DataTypes.INTEGER
})

Materia.hasMany(Nota)
Nota.belongsTo(Materia)

Alumno.hasMany(Nota)
Nota.belongsTo(Alumno)


dbConnection.sync({alter: false}).then(() => {
    console.log("Database synchronized")
})

module.exports = {
    Materia,
    Alumno,
    Nota
}