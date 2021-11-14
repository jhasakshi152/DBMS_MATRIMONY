var mysql = require('mysql');

module.exports = {
	connection : mysql.createConnection ({
		host : 'localhost',
		database : 'node_matrimony',//'DBMSproject', this is our db name that we will create
		user : 'root', // mysql username
	 	password : '', //mysql password
	})
}
