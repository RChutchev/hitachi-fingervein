console.log("Cool!");
setTimeout(() => {
    console.log("Yeahyeahyeah!!");
}, 3000);

var SerialPort = require('serialport');
var port = new SerialPort('/dev/ttyACM0', function (err) {
    if (err) {
        return console.log('Error: ', err.message);
    }
});

const buf1 = Buffer.from([17, 0, 2, 2, 0]);
console.log(buf1);

port.write(buf1, function(err) {
    if (err) {
        return console.log('Error on write: ', err.message);
    }
    console.log('message written');
});

port.on('readable', function() {
    console.log('Data: ', port.read());
});
