//////
digitalWrite(LED1, LOW);

//////
var on;
function toggle() {
  on = ! on;
  digitalWrite(LED1, on);
  digitalWrite(LED3, on);
  digitalWrite(LED2, ! on);
  digitalWrite(LED4, ! on);
}
toggle();
//
var interval = setInterval(toggle, 500);
//
changeInterval(interval, 200);

setInterval("digitalWrite(LED1,l=!l);",200);
clearInterval();

//////
var on1, on2;
function toggle1() {
  on1 = ! on1;
  digitalWrite(LED1, on1);
}
function toggle2() {
  on2 = ! on2;
  digitalWrite(LED2, on2); 
}
setInterval(toggle1, 400);
setInterval(toggle2, 456);

//////
function startFlashing(pin, period) {
  var on = false;
  setInterval(function() {
    on = ! on;
    digitalWrite(pin, on);
  }, period);
}
startFlashing(LED1, 50);

//////
Pin.prototype.startFlashing = function(period) {
  if (Pin.intervals===undefined) Pin.intervals = [];
  if (Pin.intervals[this]) clearInterval(Pin.intervals[this]);
  var on = false;
  var pin = this;
  Pin.intervals[this] = setInterval(function() {
    on = !on;
    digitalWrite(pin, on);
  }, period);
};

LED1.startFlashing(100);
LED2.startFlashing(500);

//////
setInterval(function() {
  digitalWrite(LED1, Math.random()>0.5);
}, 20);

