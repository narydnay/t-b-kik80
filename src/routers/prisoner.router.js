const { Router } = require('express');
const { addPrisonerCustom } = require('../controllers/prisoner.controller');

const routerPrisoner = new Router();

routerPrisoner.post('/add-risoner', addPrisonerCustom);


module.exports = routerPrisoner;