var ground, groundImg;
var sea, seaImg;

function preload(){

    ground = loadImage("ground.png", groundImg);
    sea = loadImage("sea.png", seaImg);

}

function setup() {

    createCanvas(600,200);

    sea = createSprite(60,180,20,50);
    sea.addImage(seaImg);

}

function draw() {

    drawSprites();

}
