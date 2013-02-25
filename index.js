var fs = require('fs');
var emblem = require('emblem');
var handlebars = require('handlebars');

var vanillaText = fs.readFileSync("example.hbs").toString();
var hasPartialText = fs.readFileSync("hasPartial.hbs").toString();

console.log("\n\n\n\nCompiling example\n\n\n\n");
var vanillaResult = emblem.precompile(handlebars, vanillaText);
console.log(vanillaResult + "\n\n\n\n\n");

console.log("Compiling hasPartial\n\n\n\n");
var hasPartialResult = emblem.precompile(handlebars, hasPartialText);
console.log(hasPartialResult)
