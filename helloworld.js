function say(filename, cb){
//function say(filename){
	//return contents = fs.readFileSync(filename);
	//return contents = fs.readFile(filename, function(contents){	});
	//return fs.readFile(filename, cb);
	return fs.readFile(filename, function(err, contents){
		if(err){
			cb(err);
		}else{
			setTimeout(function(){
				cb(null, contents);
			},1000);
		}
	});
}

var fs = require("fs");
// Public Api
module.exports.say = say;