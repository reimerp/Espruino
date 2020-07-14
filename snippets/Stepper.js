var step = 0;
var steps = [0b0001,0b0010,0b0100,0b1000];
// 8 Step
//var steps = [0b0001,0b0011,0b0010,0b0110,0b0100,0b1100,0b1000,0b1001];

var stepperPins = [A3,A2,B10,B11]; // Change these to pins for your motor driver

function doStep() {
 step++;
 digitalWrite(stepperPins, steps[step % steps.length]);
}
var stepInterval = setInterval(doStep, 200);