function readFile(filename){
//function say(filename){
	//return contents = fs.readFileSync(filename);
	//return contents = fs.readFile(filename, function(contents){	});
	//return fs.readFile(filename, cb);
	var sq = ASQ();
	fs.readFile(filename, sq.errfcb());
	return sq;
}

function delayMsg(done,contents){
	setTimeout(function(){
		done(contents);
	}, 1000);
}
function say(filename){

	return readFile(filename)
		.then(delayMsg);
}

var fs = require("fs");
var ASQ = require("asynquence");
require("asynquence-contrib");

// Public Api
module.exports.say = say;