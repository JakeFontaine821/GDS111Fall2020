var c = document.querySelector('canvas');
var ctx = c.getContext('2d');
var timer = requestAnimationFrame(main);
var gravity = 1;

function playerShip(){
    this.x = c.width/2;
    this.y = c.height/2;
    this.w = 0;
    this.h = 0;
    this.vx = 0;
    this.vy = 0;
    this.up = false;
    this.down = false;
    this.left = false;
    this.right = false;

    this.draw = function(){
        ctx.save();


        ctx.beginPath();
        ctx.translate(this.x,this.y);
        ctx.fillStyle = 'red';
        ctx.moveTo(0,-13);
        ctx.lineTo(10,10);
        ctx.lineTo(-10,10);
        ctx.lineTo(0,-13);
        ctx.closePath();
        ctx.fill();

        ctx.restore();
    }

    this.move = function(){
        this.x += this.vx;
        this.y += this.vy;

        if(this.y > c.height - 10){
            this.y = c.height - 10;
            this.vy = 0
        }
    }
}

//create instance of the ship
var ship = new playerShip();

document.addEventListener('keydown',keyPressDown);
document.addEventListener('keyup',keyPressUp);

function keyPressDown(e){
    if(e.keyCode === 38){
        ship.up = true;
    }
    if(e.keyCode === 37){
        ship.left = true;
    }
    if(e.keyCode === 39){
        ship.right = true;
    }
    
}

function keyPressUp(e){
    if(e.keyCode === 38){
        ship.up = false;
    }
    if(e.keyCode === 37){
        ship.left = false;
    }
    if(e.keyCode === 39){
        ship.right = false;
    }
}


function main(){
    ctx.clearRect(0,0,c.width,c.height);

    ship.vy += gravity;
    if(ship.up == true){
        ship.vy = -10;
    }

    if(ship.left == true){
        ship.vx = -3;
    }
    else if(ship.right == true){
        ship.vx = 3;
    }
    else{
        ship.vx = 0;
    }

    ship.draw();
    ship.move();
    timer = requestAnimationFrame(main);
}