var canvas;
var music;

var box, edges;
var g1, g2, g3, g4;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
g1= createSprite(90, 590, 190, 20);
g1.shapeColor= "green";

g2= createSprite(290, 590, 190, 20);
g2.shapeColor=" yellow";

g3= createSprite(490, 590, 190, 20);
g3.shapeColor= "blue";

g4= createSprite(690, 590, 190, 20);
g4.shapeColor= "red";


    //create box sprite and give velocity
box = createSprite(random(20, 750), 20, 25, 25);
box.shapeColor= "white";
box.setVelocity (random (4, 7), random (3, 6));

edges = createEdgeSprites();
}

function draw() {
background(rgb(169,169,169));
box.bounceOff(edges);

if (g1.isTouching (box) && box.bounceOff(g1) ){
box.shapeColor= "green";

}

if (g2.isTouching (box) && box.bounceOff(g2) ){
    box.shapeColor= "yellow";
    //music.play();
    }
    
if (g3.isTouching (box) && box.bounceOff(g3) ){
     box.shapeColor= "blue";
            
    }
if (g4.isTouching (box) ){
     box.shapeColor= "red";
    box.setVelocity (0,0)   ;
    music.stop();
        }
                          
drawSprites();


}

