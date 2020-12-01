var c = document.querySelector('canvas');
var ctx = c.getContext('2d');
var timer = requestAnimationFrame(main);


function GameObject(){
    this.x = 100;
    this.y = 100;
    this.w = 20;
    this.h = 20;
    this.color ="red";
    this.speed = 1;

    this.draw = function(){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.w, this.h);

        document.addEventListener('keydown', flerpDerp);
        function flerpDerp(e){
            if(e.keyCode === 39){
                //ctx.clearRect(0,0,c.width,c.height)
                this.x = this.x + this.speed;
            }
            
            if(e.keyCode === 37){
                ctx.clearRect(0,0,c.width,c.height)
                this.x -= this.speed;
            }
        
            if(e.keyCode === 38){
                ctx.clearRect(0,0,c.width,c.height)
                this.y += this.speed;
            }
        
            if(e.keyCode === 40){
                ctx.clearRect(0,0,c.width,c.height)
                this.y -= this.speed;
            } 
        }
    }

    
    this.move = function(){
        
    }
    

}

var Player = new GameObject();
Player.x = 100;
Player.y = 100;
Player.w = 20;
Player.h = 20;
Player.color = 'Red';

function main(){
    Player.draw();
    //Player.move();
}