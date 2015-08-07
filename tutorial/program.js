//console.log("HELLO WORLD")
//console.log(process.argv.length);
//console.log(process.argv);
// Exercise 2
/*var sum = 0;
for(i = 2; i < process.argv.length; i++){
	sum += +process.argv[i]; 
}
console.log(sum)*/

// Exercise 3
/*var fs = require('fs')
var file = process.argv[2]
var Buffer = fs.readFileSync(file)
var str = Buffer.toString()

console.log(str.split("\n").length-1)*/
/*
// Exercise 4
var fs = require('fs')
var file = process.argv[2]

fs.readFile(file, 'utf8', function (err, data) {
  if (err) throw err;
  //fs.readFile(file,'utf8', callback) can also be used
  console.log(data.toString().split("\n").length-1);
});
*/
/*// Exercise 5
var fs = require('fs')
var path = process.argv[2]
var fileextension = process.argv[3]
//console.log(fileextension)
var sum = 0
fs.readdir(path, function (err, list) {
	for(var i = 0; i < list.length; i ++){
		var file = list[i].split('.')
		var name = file[0]
		var type = file[1]
		if(type == fileextension){
			console.log(list[i])
		}
	}
})*/
/*
// Exercise 6
var mymodule = require('./mymodule.js')

var path = process.argv[2]
var fileextension = process.argv[3]

mymodule(path, fileextension, function(err, filtered_list){
	//console.log("callback fcn")
	if(err) console.error("There is an error: ", err)
	//console.log(filtered_list)
	filtered_list.forEach(function(item){
		console.log(item)
	})
})*/
/*
// Exercise 7
URL = process.argv[2]
var http = require('http')
//console.log(URL)
//var response
http.get(URL, function(response) {
	//console.log("Got response: " + response.statusCode)
	//response
	res = response.setEncoding('utf8')
	res.on('data', function(d){
		console.log(d)
	})
	res.on('error', function(e){
		console.log(e)
	})
})

/*}).on('error', function(e) {
  console.log("Got error: " + e.message);*/
/*
.on('data', function(data){
		console.log("Got data: " + data.message)
	})*/
	
/*// Exercise 8
URL = process.argv[2]
var http = require('http')
var bl = require('bl')

http.get(URL, function(response) {	
	response.pipe(bl(function(err, data){
		console.log(data.toString().length)
		console.log(data.toString())
	}))
})*/
/*
// Exercise 9
var http = require('http')
var bl = require('bl')

URL0 = process.argv[2]
URL1 = process.argv[3]
URL2 = process.argv[4]
var results = []
var count = 0
function printResults(){
	for(var i = 0; i < 3; i++){
		console.log(results[i])
	}
}
http.get(URL0, function(response) {	
	response.pipe(bl(function(err, data){
		//console.log(data.toString())		
		results[0] = data.toString()
		count++;
		if(count == 3) printResults();
	}))
})
http.get(URL1, function(response) {	
	response.pipe(bl(function(err, data){	
		results[1] = data.toString()
		count++;
		if(count == 3) printResults();
	}))
})
http.get(URL2, function(response) {	
	response.pipe(bl(function(err, data){
		results[2] = data.toString()
		count++;
		if(count == 3) printResults();
	}))
})
*/
/*
// Exercise 10
var net = require('net')
port = process.argv[2]
console.log("port: " + port)

var date = new Date()
month = (date.getMonth() <= 10) ? "0" + (date.getMonth() + 1): (date.getMonth() + 1)
day =  (date.getDate() <= 10) ? "0" + (date.getDate()): (date.getDate())
var data = "" + date.getFullYear() + "-" +  month + "-" + day + " " + date.getHours() + ":" + date.getMinutes() + "\n";
//console.log(data)
var server = net.createServer(function(socket){
	socket.write(data)
	socket.end()
})
server.listen(port)*/
/*
// Exercise 11
var http = require('http')
var fs = require('fs')
port = process.argv[2]
file = process.argv[3]

server = http.createServer(function(request, response) {
  fs.createReadStream(file).pipe(response);
});
server.listen(process.argv[2]);*/

/*// Exercise 12
var http 	= require('http')
var map 	= require('through2-map')
server = http.createServer(function(request, response) {
	request.pipe(map(function(chunk){
		return chunk.toString().split('').join('').toUpperCase()
	})).pipe(response)
});
server.listen(process.argv[2]);*/
// Exercise 13
var http = require('http')
var url = require('url')

var routes = {
  "/api/parsetime": function(parsedUrl) {
    d = new Date(parsedUrl.query.iso);
    return {
      hour: d.getHours(),
      minute: d.getMinutes(),
      second: d.getSeconds()
    };
  },
  "/api/unixtime": function(parsedUrl) {
    return {unixtime: (new Date(parsedUrl.query.iso)).getTime()};
  }
}

server = http.createServer(function(request, response) {
  parsedUrl = url.parse(request.url, true);
  resource = routes[parsedUrl.pathname];
  if (resource) {
    response.writeHead(200, {"Content-Type": "application/json"});
    response.end(JSON.stringify(resource(parsedUrl)));
  }
  else {
    response.writeHead(404);
    response.end();
  }
});
server.listen(process.argv[2]);