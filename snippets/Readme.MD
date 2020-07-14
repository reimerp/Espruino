http://forum.espruino.com/conversations/278556/


Accel: 4 LEDs auf Accelerometer LIS302DL
BMP085: ja
BH1750:
button_led: speed not fount
button_static: blauen Button abfragen
dht11: dht11 untested
// geht nicht mit gn LCD PCF8574 8 bit IO expander, pull ups?

HC-SR04 Ultraschall: ? 5V in Pegel?

led: einige LED funktionen
Max7219: ok mit 7 Segment
onInit: bei start  gibt es ein LED kreisel
pwm: orange LED mit PWM
speedtest: zählt bin 10000



SCL = B6; SDA = B7;
i2c = new I2C();	// Software I2C
i2c.setup({sda:SDA,scl:SCL});
i2c.readFrom(0,1)=new Uint8Array([255])

I2C1.setup({sda:SDA,scl:SCL});
I2C1.readFrom(0,1);	// Uncaught InternalError: Timeout on I2C Read Receive Mode