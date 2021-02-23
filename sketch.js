var cat, catRelaxing, catRunning, catSad;
var mouse, mouseImg1, mouseImg2, mouseImg3, mouseImg4;
var garden, gardenImg;
function preload() {
    //load the images here
    mouseImg1 = loadImage("mouse1.png");
    mouseImg2 = loadImage("mouse2.png");
    mouseImg3 = loadImage("mouse3.png");
    mouseImg4 = loadImage("mouse4.png");
    catRelaxing = loadImage("cat1.png");
    catRunning = loadImage("cat2.png");
    catSad = loadImage("cat4.png");
    gardenImg = loadImage("garden.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    garden = createSprite(500,400,100,100);
    garden.addImage(gardenImg);

    mouse = createSprite(150,350,50,50);
    mouse.addImage(mouseImg2);

    cat = createSprite(850,350,50,50);
    cat.addImage(catRelaxing);
    
}

function draw() {

    background(0);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width - mouse.width/2)){
        cat.changeImage(catSad);
        cat.velocityX = 0;
        mouse.changeImage(mouseImg3)
    }
     //For moving and changing animation write code here
     if(keyDown ("LEFT_ARROW")){
        cat.velocityX = -5;
        cat.changeImage("catRunning",catRunning);
        
        
      
    drawSprites();
} 
}
