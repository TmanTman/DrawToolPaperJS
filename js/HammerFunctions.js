var hammer = {
    
    //This variable allows PaperFunctions to recognise to not draw while pinching
    pinch: false,
    
    //Scaling mechanism
    curScale: 1,
    prevScale: 1,
    
    //Panning mechanism
    prevCenterPoint : 1,
    curCenterPoint : 1,
    
    setupCanvasWithHammer : function (canvas) {
        console.log("HammerGesture started");

        //Create canvas and set attributes
        var scaleTol = 0.05;
        
        //Initialize values now that paper has been installed
        prevCenterPoint = paper.view.center;

        var hammertime = new Hammer(canvas);
        hammertime.get('pinch').set({enable: true});
        hammertime.on('pinch', function(ev) {
            hammer.pinch = true;

            //Ensure scaling value is larger than tolerance
            if (Math.abs(1-ev.scale) > scaleTol){ 
                hammer.curScale = hammer.prevScale * ev.scale;
                //Won't allow zoomout of more that 0.8
                if (hammer.curScale < 0.8) {
                    hammer.curScale = 0.8;
                }
                paper.view.zoom = hammer.curScale;
            }
        
            //Panning mechanism
            curCenterPoint = prevCenterPoint.add(-1 * ev.deltaX, -1 * ev.deltaY);
            paper.view.center = curCenterPoint;
            
        });
        
        
    }
}
                  
    