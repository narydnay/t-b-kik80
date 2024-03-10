const { Router } = require('express');
const routerPrisoner = new Router();
const { getListPrisonerCustom, addPrisonerFile, getAllPrisoner } = require('../controllers/prisoner.controller');

routerPrisoner.get('/get-all-prisoners', getAllPrisoner);

routerPrisoner.get('/add-prisoner', getListPrisonerCustom);
routerPrisoner.post('/add-prisoner-file', addPrisonerFile);

module.exports = routerPrisoner;