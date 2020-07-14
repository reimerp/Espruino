var dht = require("DHT11").connect(C11);
    dht.read(function (a) {console.log("Temp is "+a.temp.toString()+" and RH is "+a.rh.toString());});