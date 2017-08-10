var Koa = require('koa');
var app = new Koa();
var logger = require('koa-logger');


app.use(logger());
app.use(async (ctx) => {
	ctx.body = 'Ce kavo';
});
app.listen(8000);