const express = require("express");
require('express-async-errors');
const bot = require('./src/telegram/index');
const config = require('./src/config/config');
const bodyParser = require('body-parser');
const routers = require("./src/routers/admin.router");
const { noFound, errorHandler } = require("./src/middlewares/noFound");
const routerPrisoner = require("./src/routers/prisoner.router");
const swaggerFile = require('./dist/swagger.json')
const swaggerUi = require('swagger-ui-express');
const app = express();

const CSS_URL =
  "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui.min.css";

app.use(bodyParser.json())
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerFile, { customCssUrl: CSS_URL }))

app.use(bot.webhookCallback(config.getWebHookpath('shot')));
bot.telegram.setWebhook(config.getWebHookpath('full'));

app.use('/api', routerPrisoner)
app.use(routers);

app.use(noFound);
app.use(errorHandler);

app.listen(config.get('port'), () => {
  console.log("Running on port 5001.");
});


// Export the Express API


module.exports = app;
