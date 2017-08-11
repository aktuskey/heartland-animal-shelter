const keystone = require('keystone')

module.exports = (app) => {

	console.log('Initializing routes...')

	const getHomePageSettings = () =>
		keystone.list('Settings').model
			.find({ type: 'Homepage' })
			.exec()
			.then(grabFirst)
			.catch(returnErrorObject)

	const viewPage = (templateName) => (res) => (data) =>
		res.render(templateName, {
			page: data
		})

	const viewHomepage = viewPage('home')
	const viewAboutPage = viewPage('about')

	const grabFirst = (list) =>
		list[0]

	const returnErrorObject = (reason) => ({
		error: reason
	})

	app.get('/', (req, res) => {
		getHomePageSettings()
			.then(viewHomepage(res))
	})

	app.get('/about', (req, res) => {
		console.log('Got about route')
		res.send('About?')
	})

}