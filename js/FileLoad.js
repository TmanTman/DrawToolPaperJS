var fileLoad = {
    setupFileLoad: function() {      
        var fileInput = document.getElementById("loadfile");        
        fileInput.addEventListener('change', fileLoad.handleFile);  
    },
    
    handleFile: function (evt) {
        var file = evt.target.files[0];
        var imageType = /image.*/;
        
        if (file.type.match(imageType)) {
            var reader = new FileReader();

            reader.onload = function(e) {
                var raster = new Raster({
                    source: reader.result,
                    position: view.center
                });
                raster.onLoad = function() {
                    paper.view.draw();
                }
            }

            reader.readAsDataURL(file); 
        } else {
          alert("Only image files supported (JPG, PNG)");
        }
    }
}