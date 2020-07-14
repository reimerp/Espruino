var step = 0;
var targetStep = 30;
var steps = [0b0001,0b0011,0b0010,0b0110,0b0100,0b1100,0b1000,0b1001];
var stepperPins = [A3,A2,B10,B11];

var doStep = function () {
 var d = step - targetStep;
  if (d < 0) {
   step++;
  } else if (d > 0) {
   step--;
  }
 if (d === 0) { // we're there - sleep
   changeInterval(stepInterval, 500);
   digitalWrite(stepperPins, 0);
 } else {
   var time = 100 - Math.abs(d)*4;
   if (time<10) time=10; 
   changeInterval(stepInterval, time);
   digitalWrite(stepperPins, steps[step%steps.length]);
 }
};

var stepInterval = setInterval(doStep, 100);