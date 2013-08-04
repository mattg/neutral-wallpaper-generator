function sketchProc(processing) {
  processing.size(3500, 2500);
  processing.background(75);
  for (var i = 0; i < processing.width; i++) {
    var b = Math.floor(Math.random()*50)+75,
        w = Math.floor(Math.random()*750),
        x = Math.floor(Math.random()*processing.width),
        y = Math.floor(Math.random()*processing.width);
    processing.strokeWeight(w);
    processing.stroke(b, 75);
    processing.line(y, 0, x, processing.height);
  }
}

var canvas = document.getElementById("drawing"),
    processingInstance = new Processing(canvas, sketchProc);

