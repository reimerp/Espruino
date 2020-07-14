//SPI1.setup({baud:3200000, mosi:B5});
var FRONT_BUTTON = A0;

var slowdown;
var speed;
var running;
var timePressed;
var pos = 0;

function onInit() {

// button press
setWatch(function(e) {
  if (e.time < timePressed+0.01) return; // skip button bounces
  timePressed = e.time;
  // remove any animation that may have been happening
  clearInterval();
  // set up initial values
  speed = 20; 
  slowdown = 1.1 + Math.random()*0.1;
  running = true;
  // start animation...
  setInterval(function() { 
    if (! running) { // if the button was released...
      speed = speed * slowdown; // slow down
      changeInterval(1, speed); // use this to slow the timer
      if (speed > 500) clearInterval(); // if it's really slow then stop
    }
    pos++; // spin around
    if (pos > 3) pos = 0; // wrap around when we get to the least LED
    // Now work out what pattern to show - just light up one light (with red and blue LEDs)
    /*var leds = new Uint8Array(12*3);
    leds[0+(11-pos)*3] = 255; // red
    leds[2+(11-pos)*3] = 255; // blue
    SPI1.send4bit(leds, 0b0001, 0b0011); // send to the lights*/
    digitalWrite([LED2,LED4,LED3,LED1], 1<<pos);
  }, speed); // speed for setInterval
}, FRONT_BUTTON, { repeat: true, edge: "rising" });

// button release
setWatch(function(e) {
  timePressed = e.time;
  // signal the animation to slow down and stop
  running = false;
}, FRONT_BUTTON, { repeat: true, edge: "falling" });

pinMode(FRONT_BUTTON, "input_pulldown");


//
  // pull the front button down, so we don't need an external resistor
  //
}

//onInit();
