// 0x76
I2C1.setup({scl:B6,sda:B7});
var bme = require("BMP280").connect(I2C1);
console.log(bme.getData());