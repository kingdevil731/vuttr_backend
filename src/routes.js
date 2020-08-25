// import do express dentro da constante express
const {Router} = require('express');
// Controladores para simplificar o codigo/leitura, e melhor organização
const toolController = require('./controllers/toolController');
const usuarioController = require('./controllers/usuarioController');

// init Router na constante routes
const routes = Router();

// rotas
//      ferramentas
routes.get("/tools", toolController.listar); // listar as ferramentas
routes.get("/tool", toolController.filtrarConteudo); // filtrar ferramentas
routes.post("/tools", toolController.cadastarNovo); // filtrar ferramentas
routes.delete("/tools/:id", toolController.removerFerramenta); // filtrar ferramentas
//      usuario/auth - incrementar autenticação de usuario
routes.post("/auth", usuarioController.criarUsuario);


// exportar o Routes por predefinição
module.exports = routes;