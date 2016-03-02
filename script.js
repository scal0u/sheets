var casper = require('casper').create();
// console.log("coucuo");
// var casper = require("casper");

casper.start('http://localhost:3000', function() {
    this.captureSelector('grab.png', '.selector');
	console.log("done");
});

casper.run();