var FRONT_BUTTON = A0;

pinMode(FRONT_BUTTON, "input_pulldown");

var id = setInterval(function () {
  var a = digitalRead(FRONT_BUTTON);      // Button User (blau)
  print(a);
}, 1000);

