exports.connect = function(/*=SPI*/_spi,/*=PIN*/_cs) {
  var spi = _spi;
  var cs = _cs;
  spi.send ([0xA,0xF],cs);  // intensity  -full
  spi.send ([0xB,0x7],cs);  // scan limit - all 8 chars
  spi.send ([0xC,0],cs);    // shutdown
  return {
    /// Display the given characters - only 0123456789-EHLP are possible
    set : function(val) {
      spi.send ([0x9,0xFF],cs); // decode all as numbers
      var map = "0123456789-EHLP  "; // FIXME indexOf doesn't find last index
      var s = "        "+val;
      if (s.length>8) s = s.substr(s.length-8);
      for (var i=0;i<8;i++) {
        spi.send([8-i,map.indexOf(s[i])],cs);
      }
      spi.send([0x0C,1],cs); // no shutdown
    },
    // Send the given raw LED data to the display
    raw : function(val) {
      spi.send ([0x9,0],cs); // output raw data
      for (var i=0;i<val.length;i++) {
        spi.send([i+1,val[i]],cs);
      }
      spi.send([0x0C,1],cs); // no shutdown
    },
    // Turn display off
    off : function() { spi.send([0xC,0],cs); },
    // Set intensity (0 to 1)
    intensity : function(i) { spi.send([0xA,E.clip(i*15,0,15)],cs); }
  };
};
