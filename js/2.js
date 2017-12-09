function sketchProc(processing) {
  processing.size(4000, 2500);
  processing.background(100);
  for (var i = 0; i < 5000; i++) {
    var x = Math.floor(Math.random()*(processing.width+100))-100;
    var y = Math.floor(Math.random()*processing.height);
    var length = Math.floor((Math.random()*100))+200;
    var black = Math.floor(Math.random()*75)+65;
    var weight = Math.floor(Math.random()*10)+20;
    processing.strokeWeight(weight);
    processing.stroke(black, 50);
    processing.line(x, y, x+length, y);
  }
}

var canvas = document.getElementById('drawing');
var processingInstance = new Processing(canvas, sketchProc);
