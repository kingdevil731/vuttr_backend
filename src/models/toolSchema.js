const mongoose = require('mongoose');

// criação do schema da table na db
const toolSchema = new mongoose.Schema({
    title: String,
    link: String,
    description: String,
    tags: [String]
});

module.exports = mongoose.model('Tools', toolSchema);