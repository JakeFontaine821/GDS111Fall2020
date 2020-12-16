var c = document.querySelector('canvas');
var ctx = c.getContext("2d");
var timer = requestAnimationFrame(main);
var gravity = 1;
var asteroids = new Array();
var numAsteroids = 10;
var gameOver = true;
var score = 0;
var gameStates = [];
var currentState = 0;
var ship;
var Box;
var highScore = 0;
var God = false;

//call images
var Player = new Image();
Player.src = 'images/PlayerSprite.png'

var Ass = new Image();
Ass.src = 'images/Asteroid.png'

var Title = new Image();
Title.src = 'images/AstroidTitleScreen.jpg'

var EndGame = new Image();
EndGame.src = 'images/EndGame.jpg'

var InvinBox = new Image();
InvinBox.src = 'images/Shield.png'

var GodMode = new Image();
GodMode.src = 'images/GodMode.png'

//create random range function to enable random numbers for astroids
function randomRange(high, low){
    return Math.random() * (high-low) + low;
}

//Class for the Asteroids
function Asteroid(){
    this.radius = randomRange(35,10);
    this.x = randomRange(0 + this.radius, c.width - this.radius) + c.width;
    this.y = randomRange(c.height - this.radius, 0 + this.radius);
    this.vx = randomRange(-10, -5);
    this.vy = randomRange(5,10);
    this.color = "white";

    this.draw = function(){
        drawAss(this.x,this.y,this.radius,this.radius);
    }
}

function gameStart() {
    //for loop to create the intances of the asteroids
    for (var i = 0; i < numAsteroids; i++) {
        asteroids[i] = new Asteroid();
    }
    //create the instance of the ship for the game
    ship = new PlayerShip();
    Box = new Invin();
}

//Class for the player ship
function PlayerShip(){
    this.x = c.width/2;
    this.y = c.height/2;
    this.w = 20;
    this.h = 10;
    this.vx = 0;
    this.vy = 0;
    this.up = false;
    this.down = false;
    this.left = false;
    this.right = false;
    this.flamelength = -30;

    this.draw = function(){
        ctx.save();
        ctx.translate(this.x, this.y);
        //this drws the flame behind the ship
        if(this.right == true){
            ctx.save();
            //adjust the flame length for a flicker effect
            if(this.flamelength == -30){
                this.flamelength = -10;
            }
            else{
                this.flamelength = -30;
            }
            ctx.fillStyle = "orange";
            ctx.beginPath();
            ctx.moveTo(this.flamelength, 0);
            ctx.lineTo(-5, 5);
            ctx.lineTo(-5, -5);
            ctx.lineTo(this.flamelength, 0);
            ctx.closePath();
            ctx.fill();
            ctx.restore();
        }

        if(God == false){
            drawPlayer(Player); 
        }
        else{
            drawPlayer(GodMode);
        }
        
        ctx.restore();
    }
    
    this.move = function(){
        this.x += this.vx;
        this.y += this.vy;
        
        //adds boundaries and keeps ship on the screen
        if(this.y > c.height - 10){
            this.y = c.height - 10;
            this.vy = 0;
        }
        //check to see if we are past the top of the canvas
        if(this.y < 0 + 13){
            this.y = 13;
            this.vy = 0;
        }
        //check to see if we are past right 0r left side of canvas
        if(this.x > c.width - 10){
            this.x = c.width - 10;
            this.vx = 0;
        }
        /*INCENTIVE TO CONTINUE MOVING
        IF MOVE OFF SCREEN LEFT, LOSE GAME*/
        if(this.x < -30){
            gameOver = true;
            currentState = 2;
        }
    }
}

function Invin(){
    this.x = randomRange(400,50);
    this.y = -50;
    this.w = 40;
    this.h = 40;
    this.vy = 3;
    this.seconds = 5;
    this.counter = 0;

    this.draw = function(){
        drawBox(Box.x, Box.y,Box.w,Box.h);
    }
    
    this.move = function(){
        Box.y += Box.vy;
        if(score % 10 == 0){
            Box.y = -50;
        }
    }
}

document.addEventListener('keydown', keyPressDown);
document.addEventListener('keyup', keyPressUp);

