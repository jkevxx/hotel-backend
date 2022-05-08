/**
 * This main router is exported to general index of program
 */
const express = require('express');
const router = express.Router()

const roomRouter = require('./roomRouter');
const typeRoomRouter = require('./typeRoomRouter');
const employeeRouter = require('./employeeRouter');
const prereservationRouter = require('./prereservationRouter');
const photoRouter = require('./photoRouter');


function routerApi(app) {
  app.use('/api/v1', router);
  router.use('/rooms', roomRouter);
  router.use('/typeRoom', typeRoomRouter);
  router.use('/', employeeRouter);
  router.use('/prereservation', prereservationRouter);
  router.use('/photo', photoRouter);
}


module.exports = routerApi;

