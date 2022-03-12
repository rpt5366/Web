var fs= require('fs');
// var rs = fs.createReadStream('./demofile.txt');
/*
rs.on('open', function()
{
   console.log('The file is open');
});*/

var events = require('events');
var eventEmitter = new events.EventEmitter();

var myEventHandler = function(){
    console.log("This is a event handling");
}

eventEmitter.on('scream', myEventHandler);
eventEmitter.emit('scream');



