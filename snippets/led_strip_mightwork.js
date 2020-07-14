// WS2811/WS2812
// es passiert "was"

SPI2.setup({baud:3200000, mosi:B15});
SPI2.send4bit([255,0,0], 0b0001, 0b0011); // turn first LED Red
SPI2.send4bit([255,0,0, 0,255,0, 0,0,255], 0b0001, 0b0011); // turn first 3 LEDs, Red, Green, and Blue