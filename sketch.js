//trombetta ICONE
let sciarpaIcon, sciarpaBIcon, tut1Icon, tut2Icon, logor, freccia; //icone
let xBarra = 20; //lunghezza barra %
let w, h; //posizione
let s = 0; //ellisse BONUS
let tracciaS, sAlta, sBassa;

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

function preload() {
  sciarpaBIcon = loadImage("./assets/immagini/sciarpaB.png"); //sciarpa chiara
  sciarpaIcon = loadImage("./assets/immagini/sciarpa.png"); //sciarpa scura
  tut1Icon = loadImage("./assets/immagini/Tutorial_Down.gif");
  tut2Icon = loadImage("./assets/immagini/Tutorial_Up.gif");
  logor = loadImage("./assets/immagini/logopiccolo.png"); //logo ridotto
  freccia = loadImage("./assets/immagini/freccia.png");
  tracciaS = loadImage("./assets/immagini/sciarpaTraccia.png");
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
  xBarra = ((width / 3.5) / 100) * p_coord; //altezza barra %, xTot= 439 = width / 3.5
  push();
  rectMode(CORNER);
  fill('#877B85'); //barra viola
  //width/7 è la metà della barra, che è lunga width/3.5
  rect(w * 10 - width / 7, h * 45.5 - 7.5, xBarra, 15, 20);
  pop();

  ///////////////BONUS//////////////////////////////////////////////////////////////

  if (p_coord === 80) {
    contBonus++;
  }
  console.log('BONUS CONTATOR:' + contBonus);

  //pallini BONUS
  for (let i = 0; i < 6; i++) {
    if (contBonus === 2 || contBonus === 3) {
      push();
      fill('#877B85');
      ellipse(w, h * 45.5, 15);
      pop();
    } else if (contBonus === 4 || contBonus === 5 || contBonus === 6 || contBonus === 7) {
      push();
      fill('#877B85');
      ellipse(w, h * 45.5, 15);
      ellipse(w + 25, h * 45.5, 15);
      pop();
    } else if (contBonus === 8 || contBonus === 9) {
      push();
      fill('#877B85');
      ellipse(w, h * 45.5, 15);
      ellipse(w + 25, h * 45.5, 15);
      ellipse(w + 50, h * 45.5, 15);
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

  // BARRETTE FEED UTENTE (LINETTE)
  if (keyIsDown(ENTER)) {//alza la sciarpa
    input_utente = 200;
    image(sAlta, width / 2, height / 2, sAlta.width/3 , sAlta.height/3 );
  } else {//abbassa la sciarpa
    alt = 1;
    input_utente = 0;
  image(sBassa, width / 2, height / 2, sBassa.width/3 , sBassa.height/3 );
  }


  //PER LA BARRA DELLA PERCENTUALE
  if (keyIsDown(ENTER)) {
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
    push();
    fill('#877B85');
    noStroke();
    strokeWeight(5);
    ellipse(w * 10, h * 24.5, 100); //cerchio centrale
    image(sciarpaBIcon, w * 10 + 5, h * 24.5, sciarpaBIcon.width / 7, sciarpaBIcon.height / 7);
    pop();
    feed_piattaforma++;
  } else if (i % 2 == 0 && i > 3) { //cambio colore delle bottone centrale: feedback utente
    push();
    fill('#F9F9F9');
    stroke('#877B85');
    strokeWeight(5);
    ellipse(w * 10, h * 24.5, 100); //cerchio centrale
    image(sciarpaIcon, w * 10 + 5, h * 24.5, sciarpaIcon.width / 7, sciarpaIcon.height / 7); // trombetta scura
    pop();
    feed_piattaforma = 0;
    
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
    image(tut2Icon, w * 10, h * 24.5, tut2Icon.width / 4, tut2Icon.height / 4);
    text('PORTA IN ALTO' , w * 10, h * 31.5);
    text('Unisciti al ritmo degli altri', w * 10, h * 29.5);
    image(sAlta, width / 2, height / 2, sAlta.width/3 , sAlta.height/3 );
  } else if (i == 1 || i == 3) {
    image(tut1Icon, w * 10, h * 24.5, tut1Icon.width / 4, tut1Icon.height /4);
    text('PORTA IN BASSO', w * 10, h * 31.5);
    text('Unisciti al ritmo degli altri', w * 10, h * 29.5);
    image(sBassa, width / 2, height / 2, sBassa.width/3 , sBassa.height/3 );
  }

}
///////FINE DRAW/////////////////////////////////////////////////////

//funzione trombetta
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
