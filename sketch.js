/*
Skylines code

each cube will be 10 by 10

*/ 

//object that stores the colo(u)rs used
var colours = {
    background: [100,10,255],
    fill1: [0,100,255],
    fill2: [0,0,255]
}


var row;

function draw(){
    //if statement to refresh the page every 1/3 of a second I believe... not sure
    if (frameCount/30 == parseInt(frameCount/30)){
		//declare the row list
		row = [];
		//create a canvas in the size of the window
		createCanvas(window.innerWidth-5,window.innerHeight-5);
		
		//clear the image
        background(colours.background[0]);
		
        //make the slate
        for(i=0;i<window.innerWidth;i+=10){
            row.push(0);
        }
		
        for(y=0;y<window.innerHeight;y+=10){
            //populate the slate
            for(x=0;x<row.length*10;x+=10){
                //console.log(x/10)
                if (parseInt(random(0,3)) == 1){
                    fill(0,100,255)
                }
                else{
                    fill(0,0,255)
                }
				//the of putting a block is 1 to 31 or 30
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