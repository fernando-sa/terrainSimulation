let X = -70;
let Y = -40;
let Z = 100;

let translateOffset = 0;
let chunkWidth = 20;
let chunkDepth = 20;
let noiseOffset = 0;
let terrainGenerator;

let backgroundBlueVariation = -1;
let backgroundGreenVariation = -1;
let backgroundRedVariation = -1;

let backgroundVariationCycle = 0;

function setup() {
    createCanvas(400, 250, WEBGL);
    noiseOffset = random(-1000, 1000);
    terrainGenerator = new TerrainGenerator(chunkWidth, chunkDepth, 1);
    push();
    translate(0,140,0);
    pop();
    fill("#68FF13");
    stroke("#914706");
}
  
function draw() {
    background(67 + backgroundRedVariation, 211 + backgroundGreenVariation,255 + backgroundBlueVariation)
    changeBackground();
    camera(X, Y, Z, 0, 0, 100, 0, 1, 0);
    translateOffset += 0.2;

    
    terrainGenerator.generateChunk(0,0);

}

function movement(){
    if (keyIsDown(LEFT_ARROW)) {
        setup();
    }
}

function changeBackground(){
    if(backgroundBlueVariation < -200)
        backgroundVariationCycle  = 1
    else if(backgroundBlueVariation > 0)
        backgroundVariationCycle  = 0


    if(backgroundVariationCycle == 0){
        backgroundBlueVariation -= 0.5
        backgroundGreenVariation -= 1
    }else if(backgroundVariationCycle == 1){
        backgroundBlueVariation += 2
        backgroundGreenVariation += 0.5
        backgroundRedVariation -= 1
    } 
}