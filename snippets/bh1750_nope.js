I2C1.setup({scl:B6, sda:B7});
var addr = 0x23;
var bh=require("BH1750").connect(I2C1, addr);
var resolution = 2;
var onetime = true;
bh.start(resolution, onetime);
var lux= bh.read();
console.log(lux);
