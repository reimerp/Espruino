function onInit() {
  digitalWrite([LED1,LED2,LED3,LED4],0b1000);
  setTimeout("digitalWrite([LED1,LED2,LED3,LED4],0b0100);", 500);
  setTimeout("digitalWrite([LED1,LED2,LED3,LED4],0b0010);", 1000);
  setTimeout("digitalWrite([LED1,LED2,LED3,LED4],0b0001);", 1500);
  setTimeout("digitalWrite([LED1,LED2,LED3,LED4],0);", 2000);
}
