// packages needed for node.js to connect
const mysql = require('mysql');
// probably not needed for final product
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
				// getting sql from command line
				// needs to be changed for ui
				var sql = prompt("what sql");
				// actually sending the sql code to server
				// not sure why fields is necessary, but it is
				con.query(sql, function(err, result, fields) {
								if (err) throw err;
								console.log(result);
				});

				// closes connection after it's done
				con.end(function(err) {
								if (err) throw err;
								console.log("ending connection");
				});
});
