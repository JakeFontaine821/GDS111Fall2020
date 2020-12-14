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

//call images
var Player = new Image();
Player.src = 'Images/PlayerSprite.png'

var Ass = new Image();
Ass.src = 'Images/Asteroid.png'

var Title = new Image();
Title.src = 'Images/AstroidTitleScreen.jpg'

var EndGame = new Image();
EndGame.src = 'Images/EndGame.jpg'

var InvinBox = new Image();
InvinBox.src = 'Images/Shield.png'

var GodMode = new Image();
GodMode.src = 'Images/GodMode.png'

//create random range function to enable random numbers for astroids
function randomRange(high, low){
    return Math.random() * (high-low) + low;
}

//Class for the Asteroids
function Asteroid(){
    this.radius = randomRange(60,20);
    this.x = randomRange(0 + this.radius, c.width - this.radius) + c.width;
    this.y = randomRange(c.height - this.radius, 0 + this.radius);
    this.vx = randomRange(-10, -5);
    this.vy = randomRange(5,10);
    this.color = "white";

    this.draw = function(){
        drawAss(this.x,this.y,this.radius,this.radius);
        /*
        ctx.save();
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x,this.y,this.radius,0,2*Math.PI,true);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
        */
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
    this.h = 20;
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
        drawPlayer(); 
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
    this.y = -50
    this.w = 40;
    this.h = 40;
    this.vy = 3

    this.draw = function(){
        drawBox();
    }
    
    this.move = function(){
        Box.y += Box.vy;
        if(score % 10 == 0){
            Box.y = -50;
            Box.y += Box.vy;
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
                currentState = 1;
                setTimeout(scoreTimer, 1000);
            }
        }
    }
    
}

function keyPressUp(e){
    //console.log("Key Up " + e.keyCode);
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
   drawTitle();
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

    for(var i = 0; i<asteroids.length; i++){
        /*
        DO IF ELSE STATEMENT HERE FOR INVINCIBILTY
        */

        // START ELSE HERE
        
        //using the distance formula to find distance between ship and asteroid
        var dX = (ship.x + 15) - asteroids[i].x;
        if(asteroids[i].y < ship.y){
            var dY = ship.y - (asteroids[i].y + 20);
        }
        else{
            var dY = ship.y - (asteroids[i].y - 20);
        }
        var dist = Math.sqrt((dX*dX)+(dY*dY));

        //checks for collision with asteroid and ends game
        if(detectCollision(dist, ((ship.h - 25) + (asteroids[i].radius / 2)))){
           
            gameOver = true;
            currentState = 2;
        }

        /* END ELSE HERE*/

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
    drawEndGame();
    ctx.textAlign = "center";
    ctx.fillStyle = "white";
    ctx.font = "50px Arial";
    ctx.fillText(score.toString(), 225,350);
    ctx.fillText(highScore,575,350);
}

function main(){
    ctx.clearRect(0,0, c.width, c.height);
    
    gameStates[currentState]();
    timer = requestAnimationFrame(main);
}

function scoreTimer(){
    if(gameOver == false){
        score++;
        
        if(score % 5 == 0){
            numAsteroids += 5;
            console.log(numAsteroids);
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

function drawPlayer(){
    ctx.drawImage(Player, -10, -27,50,50);
}

function drawAss( x, y, w, h){
    ctx.drawImage(Ass, x, y, w, h);
}

function drawTitle(){
    ctx.drawImage(Title,0,0,800,600);
}

function drawEndGame(){
    ctx.drawImage(EndGame,0,0,800,600);
}

function drawBox(){
    ctx.drawImage(InvinBox,Box.x,Box.y,50,50);
}

function drawGodMode(){
    ctx.drawImage(GodMode, -10, -27,40,40);
}