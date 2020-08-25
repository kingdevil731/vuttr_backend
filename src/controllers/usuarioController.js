const authSchema = require('../models/authSchema'); //schema para autentição

module.exports = {
   /*
    token para ser usado nas chamadas da api / melhor segurança.
    token sera guardado no localStorage do usuario, para a app obter directamente
    token sera nesse caso i _id, sendo que o mongodb ja nos da um String alertoria e unica
    */
   async criarUsuario(request, response){

    const {usuario, nome} = request.body; //obter os dados ( usuario e nome ) do corpo/body do pedido

    const res = await authSchema.findOne({usuario}); // verificar se ja existe o usuario

    // if para caso não existir executar a criação , caso sim retornar o usuario
    if(!res){
        res = await authSchema.create({
            usuario,
            nome
        });
    } 
    response.status(201).json(res); // resposta em json com dados do usuario criado com o status 
   }
}