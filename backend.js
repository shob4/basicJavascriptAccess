var mysql = require('mysql');

// creates a connection to server using username and password
var con = mysql.createConnection({
				host: "localhost",
				user: "root",
				password: "password"
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

con.connect(function(err) {
				if (err) throw err;
				console.log("connected!");
});

con.end(function(err) {
				if (err) throw err;
				console.log("ending connection");
});

console.log("hello world");
