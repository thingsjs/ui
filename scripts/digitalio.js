// Testing the button and LED implementations 
// Simple circuit, turn ON and OFF LED with button click
var button = $('#di')[0];
var led = $('#led')[0];

button.onClick = function(){
	console.log('button was clicked');
	if (led.isOn() ){
		led.turnOff();
	}
	else {
		led.turnOn();
	};
}