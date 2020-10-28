//JavaScript goes here

var c = document.querySelector('canvas');
var ctx = c.getContext('2d');

function draw(){

    //draw a box
    ctx.fillStyle = 'red';
    ctx.fillRect(20, 20, 20, 20);
    
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
    ctx.fillStyle = 'Blue';
    ctx.strokeStyle = 'Orange';
    ctx.beginPath();
    ctx.arc(c.width/2, c.height/2, 20, 0, 2*Math.PI, false);
    ctx.stroke();
    ctx.fill();

}

draw();