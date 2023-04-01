const mysql = require('mysql');
const prompt = require('prompt-sync')();

// creates a connection to server using username and password
var con = mysql.createConnection({
				host: "localhost",
				user: "root",
				password: "password",
				database: "helloworld"
});

//con.connect(function(err) {
//				// throws error if not connected
//				if (err) throw err;
//				console.log("connected!");
//				// query database
//				con.query(sql, function (err, result) {
//								if (err) throw err;
//								console.log("Result: " + result);
//				});
//});

// all of these are function calls
con.connect(function(err) {
				if (err) throw err;
				var sql = prompt("what sql");
				con.query(sql, function(err, result, fields) {
								if (err) throw err;
								console.log(result);
				});

				con.end(function(err) {
								if (err) throw err;
								console.log("ending connection");
				});
});
