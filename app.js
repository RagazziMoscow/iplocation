var Koa = require('koa');
var app = new Koa();
var logger = require('koa-logger');
var serve = require('koa-static');
var chalk = require('chalk');


app.use(logger());
app.use(serve(__dirname + '/static'));

app.use(async (ctx) => {
	ctx.body = 'Ce kavo';
});


var port = 8000;
app.listen(port, ()=> {
	console.log(chalk.yellow('Сервер работает на порту ' + port +'...'));
});