function keyPressDown(e){
    //console.log("Key Down " + e.keyCode); 
    if(gameOver == false){
        if(e.keyCode === 38){
            
            ship.up = true;
        }
        if(e.keyCode === 40){
            ship.down = true;
        }
        if(e.keyCode === 39){
            ship.right = true;
        }
    }
    if(gameOver == true){
        if (e.keyCode === 13) {
            

            if (currentState == 2) {
                score = 0;
                numAsteroids = 10;
                asteroids = [];
                gameStart();
                
                currentState = 0;

            }
            else {
                gameStart();
                gameOver = false;
                console.log(gameOver);
                currentState = 1;
                setTimeout(scoreTimer, 1000);
            }
        }
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
    }
}

//Game States for menus and gameplay
gameStates[0] = function(){
   drawTitle(Title);
}

gameStates[1] = function(){
    //Game code from main function goes here
    //display score
    ctx.save();
    
    ctx.font = "15px Arial"
    ctx.fillStyle = "white"
    ctx.fillText("Score: " + score.toString(), c.width - 150, 30);
    ctx.restore();
    
    //movements and all
    if(ship.right == true){
        ship.vx = 10;
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

    //detect collision with power up
    if(gameOver == false){
        var dX = (ship.x + (ship.w / 2)) - (Box.x + (Box.w / 2));
        var dY = (ship.y + (ship.h / 2)) - (Box.y + (Box.h / 2));
        var distBox = Math.sqrt((dX*dX)+(dY*dY));

        if(detectCollision(distBox, (ship.w/2 + (Box.w / 2)))){
            God = true;
        }
        if(score % 10 == 8){
            God = false;
        }
    }

    for(var i = 0; i<asteroids.length; i++){
        //if collided with power up, turn off collision detection between asteroids
        if(God == false){
            //using the distance formula to find distance between ship and asteroid
            var dX = (ship.x + (ship.w)) - (asteroids[i].x + (asteroids[i].radius / 2));
            var dY = (ship.y + (ship.h / 2)) - (asteroids[i].y + (asteroids[i].radius / 2));
            var distAss = Math.sqrt((dX*dX)+(dY*dY));

            //checks for collision with asteroid and ends game
            if(detectCollision(distAss, (ship.w/2 + asteroids[i].radius))){
                gameOver = true;
                currentState = 2;
            }
        }

        //checks to see if asteroid is off screen
        if(asteroids[i].x < 0 - asteroids[i].radius){
            //reset asteroids position off screen 
            asteroids[i].y = randomRange(c.height - asteroids[i].radius, 0 + asteroids[i].radius);
            asteroids[i].x = randomRange(0 + asteroids[i].radius, c.width - asteroids[i].radius) + c.width;
        }
        
        if(gameOver == false){
            asteroids[i].x += asteroids[i].vx;
        }
        asteroids[i].draw();
    }

    if(Box.y > c.height){
        Box.x = randomRange(400,50);
    }

    ship.draw();
    Box.draw();
    if(gameOver == false){
      ship.move(); 
      Box.move(); 
    }
    while(asteroids.length < numAsteroids){
        asteroids.push(new Asteroid());
    }
}

gameStates[2] = function(){
    drawTitle(EndGame);
    ctx.textAlign = "center";
    ctx.fillStyle = "white";
    ctx.font = "50px Arial";
    ctx.fillText(score.toString(), 225,350);
    ctx.fillText(highScore,575,350);
}

function main() {
    ctx.clearRect(0, 0, c.width, c.height);

    gameStates[currentState]();
    timer = requestAnimationFrame(main);
    
}

function scoreTimer(){
    if(gameOver == false){
        score++;
        
        if(score % 5 == 0){
            numAsteroids += 5;
        }

        setTimeout(scoreTimer,1000);
    }
    if(score > highScore){
        highScore = score;
    }
}

function detectCollision(distance, calcDistance){
    return distance < calcDistance;
}

function drawPlayer(Thing,w,h){
    ctx.drawImage(Thing, -10, -27,50,50);
}

function drawAss( x, y, w, h){
    ctx.drawImage(Ass, x, y, w, h);
}

function drawTitle(Pic){
    ctx.drawImage(Pic,0,0,800,600);
}

function drawBox(x,y,w,h){
    ctx.drawImage(InvinBox,x,y,w,h);
}