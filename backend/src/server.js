/***
 * Rota /Recurso
 */

 /** 
  * Métodos HTTP:
  * GET:Buscar/listar uma informação back-end
  * POST:Criar uma informação back-end
  * PUT:Alterar uma informação back-end
  * DELETE:Deletar uma informação back-end
  */

 /**
   * Tipos de Parâmetros 
   * 
   * Query Params: Parãmetros nomeados na rota após "?" (Filtros, paginação)
   * Route Params: Parãmetros ultilizados para iidentificar recursos
   * Request Body: Corpo da Requisição, utilizado para criar ou alterar recursos
   */

  const express = require('express');
  const routes = require('./routes');
  const cors = require('cors');
  const app = express();
  
  app.use(cors());
  app.use(express.json());
  app.use(routes);

  app.listen(3333);
  

//cors uma biblioteca de segurança "npm install cors"