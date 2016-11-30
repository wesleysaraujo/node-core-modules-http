var http = require('http')

var createRouter = (port) => {
	var api = {}
	var routes = {}
	var methods = ['GET', 'POST']

	methods.forEach((method) => {
		routes[method] = {}
		api[method.toLowerCase()] = (path, fn) => {
			routes[method][path] = fn
		}
	})

	http.createServer( (req, res) => {
		res.setHeader('Access-Control-Allow-Origin', '*')
		
		if(!routes[req.method][req.url]) return res.end()

		routes[req.method][req.url] (req, res)
	}).listen(port)

	return api
}

module.exports = createRouter