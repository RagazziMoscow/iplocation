var Koa = require('koa');
var app = new Koa();
var logger = require('koa-logger');
var serve = require('koa-static');
var Router = require('koa-router');
var router = new Router();
var render = require('koa-ejs');
var path = require('path');
var chalk = require('chalk');
var iplocation = require('iplocation');

render(app, {
  root: path.join(__dirname, 'views'),
  layout: 'layout',
  viewExt: 'ejs',
  cache: false,
  debug: false
});

router.get('/', async (ctx) => {
	let ipHeader = ctx.request.header['x-forwarded-for'];
	let ip = (ipHeader) ? ipHeader.split(',')[0] : '127.0.0.1';
	let info = await iplocation(ip);
	//console.log(info);
	await ctx.render('location', {data: info});
});



app.use(logger());
app.use(serve(__dirname + '/static'));
app.use(router.routes());


var port = process.env.PORT || 8000;
app.listen(port, ()=> {
	console.log(chalk.yellow('Сервер работает на порту ' + port +'...'));
});