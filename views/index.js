var render = require('koa-ejs');
var path = require('path');

module.exports = function(app) {
	render(app, {
		root: path.join(__dirname),
		layout: 'layout',
		viewExt: 'ejs',
		cache: false,
		debug: false
	});
}