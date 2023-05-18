function setup() {
  createCanvas(400, 550);
}

function draw() {
  background(220);
  
// .......................Figuras..............................................
  
  // Rectángulo fondo
  fill(210, 203, 197);
  beginShape(); // Inicio de forma personalizada
  noStroke();  //sin borde
  vertex(55, 40);
  vertex(350,40);
  vertex(350, 470);
  vertex(55, 470);
  endShape(CLOSE); // Fin de forma personalizada
  
  
  // Primer rectángulo negro
  fill(15, 15, 15);
  beginShape(); // Inicio de forma personalizada
  noStroke();  //sin borde
  vertex(55, 40);
  vertex(130,40);
  vertex(130, 80);
  vertex(55, 81);
  endShape(CLOSE); // Fin de forma personalizada
  
  // Rectángulo amarillo
  fill(211, 188, 46);
  beginShape(); // Inicio de forma personalizada
  noStroke();  //sin borde
  vertex(55, 280);
  vertex(80,280);
  vertex(80, 470);
  vertex(55,470);
  endShape(CLOSE); // Fin de forma personalizada

  // Segundo rectángulo negro
  fill(15, 15, 15);
  beginShape(); // Inicio de forma personalizada
  noStroke();  //sin borde
  vertex(55, 280);
  vertex(80,280);
  vertex(80, 310);
  vertex(55,310);
  endShape(CLOSE); // Fin de forma personalizada
  
  //Rectángulo rojo
  fill(194, 26, 29);
  noStroke();  //sin borde
  beginShape();
  vertex(130, 40);
  vertex(355,40);
  vertex(350, 200);
  vertex(130, 200);
  endShape(CLOSE);
  
  // Rectángulo gris grande arriba
  fill(189, 189, 187);
  noStroke();  //sin borde
  beginShape();
  vertex(130, 200);
  vertex(340,200);
  vertex(340, 375);
  vertex(130, 375);
  endShape(CLOSE);
  
  // Rectángulo gris vertical izquierda
  fill(189, 189, 187);
  noStroke();  //sin borde
  beginShape();
  vertex(80,280);
  vertex(130,280);
  vertex(130, 470);
  vertex(80, 470);
  endShape(CLOSE);
  
  // Rectángulo azul
  fill(48, 140, 187);
  noStroke();  //sin borde
  beginShape();
  vertex(275,375);
  vertex(350,375);
  vertex(350, 470);
  vertex(275, 470);
  endShape(CLOSE);
  
  
// ...........................líneas..................................
  
  // Línea 1 horizontal
  fill(15, 15, 15);
  stroke(15, 15, 15);
  strokeCap(SQUARE); //Línea con borde recto
  strokeWeight(6);
  line(130,200,350,200);
  
  // Línea 2 horizontal
  fill(15, 15, 15);
  stroke(15, 15, 15);
  strokeCap(SQUARE); //Línea con borde recto
  strokeWeight(6);
  line(55,280,340,280);
  
  // Línea 3 horizontal
  fill(15, 15, 15);
  stroke(15, 15, 15);
  strokeCap(SQUARE); //Línea con borde recto
  strokeWeight(6);
  line(130,375,350,375);
  
  // Línea 4 horizontal
  fill(15, 15, 15);
  stroke(15, 15, 15);
  strokeCap(SQUARE); //Línea con borde recto
  strokeWeight(6);
  line(130,467,350,467);
  
  // Línea 0 vertical
  fill(15, 15, 15);
  stroke(15, 15, 15);
  strokeCap(SQUARE); //Línea con borde recto
  strokeWeight(6);
  line(80,280,80,470);
  
  // Línea 1 vertical
  fill(15, 15, 15);
  stroke(15, 15, 15);
  strokeCap(SQUARE); //Línea con borde recto
  strokeWeight(6); //Grosor de línea
  line(130,40,130,470);
  
  // Línea 2 vertical
  fill(15, 15, 15);
  stroke(15, 15, 15);
  strokeCap(SQUARE); //Línea con borde recto
  strokeWeight(6); //Grosor de línea
  line(130,40,130,470);
  
  // Línea 3 vertical
  fill(15, 15, 15);
  stroke(15, 15, 15);
  strokeCap(SQUARE); //Línea con borde recto
  strokeWeight(6); //Grosor de línea
  line(275,375,275,470);
  
  // Línea 4 vertical
  fill(15, 15, 15);
  stroke(15, 15, 15);
  strokeCap(SQUARE); //Línea con borde recto
  strokeWeight(6); //Grosor de línea
  line(340,200,340,375);
}