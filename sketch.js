let xoff = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  bg = loadImage('air1.jpg');
  //   var images = [img1, img2, img3, img4];
  // image(random(images), 0, 0);
}

function draw() {
  background(bg);
  cursor('cursor.png');
  noStroke();

  let x = map(noise(xoff), 0, 1, 0, width);
  ellipse(x, mouseY + 20, 20, 20);
  xoff += 0.01 //speed - jump across perlin noise space
}