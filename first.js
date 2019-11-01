
var http=require("http");
http.createServer(function(req,res){
	res.writeHead(200,{'content-type':'text/plain'});
	res.end("welcome");
}).listen(8080);
console.log("server running");