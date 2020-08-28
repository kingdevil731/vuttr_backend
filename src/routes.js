// import do express dentro da constante express
const {Router} = require('express');
// Controladores para simplificar o codigo/leitura, e melhor organização
const toolController = require('./controllers/ferramentaController');
const usuarioController = require('./controllers/usuarioController');
// celebrate para validar/t
const {Joi, celebrate, Segments} = require('celebrate');
// init Router na constante routes
const routes = Router();

// rotas
//      ferramentas
// listar as ferramentas
routes.get("/tools", toolController.listar); 

// filtrar ferramentas + validação de string
routes.get("/tool", celebrate({
    [Segments.QUERY]: Joi.object().keys({
        tag: Joi.required()
    })
}), toolController.filtrarConteudo); 

// criar uma nova ferramenta + validação do body, bem como do headers
routes.post("/tools", celebrate({
    [Segments.BODY]: Joi.object().keys({
     title: Joi.string().required(),
     link: Joi.string().required(),
     description: Joi.string().required(),
      tags: Joi.array().required()  
    }),
    [Segments.HEADERS]: Joi.object({
        usuario: Joi.string().required(),
        token: Joi.string().required()
    }).unknown()
}) ,toolController.cadastarNovo); 

// apagar ferramenta pelo id
routes.delete("/tools/:id", celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.string().min(24).max(24).required(),
    })
}) ,toolController.removerFerramenta);

//      usuario/auth - incrementar autenticação de usuario
routes.post("/auth", celebrate({
    [Segments.BODY]: Joi.object().keys({
        usuario: Joi.required(),
        nome: Joi.string().required()
    })
}) ,usuarioController.criarUsuario);

routes.get("/auth/login", celebrate({
    [Segments.BODY]: Joi.object().keys({
        id: Joi.string().min(24).max(24).required()
    })
}),usuarioController.login);


// exportar o Routes por predefinição
module.exports = routes;