const mongoose = require('mongoose');

const authSchema = new mongoose.Schema({
    usuario: String,
    nome: String
});

module.exports = mongoose.model('usuarios', authSchema);