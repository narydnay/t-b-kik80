const { Router } = require('express');
const { admin } = require('../controllers/admin.controller');
const { test } = require('../controllers/test.controller');
const routers = Router();

routers.get('/', admin)
routers.get('/test', test)

module.exports = routers;