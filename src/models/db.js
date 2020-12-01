const Sequelize = require("sequelize");

	// Conexão com o Banco de Dados MySQL
	const sequelize = new Sequelize("u668533246_cdl", "u668533246_cdl", "JPmlZk5wcgtLb8qkNoMiHRKLeCY03OjCfMn4xjqPFbbhZIHnxUL5mXGGZf6RtgUO", {
		host: "sql295.main-hosting.eu",
		dialect : 'mysql',
		port: '3306'
	});

module.exports = {
	Sequelize: Sequelize,
	sequelize: sequelize
}