// importação do mongoose
const mongoose = require('mongoose');
// init do schema
const authSchema = new mongoose.Schema({
    usuario: String,
    nome: String
});
// exportar modelo na mongoose/mongodb com o nome de tabela/table Usuarios e o esquema authSchema
module.exports = mongoose.model('usuarios', authSchema);