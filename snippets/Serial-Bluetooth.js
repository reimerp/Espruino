// Serial1 vmtl durch USB besetzt
// Serial2 ist A3/A2
// Serial3 ist B10/B11
// Serial4 ist A1/A0

Serial4.setup(38400);  // defaultPins
//Serial4.setup(38400, {rx:a1,tx:a0});  // defaultPins
//nee Serial4.setup(38400, {rx:c11,tx:c10});
//nee Serial3.setup(38400, {rx:d9,tx:d8});
//nee Serial3.setup(38400, {rx:c11,tx:c10});

Serial4.on('data', function (data) {console.log(data);});

Serial4.println('AT+PSWD:3985');
Serial4.println('AT+NAME:BT-001');

//Serial4.println("Hallo");
