const { Router } = require('express');
const routerPrisoner = new Router();
const { addPrisonerCustom, addPrisonerFile, getAllPrisoner } = require('../controllers/prisoner.controller');

routerPrisoner.get('/get-all-prisoners', getAllPrisoner);

routerPrisoner.get('/add-prisoner', addPrisonerCustom);
routerPrisoner.post('/add-prisoner-file', addPrisonerFile);

module.exports = routerPrisoner;