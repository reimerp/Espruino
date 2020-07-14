SPI2.setup({baud:3200000, mosi:B15});      // G R B
SPI2.send4bit([0,255,0], 0b0001, 0b0011); // turn first LED Red
