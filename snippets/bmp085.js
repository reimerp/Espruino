I2C1.setup({scl:B6,sda:B7});
//I2C3.setup({scl:A8,sda:C9});

//0x77
var bmp = require("BMP085").connect(I2C1);
setInterval(function() {
  bmp.getPressure(function(d) {
    console.log("Pressure: " + d.pressure + " Pa");
    console.log("Temperature: " + d.temperature + " C");
  });
}, 1000);

// 101826 Pa 28.5875 °C