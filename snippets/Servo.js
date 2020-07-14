var s = require("servo").connect(C7);

s.move(0); // move to position 0 over 1 second
s.move(1); // move to position 1 over 1 second
s.move(0.5, 3000); // move to position 0.5 over 3 seconds

// move to position 0 over 1 second, then move to position 1
s.move(0, 1000, function() {
  s.move(1, 1000);
});


// digitalPulse(A1, 1, 1.5);	// pulse pin A1 high(1) for 1.5ms

// var servoPos = 0.5;
// var interval = setInterval("digitalPulse(A1, 1, 1 + E.clip(servoPos, 0, 1))", 50);
// servoPos = 0;
// servoPos = 1;


// hardware timer:

/*
function setServo(pin,pos) {
 if (pos<0) pos=0;
 if (pos>1) pos=1;
 analogWrite(pin, (1+pos) / 50.0, {freq:20});
}

setServo(A1, 0.5); // set servo connected to A1 to the halfway position

*/