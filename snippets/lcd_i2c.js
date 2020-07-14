I2C1.setup({scl:B6, sda:B7});
var lcd = require("HD44780").connectI2C(I2C1, 0x3F);  // default 0x27
lcd.print("Hello World!");

// geht nicht mit gn LCD PCF8574 8 bit IO expander, pull ups?