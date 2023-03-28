var mysql = require('mysql');

// creates a connection to server using username and password
var con = mysql.createConnection({
				host: "localhost",
				user: "username",
				password: "password"
});

con.connect(function(err) {
				// throws error if not connected
				if (err) throw err;
				console.log("connected!");
				// query database
				con.query(sql, function (err, result) {
								if (err) throw err;
								console.log("Result: " + result);
				});
});

console.log("hello world");
