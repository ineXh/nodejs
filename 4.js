#!/bin/env node	// turns file into executable script
function printHelp(){
	console.log("4.js (c) Anthony Siu");
	console.log("");
	console.log("usage:");
	console.log("--help			print this help");
	console.log("--file={NAME}	read the file of {NAME} and output it");
	console.log("");
}
var args = require("minimist")(process.argv.slice(2), {string: "file"});
if (args.help || !args.file){
	printHelp();
	process.exit(1);
}
var hello = require("./helloworld4.js");

hello.say(args.file)
.val(function(contents){
	console.log(contents.toString());
})
.or(function(err){
	console.error("Error: " + err);
})
