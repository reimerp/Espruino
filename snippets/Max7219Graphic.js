SPI2.setup({mosi:B15, sck:B13});
var disp = require("MAX7219").connect(SPI2, B14);
// geht mit EINEM Matrix, 8x8 nicht zweien...

var g = Graphics.createArrayBuffer(8, 8, 1); // Create graphics
g.flip = function() { disp.raw(g.buffer); }; // To send to the display
g.setRotation(1, 1); // rotate and flip - to get the orientation correct

g.drawString("HiHo");
g.flip();