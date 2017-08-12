var serve = require('koa-static');

module.exports = function(app) {
	app.use(serve(__dirname));

}