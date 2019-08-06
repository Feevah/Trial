
var http = require("http");
var url = require('url');
var fs = require("fs");
// var parse = require('querystring');
var path = require('path');

const server = http.createServer(function (req, res) {

		var parUrl = url.parse(req.url, true);
		var filePath = '.' + parUrl.pathname;




// Serving pages

		if(parUrl.pathname === ('/')){
			fs.readFile("index.html", function (err, content) {
			res.writeHead(200, { 'Content-Type': "text/html" });
			return res.end(content);
		});
		} else if (parUrl.pathname === ('/index.css')){
		fs.readFile("index.css", function(err, content){
			res.writeHead(200, {'content-Type': "text/css"});
			res.end(content);
		});
	    } else if (parUrl.pathname === ('/reset.css')){
		fs.readFile("reset.css", function(err, content){
			res.writeHead(200, {'content-Type': "text/css"});
			res.end(content);
		});
	    } if (parUrl.pathname === ('/email/show')){
			res.writeHead(200, { 'Content-Type': "application/json", "access-control-allow-origin": '*' });
		
		// Veronica's team will make the db.js file
			db.getEmail().then( function(result){
				res.write(result);
				res.end();
			}).catch(console.log)
		
		}   


		// GET Request
		// if (req.method === "GET") {
  //       res.writeHead(200, { "Content-Type": "text/html" });
  //       fs.createReadStream("./public/form.html", "UTF-8").pipe(res);

	    // else if (parUrl.pathname === ('/storySteady.js')){
	    // fs.readFile("storySteady.js", function(err, content){
	    // 	res.writeHead(200, {'content-Type': "application/javascript"});
	    // 	return res.end(content);
	    // });
	    // }

	    


	
	})
	server.listen(8080, function () {
			console.log("Listening on Port: "+ 8080);
		});



		

		

	



 

