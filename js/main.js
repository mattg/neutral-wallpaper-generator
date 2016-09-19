function sketchProc(processing) {
  processing.size(4000, 2500);
  processing.background(75);
  for (var i = 0; i < processing.width; i++) {
    var b = Math.floor(Math.random()*50)+75;
    var w = Math.floor(Math.random()*750);
    var x = Math.floor(Math.random()*processing.width);
    var y = Math.floor(Math.random()*processing.width);
    processing.strokeWeight(w);
    processing.stroke(b, 75);
    processing.line(y, 0, x, processing.height);
  }
}

var canvas = document.getElementById('drawing');
var processingInstance = new Processing(canvas, sketchProc);
