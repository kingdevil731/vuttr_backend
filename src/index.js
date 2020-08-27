// Imports / Importações
// express
const express = require('express');
// mongoose - db
const mongoose = require('mongoose');
// rotas
const routes = require('./routes');
// celebrate
const {errors} = require('celebrate');
//cors para permitir acesso fora da rede
const cors = require('cors');
// conexão com a base de dados hospedado na cloud / para deploy
mongoose.connect('mongodb+srv://omni:omni@cluster0.vuy2a.mongodb.net/vuttr?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});
// port and host
const PORT = 3000;
//const HOST = '0.0.0.0';
// init do express na constante app
const app = express();
// para habilitar o uso de json na api
app.use(express.json());
// usar o cors , que permite o acesso fora da rede ( header cross-origin )
app.use(cors());
// usar rotas
app.use(routes);
// usar erros para deixar a aplicação saber como proceder com o erro
app.use(errors());
// escutar a porta 3000
app.listen(process.env.PORT || 2000);