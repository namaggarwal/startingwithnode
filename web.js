
//Get the HTTP Module
var http=require('http');

//Create the HTTP server
var server= http.createServer();

//Start Server to listen for request on localhost at port 8080
server.listen(8080,'127.0.0.1');

//attach event on Request to call function SendResonse
server.on('request',sendResponse);
 
//Catches the request and sends the Response
function sendResponse(req,res){

//Response Header
res.writeHead(200,'Content-type:text/plain');

//Response content
res.write("Hello World");

//End and send the response
res.end();
 
}
//Log that server has started
console.log("Server Started at 127.0.0.1:8080");