//JavaScript goes here

var c = document.querySelector('canvas');
var ctx = c.getContext('2d');

var mario = new Image(); 
mario.src = 'Images/mario.png'

// this starts timer for animation
var timer = requestAnimationFrame(draw);

var x = 0;

function draw(){
    //this will call the animation again
    timer = requestAnimationFrame(draw);
    //clear the screen
    ctx.clearRect(0,0, c.width, c.height);

    
    x++;
    //conditional statement
    if(x > c.width){
        x = -200;
    }
    

    /*
    //draw a box
    ctx.fillStyle = 'red';
    ctx.fillRect(200, 100, 200, 200);

    //draw everything to the screen    
    //draw a line 1
    ctx.strokeStyle = 'green';
    ctx.moveTo(0,0);
    ctx.lineTo(800,600);
    ctx.stroke();

    //draw line 2
    ctx.moveTo(800,0);
    ctx.lineTo(0,600);
    ctx.stroke();

    //draw a circle
    ctx.lineWidth = 5;
    ctx.fillStyle = 'Blue';
    ctx.strokeStyle = 'Orange';
    ctx.beginPath();
    ctx.arc(c.width/2, c.height/2, 20, 0, 2*Math.PI, false);

    ctx.stroke();
    ctx.fill();
    */

    //draws mario
    ctx.drawImage(mario, x, 100, 200, 200);

    //draws text
    ctx.lineWidth = 1;
    ctx.font = "50px Arial";
    ctx.textAlign = "center";
    ctx.fillText("Week 4 'Lab'", c.width/2, 50);
    ctx.strokeText("Week 4 'Lab'", c.width/2, 50);

    console.log("We are animating");

}

draw();