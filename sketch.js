function setup() {
  // put setup code here
  createCanvas(1000, 1000);
  background(240);
}

function draw() {
  noStroke();
  // if (count%15=0) {
  //   fill(d);
  // }
  //fill(c);
  //count +=1;
  if (mouseIsPressed) {
    //randomizes color
    var c1 = random(100, 255)
    var c2 = random(255)
    var c3 = random(255)
    var a  = random(0, 255) //alpha value
    var c = color(100, c1, 100, 77)

    noStroke();
    fill(c);
    ellipse(mouseX, mouseY, 80, 80);

    //ellipse(50,50,50,50)
    // ellipse(mouseX+10, mouseY, 80, 80);
    // ellipse(mouseX-10, mouseY, 80, 80);
    // ellipse(mouseX, mouseY+100, 80, 80);
    // ellipse(mouseX, mouseY-100, 80, 80);
  } else {
    fill(255,0,0);
  }
}
