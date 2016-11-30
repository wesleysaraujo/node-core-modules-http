var router = require('./router')
var app = router(3412)

var operadoras = [
	{"nome" : "Oi", "codigo" : 35, "categorira" : "Celular", "preco" : 1.5},
	{"nome" : "Vivo", "codigo" : 31, "categorira" : "Celular", "preco" : 2},
	{"nome" : "Tim", "codigo" : 41, "categorira" : "Celular", "preco" : 3},
]

app.get('/operadoras', (req, res) => {
	res.write(JSON.stringify(operadoras))
	res.end()
})