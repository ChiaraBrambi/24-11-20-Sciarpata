//trombetta ICONE
let sciarpaIcon, sciarpaBIcon, tut1Icon, tutIcon, logor, freccia, sAlta, sBassa;; //icone
let xBarra = 20; //lunghezza barra %
let w, h; //posizione
let s = 0; //ellisse BONUS

//variabile suono trombetta
let alt = 1; //h dei rettangoli suono
let i = 0; //regola ogni quanto cambia alt
let p_coord = 0; //var coordinazione
let contBonus = 0; //conta quando p_coord arriva a 100

let feed_piattaforma = 0; //var piattaforma: quando alt!=1 viene incrementata
let input_utente = 200 //var utente usa la trobetta, preme bottone

let opacità = 210 //opacità rettangolo tutorial
let pronto //coordinzaione tutorial

/////////////////////////////////////////////////////////////////////////
//per selezionare tutto ctrl+shift+7

// // Teachable Machine
// // The Coding Train / Daniel Shiffman
// // https://thecodingtrain.com/TeachableMachine/1-teachable-machine.html
// // https://editor.p5js.org/codingtrain/sketches/PoZXqbu4v
//
// // The video
// let video;
// // For displaying the label
// let label = "waiting...";
// // The classifier
// let classifier;
// let modelURL = 'https://storage.googleapis.com/tm-models/YadBJmj5/';
//
// // STEP 1: Load the model!
// function preload() {
//   classifier = ml5.imageClassifier(modelURL + 'model.json');
// }
//
//
// function setup() {
//   createCanvas(640, 520);
//   // Create the video
//   video = createCapture(VIDEO);
//   video.hide();
//   // STEP 2: Start classifying
//   classifyVideo();
// }
//
// // STEP 2 classify the videeo!
// function classifyVideo() {
//   classifier.classify(video, gotResults);
// }
//
// function draw() {
//   background(0);
//
//   // Draw the video
//   image(video, 0, 0);
//
//   // STEP 4: Draw the label
//   textSize(32);
//   textAlign(CENTER, CENTER);
//   fill(255);
//   text(label, width / 2, height - 16);
//
//   // Pick an emoji, the "default" is train
//   let emoji = "🚂";
//   if (label == "Rainbow") {
//     emoji = "🌈";
//   } else if (label == "Unicorn") {
//     emoji = "🦄";
//   } else if (label == "Ukulele") {
//     emoji = "🎸";
//   }
//
//   // Draw the emoji
//   textSize(256);
//   text(emoji, width / 2, height / 2);
// }
//
// // STEP 3: Get the classification!
// function gotResults(error, results) {
//   // Something went wrong!
//   if (error) {
//     console.error(error);
//     return;
//   }
//   // Store the label and classify again!
//   label = results[0].label;
//   classifyVideo();
// }

/////////////////////////////////////////////////////////////////////////

function preload() {
  sciarpaBIcon = loadImage("./assets/immagini/sciarpa.png"); //sciarpa vuota bianca
  sciarpaIcon = loadImage("./assets/immagini/sciarpaViola.png"); //sciarpa scura
  tutIcon = loadImage("./assets/immagini/Tutorial-sciarpa-giu.gif");
  tut1Icon = loadImage("./assets/immagini/Tutorial-sciarpa-su.gif");
  logor = loadImage("./assets/immagini/logopiccolo.png"); //logo ridotto
  freccia = loadImage("./assets/immagini/freccia.png");
  sAlta = loadImage("./assets/immagini/Sciarpa_su.png");
  sBassa = loadImage("./assets/immagini/Sciarpa_giù.png");
}

/////////////////////////////////////////////////////////////////////////
function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(15); //rallenta

}

