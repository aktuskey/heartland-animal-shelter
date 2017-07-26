module.exports = (app) => {

	console.log('Initializing routes...')

	app.get('/', (req, res) => {
		console.log('Got home route')
		res.send('Homepage!')
	})

	app.get('/about', (req, res) => {
		console.log('Got about route')
		res.send('About?')
	})

}