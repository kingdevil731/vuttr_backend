// Schema
const toolSchema = require('../models/toolSchema');
//TODO CHECK EVERYTHING IF DONE/ALL TODOS
module.exports = {
    // listar todas as ferramentas no sistema
    async listar(request, response) {
        const res = await toolSchema.find();
        response.json(res);
    },
    // listar ferramentas através do query, dando resposta apenas ferramentas que contem a tag pedida
    async filtrarConteudo(request, response){
        const {tag} = request.query;
        const res = await toolSchema.find({
            tags: {
                $in: tag
            }
        });
        response.json(res);
    },
    // cadastrar uma nova rota
    async cadastarNovo(request, response){
        const {title, link, description, tags} = request.body; // desestruturação do body , para obter os valores que precisamos para cadastrar uma nova ferramenta

        // TODO add a verification to see if the data to be inserted already exists  in the db
        //  criação da row/data na base de dados / db com as informações que tiramos passadas do body
        const res = await toolSchema.create({
            title,
            link,
            description,
            tags
        });
        response.status(201).json(res); // enviarmos uma resposta para usuario com os dados criados da db
    },
    // remover uma ferramenta através do id passado na rota
    async removerFerramenta(request, response){
        const {id} = request.params;
        console.log(id);
        const res = await toolSchema.findByIdAndRemove({_id: id});
        //THE if might not be necessary as the ui will give an id to delete, that exists in the database .. TODO verify if is really needed the if
        if(res != null){
            response.status(204).json(res);
        } else {
            response.status(404).json(res);
        }
    }
};