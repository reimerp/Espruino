/* connect
VCC: VDD
GND: GND
DIN: PB15
CS : PB14
CLK: PB13
*/
SPI2.setup({mosi:B15, sck:B13});
var disp = require("MAX7219").connect(SPI2, B14);
disp.set("--HELP--"); // disp can display strings with the following chars: 0123456789-EHLP

setTimeout(function() {
  disp.raw([1,2,4,8,16,32,64,128]); // you can set the LEDs directly zählt ab links
}, 1000);

setTimeout(function() {
  var n = 0;
  setInterval(function() {
    disp.set(n++); // it can display integers
    disp.intensity(0.5 + 0.5 * Math.sin(n * 0.2)); // you set set intensity
  }, 100);
}, 2000);