I2C1.setup({scl:B6,sda:B7});

var foo = require("SI7021").connect(I2C1);
console.log(foo.readTemperature()); // in celsius
console.log(foo.readRelativeHmidity());