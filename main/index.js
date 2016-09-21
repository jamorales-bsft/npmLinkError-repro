var mod1 = require("mod1") // this is main/node_modules/mod1
var file1 = require("file1") //changes mod1.someSetting to true

console.log(mod1.someSetting, "<-- is the wrong value this should be true")


//The problem is file1 module which is npm linked into main/node_modules/file1 cannot use
//the mod1 module already in main/node_modules/mod1. Instead it needs it's own
//in file1/node_modules/mod1. This effectively decouples the two in a non obvious way
//so (main/node_modules/mod1).someSetting is not the same as
//(file/node_modules/mod1).someSetting
