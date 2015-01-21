paper.install(window);

var paperFunctions = {
    
    setupCanvasWithPaper : function(canvas) {

		// Create an empty project and a view for the canvas:
		paper.setup(canvas);

		var rect = new Rectangle(new Point(0, 0), new Point(paper.view.size.width, paper.view.size.height));
		var rectPath = new Path.Rectangle(rect);
		rectPath.fillColor = 'yellow';
        
        //draw vertical lines
        var i;
        var line;
        for (i = 0; i < paper.view.size.width; i=i+25) {
            segments = [new Point(i, 0), new Point(i, paper.view.size.height)];
            var path = new Path(segments);
            path.strokeColor = strokeStyle(i);
        }
        
        //Horizontal lines
        for (i = 0; i < paper.view.size.height; i=i+25) {
            segments = [new Point(0, i), new Point(paper.view.size.width, i)];
            var path = new Path(segments);
            path.strokeColor = strokeStyle(i);
        }
        
        function strokeStyle(coord){
            if (coord % 100) return 'grey';
            else return 'black';
        };
        
		//Tool stuff
		var tool = new Tool();

		//Path stuff
		var path;

		tool.onMouseDown = function(event) {
            //Don't draw while zooming
            if (hammer.pinch) return;
            fingerDown = true;
			path = new Path();
			path.strokeColor = 'blue';
			console.log("MouseDown coords: " + event.point);
			path.add(event.point);
		}

		tool.onMouseDrag = function(event) {
            if (hammer.pinch) return;
			console.log("MouseDrag coords: " + event.point);
			path.add(event.point);
		}

		tool.onMouseUp = function(event) {
			console.log("MouseUp coords: " + event.point);
			path.simplify(5);
            //Assist with scaling from hammer
            hammer.pinch = false;
            hammer.prevScale = hammer.curScale;
            //Assist with panning from hammer
            hammer.prevCenterPoint = hammer.curCenterPoint;            

		}

		paper.view.draw();
        
    }
}
