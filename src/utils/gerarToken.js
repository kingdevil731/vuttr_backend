const crypto = require('crypto');

module.exports = gerarToken = () => {
    return crypto.randomBytes(12).toString('hex'); // criar um b randomizada/alertoria de 12 bytes que depois passamos para uma string o hexadecimal deste valor (b)
}