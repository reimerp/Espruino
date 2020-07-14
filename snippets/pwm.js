var interval;
function pwm(brightness, Hz) {
  if ((typeof interval) !== "undefined") {
    clearInterval(interval);
    LED1.reset();
  }
  interval = setInterval(function() {
    digitalPulse(LED1, 1, brightness * (1000/Hz));
  }, 1000/Hz);
}

pwm(0.01, 50);