/////////////////////////////////////////////////////////////////////////
function draw() {
  background('#F9F9F9'); //chiaro
  imageMode(CENTER); //per pittogrammi
  noStroke();

  w = width / 20;
  h = height / 50;

  //testo caratteristiche
  textFont('quicksand');
  textAlign(CENTER, TOP);
  textStyle(BOLD);

  //testo centrale
  textSize(16);
  fill('#877B85'); //4° colore PALETTE
  text('PARTITA COOD O1', w * 10, h * 5);
  fill('#B7AEB5'); //3° PALETTE
  textSize(13);
  text('SQUADRA1-SQUADRA2', w * 10, h * 6.5);

  //testo sotto
  textSize(14);
  textAlign(CORNER);
  text('BONUS', w * 1.2, h * 43);

  //logo a destra
  image(logor, w * 18.5, h * 6, logor.width / 4.5, logor.height / 4.5);
  //freccia
  image(freccia, w, h * 6, freccia.width / 6, freccia.height / 6);

  //BARRA COORDINAZIONE
  fill('#D5D0D3'); //barra grigia
  rectMode(CENTER);
  rect(w * 10, h * 45.5, width / 3.5, 15, 20); //rect(x,y,w,h,[tl])
  if (i > 3) {
    xBarra = ((width / 3.5) / 100) * p_coord; //altezza barra %, xTot= 439 = width / 3.5
  } else {
    xBarra = 0;
  }

  push();
  rectMode(CORNER);
  fill('#877B85'); //barra viola
  //width/7 è la metà della barra, che è lunga width/3.5
  rect(w * 10 - width / 7, h * 45.5 - 7.5, xBarra, 15, 20);
  pop();

  ///////////////BONUS//////////////////////////////////////////////////////////////

  if (p_coord === 80) {
    contBonus++;
  } //console.log('BONUS CONTATOR:' + contBonus);

  //pallini BONUS
  for (let i = 0; i < 6; i++) {
    if (contBonus === 3 || contBonus === 4 || contBonus === 5) {
      push();
      fill('#877B85');
      ellipse(w, h * 45.5, 15);
      pop();
    } else if (contBonus === 6 || contBonus === 7 || contBonus === 8) {
      push();
      fill('#877B85');
      ellipse(w, h * 45.5, 15);
      ellipse(w + 25, h * 45.5, 15);
      pop();
    } else if (contBonus === 9 || contBonus === 10 || contBonus === 11 || contBonus === 12 || contBonus === 13) {
      push();
      fill('#877B85');
      ellipse(w, h * 45.5, 15);
      ellipse(w + 25, h * 45.5, 15);
      ellipse(w + 50, h * 45.5, 15);
      pop();
    } else if (contBonus === 14 || contBonus === 15 || contBonus === 16 || contBonus === 17 || contBonus === 18) {
      push();
      fill('#877B85');
      ellipse(w, h * 45.5, 15);
      ellipse(w + 25, h * 45.5, 15);
      ellipse(w + 50, h * 45.5, 15);
      ellipse(w + 75, h * 45.5, 15);
      pop();
    }
    ellipse(w + s, h * 45.5, 15);
    s = 25 * i;
  }
  ///////////////////////////////////////////////////////////////

  //CONTATORE i DEL TEMPO
  if (frameCount % 50 == 0) { //multiplo di 50 incrementa i
    i++
  }

  //PER LA BARRA DELLA PERCENTUALE
  if (keyIsDown(ENTER) && i % 2 == 0) {
    p_coord = round((feed_piattaforma * input_utente) / 100);
  } else {
    p_coord = 0;
  }

  //PERCENTUALE
  push();
  textAlign(CORNER);
  fill('#B7AEB5'); //3° PALETTE
  text('COORDINAZIONE  ' + p_coord + ' %', w * 10, h * 43);
  pop();




  textSize(16);
  fill('#B7AEB5'); //3 PALETTE
  //ICONA FEEDBACK DA SEGUIRE
  if (i % 2 != 0 && i > 3) {

    image(sciarpaBIcon, w * 10, h * 25, sciarpaBIcon.width / 6, sciarpaBIcon.height / 6); //chiara
    feed_piattaforma = 0;
  } else if (i % 2 == 0 && i > 3) { //cambio colore delle bottone centrale: feedback utente
    document.getElementById("tutorial2").style.display = "none";
    image(sciarpaIcon, w * 10, h * 25, sciarpaIcon.width / 6, sciarpaIcon.height / 6); // scura
    feed_piattaforma++;
  }

  //rettangolo in opacità
  push();
  rectMode(CORNER)
  fill(255, 255, 255, opacità);
  rect(0, 0, width, height);
  //rettangolo diventta trasparente alla fine del tutorial
  if (i > 3) {
    opacità = 0
  }
  pop();

  //TUTORIAL sciarpa

  if (i == 0 || i == 2) {

    document.getElementById("tutorial").style.display = "block";
    document.getElementById("tutorial2").src = "./assets/immagini/Tutorial-sciarpa-giu.gif";
    document.getElementById("tutorial2").style.display = "none";
    // image(tut1Icon, w * 10, h * 24.5, tut1Icon.width / 5, tut1Icon.height / 5);
    // tutIcon.reset();
    text('Unisciti al ritmo degli altri', w * 10, h * 29.5);
    if (keyIsDown(ENTER)) {
      text('CORRETTO', w * 10, h * 31.5);
      p_coord = 70;
    }
  } else if (i == 1 || i == 3) {
    // image(tutIcon, w * 10, h * 24.5, tutIcon.width / 5, tutIcon.height / 5);
    // tut1Icon.reset();
    document.getElementById("tutorial").src = "./assets/immagini/Tutorial-sciarpa-su.gif";
    document.getElementById("tutorial2").style.display = "block";
    document.getElementById("tutorial").style.display = "none";

    text('Unisciti al ritmo degli altri', w * 10, h * 29.5);

    if (keyIsDown(ENTER)) {
      text('NON COORDINATO', w * 10, h * 31.5);
      p_coord = 70;
    }
  }


  // FEED UTENTE (PALLINI COLORATI)
  if (keyIsDown(ENTER) && i % 2 == 0) { //alza la sciarpa


    input_utente = 200;
    push();
    tint(255, p_coord * 3.5); // Display at half opacity
    image(sAlta, width / 2, height / 2, sAlta.width / 3, sAlta.height / 3);
    pop();
  } else if (keyIsDown(ENTER) && i % 2 != 0) { //abbassa la sciarpa
    input_utente = 0;
    image(sBassa, width / 2, height / 2, sBassa.width / 3, sBassa.height / 3);
  } else {
    input_utente = 0;
    image(sBassa, width / 2, height / 2, sBassa.width / 3, sBassa.height / 3);
  }

}
///////FINE DRAW/////////////////////////////////////////////////////

//funzione trombetta
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
