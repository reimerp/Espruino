function isDeviceOnBus(i2c, addr) {
  try {
    r = i2c.readFrom(addr,1);    // Timeout on I2C Read Receive Mode
    return typeof r === 'object';
  } catch(e) {
    return false;
  }
}
function i2cdetect( i2c, first, last ) {
  if (typeof first === "undefined") first = 0x03;
  if (typeof (last) === "undefined") last = 0x77;
  print( "     0  1  2  3  4  5  6  7  8  9  a  b  c  d  e  f" );
  for (var upper = 0; upper < 8; ++upper) {
    var line = upper + "0: ";
    for (var lower = 0; lower < 16; ++lower) {
      var address = (upper << 4) + lower;
      // Skip unwanted addresses
      if ((address < first) || (address > last)) {
        line += "   ";
        continue;
      }
      if (isDeviceOnBus(i2c,address) ){
        line += (address + 0x100).toString( 16 ).substr( -2 )+" ";
      } else 
        line += "-- ";
    }
    print( line );
  }
}

I2C1.setup({scl:B6,sda:B7});

setTimeout(function() { i2cdetect( I2C1, 0x00, 0x7f); }, 1000);
