const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes')


const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

module.exports = app;

/**
    * Rota / Recurso
*/ 

/**
    * Métodos HTTP:
    *
    * GET: Buscar/ Listar uma informação do back-end 
    * POST: Criar uma informação no back-end  
    * PUT: Alterar uma informação no back-end
    * DELETE: Deletar uma informação no bakc-end
*/

/**
    * Tipos de parâmetros:
    * 
    * Query Params: Parâmetros nomeados e enviados na rota após "?" (Filtros, paginação)
    * Route Params: Parâmetros utilizados para identificar recursos
    * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
    * 
*/

/**
    * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft, SQL Server
    * NoSQL: MongoDB, CouchDB, etc
*/ 

/**
    * Driver: SELECT * FROM users
    * Query Builders: table('users').select('*').where()
*/