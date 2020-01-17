const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');
const http = require('http');
const { setupWebsocket } = require('./websocket');



const app = express();
const server = http.Server(app);

setupWebsocket(server);

mongoose.connect('mongodb+srv://Assis:Assispass@seuassis-qemlt.gcp.mongodb.net/week10?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());
app.use(routes);


// Métodos HTTP: GET, POST, PUT, DELETE

// Tipos de parâmetros:

//Query Params: req.query (Filtros, Ordenação, Paginação, ...)
//Route Params: req.query (Identificar um recurso na alteração ou remoção)
//Body: req.body (Dados para criação ou alteração de um registro)



server.listen(3333);