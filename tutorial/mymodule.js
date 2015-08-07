// Exercise 6
var fs = require('fs')
module.exports = function(dir, extension, callback){
	fs.readdir(dir, function (err, list) {
		if(err) return callback(err)
		
		var array = []
		for(var i = 0; i < list.length; i ++){
			var file = list[i].split('.')
			var name = file[0]
			var type = file[1]
			if(type == extension){
				array.push(list[i])
			}
		}
		callback(null, array)
	})
	
}