This project aims to build a canvas editor with the paper js library. Live demo here: http://tmantechblog.com/testpaperjs/

The structure of the program:

index.html provides the bare bones necessary HTML elements

PaperFunctions implement the PaperJS functionality to draw with.

HammerFunctions implement the pan and zoom functionality made possible with hammer.js.

FileLoad enables you to load files from a computer and (to some extent) on Android.

The next very important feature is an eraser. The eraser should be able to erase paths that have been drawn over the images, but it should not be able to erase the images that have been loaded. I couldn't event get it to work with just paths. I've tried the following with no success:

Attempt 1: In the Javascript console

var first = paper.project.activeLayer; //to make sure the image stays on the bottom layer
var sec = new Layer();

var from = new Point(20, 20);
var to = new Point(500, 500);
var path1 = new Path.Line(from, to);
path1.strokeColor = 'black';
path1.strokeWidth = 40;

var from = new Point(0, 100);
var to = new Point(500, 100);
var path2 = new Path.Line(from, to);
path2.strokeColor = 'green'; //I've tried other colors as well, this seems irrelevant
path2.strokeWidth = 40;
path2.blendMode = 'destination-out'; 
//adjusting opacity between 0 and 1 also does not have the required effect
path2.opacity = 1;

Results: Instead of leaving a transparent cut-out on layer 2, it leaves a white stripe

Attempt 2: 

var path = new CompoundPath({
    children: [
        new Path.Line({
            from: [300, 0],
    		to: [300, 500],
            strokeWidth: 30,
            strokeColor: 'green'
        }),
        new Path.Line({
            from: [0, 250],
    		to: [500, 250],
            strokeWidth: 30,
            strokeColor: 'white'
        })
    ],
    strokeColor: 'black',
    selected: true, 
    strokeWidth: 20
});

Result: Instead of leaving a 'hole' where the two strokes cross, it just leaves a black cross. 

Other features that can be implemented is the ability to change colors and adjusting the size of the strokes from the user interface. But thats all possible enough, it's the eraser that gets me.

Happy Coding!
Tielman