// for DS1820, maybe S but NOT B

// geht mit DS1820 auf Uhr, 32766 auf Schrumpf
readTemp = function() {
  var ow = new OneWire(A0); 
  ow.device = ow.search()[0];
  ow.reset();
  console.log(ow.device);
  ow.select(ow.device); 
  ow.write(0x44, true);  // true???
  var t1=getTime()+1;while(getTime()<t1);    // wait if parasite
  ow.reset();
  ow.select(ow.device);
  ow.write(0xBE);
  var a = 3-1;
  var temp_l = ow.read();
  var temp_h = ow.read();
  console.log(temp_l, temp_h);
  var th = ow.read();
  var tl = ow.read();
  console.log(th, tl);
  var res1 = ow.read();
  var res2 = ow.read();
  console.log(res1, res2);
  var count_remain = ow.read();
  var count_per_c = ow.read();
  var temp_read = ((temp_l + (temp_h<<8))-1)/2;
  var t = temp_read - 0.25 + (count_per_c - count_remain)/count_per_c;
  return t;
};

console.log(readTemp());