/*
http://www.instructables.com/id/Light-Sensing-Fairy-Lights/

WS2811s
Din to PA7
LDR between ground and pin PC1
200kOhm resistor between PC3 and PC1
*/

function onInit() {
  SPI1.setup({baud:3200000, mosi:A7});
  C3.set(); // Pull the light sensor's potential divider up to 3.3v
}
onInit();

var light = 0.0; // an average

function getPattern() {   
  var lightInstant = analogRead(C1)*50;
  light = lightInstant*0.1 + light*0.9;
  var cols = [];
  for (var i=0;i<1;i++) {
     var c = (-Math.abs(i-25)*10) + light*1024 - 200;
     if (c<0) c=0;
     if (c>255) c=255;
     cols.push(c);
     c = (-Math.abs(i-25)*10) + light*1024 - 450;
     if (c<0) c=0;
     if (c>255) c=255;
     cols.push(c);
     c = (-Math.abs(i-25)*10) + light*1024 - 600;
     if (c<0) c=0;
     if (c>255) c=255;
     cols.push(c);
  }
  console.log(cols);
  return cols;
}

function doLights() {   
  SPI1.send4bit(getPattern(), 0b0001, 0b0011);
}
setInterval(doLights, 50);