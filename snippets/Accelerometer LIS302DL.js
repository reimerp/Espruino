function onInit() {
  SPI1.setup({sck:A5, miso:A6, mosi:A7});
  // SPI1.setup({ baud:400000,  sck: A5, miso: A6, mosi: A7 , cs: E3, int1: E0, int2:E1 } );
  SPI1.send([0x20,0b01000111], E3);
}

var avrx=0.0, avry=0.0;
function getAcc() {
  var accx = SPI1.send([0xA9,0], E3)[1];
  var accy = SPI1.send([0xAB,0], E3)[1];
  if (accx>127) accx-=256;
  if (accy>127) accy-=256;
  avrx = 0.1*accx + 0.9*avrx;
  avry = 0.1*accy + 0.9*avry;
  digitalWrite(LED1, avrx > 10);     // or oben
  digitalWrite(LED4, avrx < -10);    // bl unten
  digitalWrite(LED2, avry > 10);     // gn links
  digitalWrite(LED3, avry < -10);    // rt rechts
  //console.log("X= " + avrx + " Y= " + avry);
}
onInit();setInterval(getAcc, 10);