I2C1.setup({scl:B6, sda:B7});
var lcd = require("HD44780").connectI2C(I2C1);
lcd.print("Hello World!");
setTimeout(function() { lcd.clear(); }, 2000);
lcd.cursor();
lcd.cursor(true);
lcd.setCursor(5,2);lcd.print("x");    //?