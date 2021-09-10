const proxy = [
	// BUSCANDO DADOS NO TESTE
	{
		context: '/api',
		target: {
			host: "localhost",
			port: 3333,
			protocol: "http:"
		},
		changeOrigin: true,
		secure: false
	}
	// LOCAL
	// {
	// 	context: "/api",
	// 	target: "http://192.168.99.100:8762",
	// }
];
module.exports = proxy;
