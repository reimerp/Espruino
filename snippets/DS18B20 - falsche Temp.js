var ow = new OneWire(B13);
var sensor = require("DS18B20").connect(ow);

/*setInterval(function() {
  console.log(sensor.getTemp());    // 85°
}, 1000);*/

function test() {
var serialCode = ow.search()[0];// "10949d8d020800b0" auf Uhr
console.log(serialCode);

var t = serialCode - ((serialCode >> 8) << 8);

console.log(t);
//28232a53040000d9 geschrumpft

sensor.getRes();  // 12

sensor.setRes(9);
sensor.getRes();

sensor._readSpad(); // 9 Byres

sensor._readSpad(true);

console.log(sensor.getTemp());
console.log(sensor.getTemp());
}

test();