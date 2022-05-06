function setup() {
  createCanvas(1000, 700, WEBGL);
  normalMaterial();
  
  
}
function draw() {
  background('#fae');
describe('canvas with pink background');
  orbitControl();
  rotateY(0.5);
  box(30, 50);
  text("Zoom and rotate",50,50);

}