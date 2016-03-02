var casper = require('casper').create();
// console.log("coucuo");
// var casper = require("casper");

casper.start('http://localhost:3000', function() {
    this.captureSelector('jumbotrons.png', '.jumbotron');
	console.log("done");
});

casper.run();