// das erste "Hello World" ging, danach nur Müll
// das blaue parallel angeschlossen
var lcd = require("HD44780").connect(A0,A1,C0,C1,C2,C3);
//lcd.clear();
//lcd.setCursor(0,0);

//lcd.print("Hello World!");

function showData() {
 lcd.clear();
 lcd.setCursor(0,0);
 lcd.print("Current data:");
 //lcd.setCursor(2,1);
 //lcd.print("B1 = "+analogRead(B1));
}
//setInterval(showData, 1000);

