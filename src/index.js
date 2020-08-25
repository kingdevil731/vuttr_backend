// Imports / Importações
// express
const express = require('express');
// mongoose - db
const mongoose = require('mongoose');
// rotas
const routes = require('./routes');
//cors para permitir acesso fora da rede
const cors = require('cors');
// conexão com a base de dados hospedado na cloud / para deploy
mongoose.connect('mongodb+srv://omni:omni@cluster0.vuy2a.mongodb.net/vuttr?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});

// init do express na constante app
const app = express();
// para habilitar o uso de json na api
app.use(express.json());
// usar o cors , que permite o acesso fora da rede ( header cross-origin )
app.use(cors());
// usar rotas
app.use(routes);
// escutar a porta 3000
app.listen(3000);