var Koa = require('koa');
var app = new Koa();
app.proxy = true;

var config = require('./config');
var statics = require('./static')(app);
var views = require('./views')(app);
var routes = require('./routes')(app);
var logger = require('koa-logger');


var chalk = require('chalk');

app.use(logger());


let port = process.env.PORT || config.app.port;
app.listen(port, () => {
	console.log(chalk.yellow('Сервер работает на порту ' + port + '...'));
});