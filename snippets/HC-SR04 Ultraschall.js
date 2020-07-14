/*
Trig	A0
Echo	A1
*/
var sensor = require("HC-SR04").connect(A0, A1, function(dist) {
  console.log(dist + " cm away");
});
setInterval(function() {
  sensor.trigger(); // send pulse
}, 500);
