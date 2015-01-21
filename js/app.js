$(document).ready(function() {
    
    //Initialize Canvas
    canvas = document.getElementById('myCanvas');
    canvas.width = $(window).width() - 30;
    canvas.height = $(window).height() - 40;
    canvas.style.marginLeft = "auto";
    canvas.style.marginRight = "auto";
    canvas.style.paddingTop = "5px";
    canvas.style.display = "block";
    canvas.id = 'myCanvas';
    
    paperFunctions.setupCanvasWithPaper(canvas);
    
});