var Router = require('koa-router');
var router = new Router();
var iplocation = require('iplocation');


module.exports = function(app) {

	router.get('/', async(ctx) => {
		let ip = ctx.request.ip;
		let info = await iplocation(ip);
		await ctx.render('location', {
			data: info
		});
	});

	app.use(router.routes());

}