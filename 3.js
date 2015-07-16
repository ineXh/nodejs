#!/bin/env node	// turns file into executable script
function printHelp(){
	console.log("3.js (c) Anthony Siu");
	console.log("");
	console.log("usage:");
	console.log("--help			print this help");
	console.log("--file={NAME}	read the file of {NAME} and output it");
	console.log("");
}
// write some node code
//console.log("Hello World");
//process.stdout.write("Hello World");
//
var args = require("minimist")(process.argv.slice(2), {string: "file"});
if (args.help || !args.file){
	printHelp();
	process.exit(1);
}
//var name = process.argv[2];
//var name = args.name;
//console.log("Hello " + name);

var hello = require("./helloworld2.js");

hello.say(args.file).val(function(content){
		console.log(contents.toString());
	}
});