var height = 5;
var amount = 8;
var val = 4;
var count = 0;

var tickle = false;
	paper.install(window);
	// Keep global references to both tools, so the HTML
	// links below can access them.

window.onload= function(){


		paper.setup('myCanvas');
// The amount of segment points we want to create:

// The maximum height of the wave:

// Create a new path and style it:
var path = new Path({
	// 60% black:
	strokeColor: [0.8],
	strokeWidth: 10,
	strokeCap: 'square'
});

// Add 5 segment points to the path spread out
// over the width of the view:
for (var i = 0; i <= amount; i++) {
	t = new Point(i / amount*400, 1);
	console.log(new Point(i / amount*400, 1));
	path.add(t);
}

// Select the path, so we can see how it is constructed:
path.selected = true;


view.onFrame = function(event) {
// Loop through the segments of the path:
	for (var i = 0; i <= amount; i++) {
		var segment = path.segments[i];

		// A cylic value between -1 and 1
		var sinus = Math.sin(event.time * 3 + i);
		
		// Change the y position of the segment point:
		segment.point.y = sinus * height + 100;
	}
	// Uncomment the following line and run the script again
	// to smooth the path:
	path.smooth();
	
	if (tickle==true && height >= 6 && val<0){
	// console.log('tickle is true');
	count = 0;
	height = height + val; 
}
	if (tickle==true && height<60 && height >= 1 && val>0){
	// console.log('tickle is true');
	height = height + val; 
}
	if (height>=60&&tickle==true && count<50){
		count+=1;

	}
	if (tickle==true && height>=60){
	// console.log('tickle is true');
val = -4;
}
if (height <6){
	val = 4;
}

	// if (amount>100)
	// 	val = -1;

	// if (amount == 5)
	// 	tickle = false;
	

		
}

			view.draw();

};