var c = document.querySelector('canvas');
var ctx = c.getContext('2d');
var timer = requestAnimationFrame(main);
var thing;

function Player(){
    this.x = c.width/2;
    this.y = c.height/2;
    this.w = 20;
    this.h = 20;
    this.vx = 0;
    this.vy = 0;
    this.up = false;
    this.down = false;
    this.left = false;
    this.right = false;

    this.draw = function(){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x,this.y,this.w,this.h);
    }
    
    this.move = function(){
        this.x += this.vx;
        this.y += this.vy;
    }
}
thing = new Player();

document.addEventListener('keydown', keyPressDown);
document.addEventListener('keyup', keyPressUp);

function keyPressDown(e){
    
    if(e.keyCode === 38){
            
        ship.up = true;
    }
    if(e.keyCode === 40){
        ship.down = true;
    }
    if(e.keyCode === 39){
        ship.right = true;
    }
    if(e.keyCode === 37){
        ship.left = true;
    }    
}

function keyPressUp(e){
    if(gameOver == false){
        if(e.keyCode === 38){
            ship.up = false;
        }
        if(e.keyCode === 40){
            ship.down = false;
        }
        if(e.keyCode === 39){
            ship.right = false;
        }
        if(e.keyCode === 37){
            ship.left = false;
        }
    }
}

function main(){
    thing.draw();
    thing.move();
    keyPressDown();
    keyPressUp();
    if(ship.right == true){
        ship.vx = 8;
    }
    else if(ship.left == true){
        ship.vx = -6;
    }
    else{
        ship.vx = -2;
    }

    if(ship.up == true){
        ship.vy = -4;
    }
    else if(ship.down == true){
        ship.vy = 4;
    }
    else{
        ship.vy = 0;
    }
}

