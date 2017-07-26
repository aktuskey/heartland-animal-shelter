const keystone = require('keystone')


keystone.init({
	'name': 'Heartland Animal Shelter',
	// 'favicon': 'public/favicon.ico',
	'static': ['public'],

	'views': './routes/views',
	'view engine': 'pug',

	'auto update': true,
	'mongo': 'mongodb://localhost/heartland',

	'session': true,
	'auth': true,
	'user model': 'User',
	'cookie secret': 'cookie'
});

keystone.import('models')

keystone.set('routes', require('./routes'));

keystone.start();