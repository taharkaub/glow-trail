function setup() {
  // put setup code here
  createCanvas(1000, 1000);
  background(66, 12, 44);
}

function draw() {
  if (mouseIsPressed) {
    //randomizes color
    var c1 = random(100, 255)
    var c2 = random(255)
    var c3 = random(255)
    var c = color(100, c1, 100)
    fill(c);
    ellipse(mouseX, mouseY, 80, 80);
    ellipse(50,50,50,50)
    // ellipse(mouseX+10, mouseY, 80, 80);
    // ellipse(mouseX-10, mouseY, 80, 80);
    // ellipse(mouseX, mouseY+100, 80, 80);
    // ellipse(mouseX, mouseY-100, 80, 80);
  } else {
    fill(255);
  }
}
