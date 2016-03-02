var casper = require('casper').create({viewportSize: {width: 800, height: 600}});
// console.log("coucuo");
// var casper = require("casper");

casper.start('http://localhost:3000', function() {
    this.captureSelector('grab1.png', '#s1');
    this.captureSelector('grab2.png', '#s2');
	console.log("done");
});

casper.run();