class TerrainGenerator{

    constructor(chunkWidth, chunkDepth, scale){
        this.chunkWidth = chunkWidth;
        this.chunkDepth = chunkDepth;
        this.scale = scale;
        this.initialOffset = 0;
    }

    generateChunk(initialX, initialZ){
        let offset = 0;
        if (this.initialOffset == offset) {
            offset = translateOffset;
        }
        
        if(translateOffset - offset <= 200){
            
            for(let i = initialX; i < this.chunkWidth; i++){
                for(let j = initialZ; j < this.chunkDepth; j++){
                    
                    let blockY = noise((noiseOffset + translateOffset + i) / 30,(noiseOffset + j) / 30) * 200;
                    push();
                    fill(blockY * 2, blockY * 3, 0);
                    translate( i * 10, blockY, j * 10);
                    box(10, 30, 10);
                    pop();
                    
                }
            }
        }else{
            console.log(translateOffset - offset);
            
        }
    }



}