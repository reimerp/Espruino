  I2C1.setup({sda:B7, scl:B6});

  var tsl = require('TSL2561').connect(I2C1);

  tsl.init(tsl.C.FLOAT,
           tsl.C._101MS,
           tsl.C._1X);

  var i = setInterval(function () {
    tsl.getLuminosity(
      tsl.C.VISIBLE,
      function (x) { print ("L="+x); }
    );
  }, 1000);
