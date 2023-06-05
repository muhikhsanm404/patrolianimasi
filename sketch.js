let marka1_x = -100
let marka2_x = 100
let marka3_x = 300
let marka4_x = 500
let matahari_x = 250;
let langit, kota, mobil;

//load image
function preload(){
 langit = loadImage('assets/gelap.jpg');
 kota = loadImage('assets/kota3.png');
 mobil = loadImage('assets/mobil.png');
}

function setup() { 
  createCanvas(650,400);
  mobil.resize(300,200);
  
}

function draw(){
  background(langit);
  strokeWeight(0);

  //matahari
  fill(247,250,96);
  circle(matahari_x,70,40);
  image(kota,15,15);
  
  //aspal
  fill (30);
  rect(0,250,650,200);
  image(mobil,250,150);

  
  //marka
  fill(230);
  rect(marka1_x , 320, 150, 20);
  rect(marka2_x , 320, 150, 20);
  rect(marka3_x , 320, 150, 20);
  rect(marka4_x , 320, 150, 20);
  
  //animasimarka
  marka1_x = marka1_x - 5;
  if (marka1_x < -150)marka1_x = 650;
  marka2_x = marka2_x - 5;
  if (marka2_x < -150)marka2_x = 650;
  marka3_x = marka3_x - 5;
  if (marka3_x < -150)marka3_x = 650;
  marka4_x = marka4_x - 5;
  if (marka4_x < -150)marka4_x = 650;

  // // Animasi Marka
  // marka1_x -= 5;
  // if (marka1_x <= -150) {
  //   marka1_x = 650;
  // }
  
  // marka2_x -= 5;
  // if (marka2_x <= -150) {
  //   marka2_x = marka1_x + 200;
  // }

  // marka3_x -= 5;
  // if (marka3_x <= -150) {
  //   marka3_x = marka2_x + 200;
  // }

  // marka4_x -= 5;
  // if (marka4_x <= -150) {
  //   marka4_x = marka3_x + 200;
  // }

    
}

