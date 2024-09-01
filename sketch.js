/* JavaScript opfris opdracht
   
    Lees de README voor uitleg
 */

/*
 * instellingen om foutcontrole van je code beter te maken 
 */
///<reference path=".vscode/p5.global-mode.d.ts" />
"use strict"

/* ********************************************* */
/* globale variabelen die je gebruikt in je game */
/* ********************************************* */
let appelX = 600; // x-positie van appel
let appelY = 55;  // y-positie van appel
let appelBreedte = 50;
let mandY = 650;
let mandBreedte = 150;
let mandHoogte = 15;
let appelV = 10;
let score;
let punt;
let img1;
let img2;


/* ********************************************* */
/* setup() en draw() functies / hoofdprogramma   */
/* ********************************************* */

/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  score = 0;
  punt = false;
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);
  img1 = loadImage('appel.png');
  img2 = loadImage('mand.webp');
}

/**
 * draw
 * de code in deze functie wordt 50 keer per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  // teken achtergrond
  background('black');

  // teken appel
  noStroke();         // geen lijntje om de vorm heen
  fill(255, 0, 0)     // vulkleur wordt rood
  ellipse(appelX, appelY, appelBreedte, appelBreedte);
  image(img1,appelX - 50, appelY - 50, appelBreedte * 2, appelBreedte * 2);
  appelY = appelY + appelV;
  // if (score++){
  //   appelV= appelV + 0.1;
  // }

  if(mouseX >= 0 && mouseX + mandBreedte <= 1280){
    rect(mouseX, mandY, mandBreedte, mandHoogte);
    image(img2, mouseX - 20, mandY - 85, mandBreedte + 40, mandHoogte + 100);
  }

  if (appelY > 720){
    randomizer();
  }

  if(mandY <= appelY + appelBreedte - 37 && mouseX <= appelX + appelBreedte && mouseX + mandBreedte >= appelX){
    randomizer();
    punt = true;
      if(punt === true){
      score++;
      appelV = appelV + 0.1;
      punt = false;
      }
  }

  textSize(50);
  fill(255,255,255);
  text("score: " + score, 50, 50);
}

function randomizer(){
  appelX = random(50, 1230);
  appelY = random(-1000, -200);
}
