/**
 * This main router is exported to general index of program
 */
const express = require('express');
const router = express.Router()

const roomRouter = require('./roomRouter');
const typeRoomRouter = require('./typeRoomRouter');


function routerApi(app) {
  app.use('/api/v1', router);
  router.use('/rooms', roomRouter);
  router.use('/typeRoom', typeRoomRouter);
}


module.exports = routerApi;

