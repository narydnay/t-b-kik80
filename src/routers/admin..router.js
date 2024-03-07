const { Router } = require('express');
const { admin } = require('../controllers/admin.controller');
const routers = Router();

routers.get('/', admin)

module.exports = routers;