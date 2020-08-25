const mongoose = require('mongoose');

// criação do schema da table na db
const toolSchema = new mongoose.Schema({
    title: String,
    link: String,
    description: String,
    tags: [String]
});
// exportar modelo na mongoose/mongodb com o nome de tabela/table Tools e o esquema toolSchema
module.exports = mongoose.model('Tools', toolSchema);