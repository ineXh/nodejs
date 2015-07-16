#!/bin/env node	// turns file into executable script
function printHelp(){
	console.log("1.js (c) Anthony Siu");
	console.log("");
	console.log("usage:");
	console.log("--help			print this help");
	console.log("--name			say hello to {NAME}");
	console.log("");
}
// write some node code
//console.log("Hello World");
//process.stdout.write("Hello World");
//
var args = require("minimist")(process.argv.slice(2), {string: "name"});
if (args.help || !args.name){
	printHelp();
	process.exit(1);
}
//var name = process.argv[2];
var name = args.name;
console.log("Hello " + name);