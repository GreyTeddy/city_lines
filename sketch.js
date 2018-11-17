/*
Skylines code

each cube will be 10 by 10

*/ 

var colours = {
    background: [100,10,255],
    fill1: [0,100,255],
    fill2: [0,0,255]
}

function setup()
{
	createCanvas(1920,1080);
}

function draw(){
    
    if (frameCount/30 == parseInt(frameCount/30)){

        background(colours.background[0]);
        var row = [];
        //make the slate
        for(i=0;i<width;i+=10){
            row.push(0);
        }

        for(y=0;y<height;y+=10){
            //populate the slate
            for(x=0;x<row.length*10;x+=10){
                //console.log(x/10)
                if (parseInt(random(0,3)) == 1){
                    fill(0,100,255)
                }
                else{
                    fill(0,0,255)
                }
                if (row[x/10]==0 && parseInt(random(0,30))==1){
                    row[x/10]+=1
                }
                else if (row[x/10]==1){
                    rect(x,y,10,10);
                }
            }
        }

    }
    
}