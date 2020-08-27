const authSchema = require('../models/authSchema'); //schema para autentição
const gerarToken = require('../utils/gerarToken'); // utilitario para gerar o token

module.exports = {
   /*
    token para ser usado nas chamadas da api / melhor segurança.
    token sera guardado no localStorage do usuario, para a app obter directamente
    token sera nesse caso i _id, sendo que o mongodb ja nos da um String alertoria e unica
    */
   async criarUsuario(request, response){

    const {usuario, nome} = request.body; //obter os dados ( usuario e nome ) do corpo/body do pedido

    let res = await authSchema.findOne({usuario}); // verificar se ja existe o usuario

    const token = gerarToken();
    // if para caso não existir executar a criação , caso sim retornar o usuario
    if(!res){
        res = await authSchema.create({
            usuario,
            nome,
            token
        });
    } 
    response.status(201).json(res); // resposta em json com dados do usuario criado com o status 
   },
   // Login / verificar se existe o usuario na base de dados
   async login(request, response){
       const {id} = request.body; // desestruturação para obter o id enviado no corpo do pedido

       try {
        let res = await authSchema.findOne({ _id: id }); // verificar na db se existe esse usuario com o id fornecido
        // caso o usuario seja valido ele ira retornar o nome do usario e o token para ser guardados na localStorage 
        response.status(202).json({
                code: 202,
                message: "autenticated",
                token: res.token,
                usuario: res.usuario
        });
       } catch (error) {
        response.status(401).json({
            code: 401,
            message: "error a autenticar o usuario, peço que certifique-se que o id esteja correcto"});
       }
   }
   // add forgot id
}