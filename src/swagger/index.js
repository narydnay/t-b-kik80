const {join} = require('path');
const swaggerAutogen = require('swagger-autogen')();
const config = require('../config/config')

// базавая инфа об app
const doc = {
  info: {
    title: 'Нарядная online',
    description: 'Приложение для помощи сотрудникам КВК-80'
  },
  host: process.env.NODE_ENV === 'development' ? `Localhost:${config.get('port')}` : `${config.get('host')}`
};
// путь и название генерируемого файла
const outPutFile = join(__dirname, '../../','dist/', 'swagger.json');

// массив путей к роутерам
const endpointFiles = [
  // join(__dirname, '../controllers/admin.controller.js'),
  join(__dirname, '../routers/prisoner.router.js'),
];
console.log(endpointFiles)
swaggerAutogen(outPutFile, endpointFiles, doc)
  .then(({success})=>{
    require(join('../../index.js'));
    console.log(`File was generation success ${success}`)
  })
console.log(outPutFile)