//collection types Arrays
/*
var cars = ["Tesla", "Civic", "Mater", "Mack"];
var planes =[];
//example of for loop
console.log(cars.length);
for(var i = 0; i<cars.length; i++){
    console.log(cars[i]);
}
for(var i = 1; i<100; i++){
    planes[i] = "Plane " + (i + 1).toString(); 
    console.log(planes[i]);
}*/


//Starts Game Code

var c = document.querySelector('canvas');
var ctx = c.getContext('2d');

//timer goes here
var timer = requestAnimationFrame(main);

//Number of cars 
var numCars = 3;
//Array of cars
var car = [];

var winner;

var gameStates = [];

var currentState = 0;
var choice = 1;

function GameObject(){
    this.x = 50;
    this.y = 50;
    this.w = 50;
    this.h = 50;
    this.color ="red";
    this.speed = 1;
    this.fuel = 100;

    this.draw = function(){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.w, this.h);
    }

    this.move = function(){
        this.x += this.speed;
    }
}

//creates instance of startline
var startLine = new GameObject();
startLine.x = 100;
startLine.y = 100;
startLine.w = 10;
startLine.h = 400;
startLine.color = "green";

//creates instance of finish line
var finishLine = new GameObject();
finishLine.x = 700;
finishLine.y = 100;
finishLine.w = 10;
finishLine.h = 400;
finishLine.color = "red";

for (var i = 0; i<numCars; i++){
    car[i] = new GameObject();
    car[i].speed = randomRange(5,2);
    car[i].w = 75;
    car[i].x = 20;
}
//changes y position of cars
car[0].y = 150;
car[1].y = 250;
car[2].y = 350;

//change the color of cars
car[0].color = 'black';
car[1].color = 'purple';
car[2].color = 'blue';


gameStates[0] = function(){
    // player pick winner
    ctx.fillStyle = "rgba(0,0,0,0.5)";
    ctx.fillRect(0, 0, c.width, c.height);

    ctx.fillStyle = "white"
    ctx.font = "60px Arial";
    ctx.textAlign = "center";
    ctx.fillText("Choose the winner", c.width/2, c.height/2-100);
    ctx.fillText("Pick 1, 2, or 3 Key", c.width/2, c.height/2+100);
}

gameStates[1] = function(){
    //race happens
    for(var i = 0; i< car.length; i++){
        car[i].move();
        if(car[i].x > finishLine.x){
            console.log(car[i].color + "is the winner");
            winner = car.indexOf(car[i]);
            currentState = 2;
        }
    }
}

gameStates[2] = function(){
    //winner is declared
    ctx.fillStyle = "rgba(0,0,0,0.5)";
    ctx.fillRect(0, 0, c.width, c.height);

    ctx.fillStyle = "white"
    ctx.font = "60px Arial";
    ctx.textAlign = "center";

    if(winner === choice){
        ctx.fillText("Winner is: Car: " + (winner + 1).toString(), c.width/2, c.height/2-100);
        ctx.fillText("You Got Lucky.", c.width/2, c.height/2+100);
    }
    else{
        ctx.fillText("Winner is: Car: " + (winner + 1).toString(), c.width/2, c.height/2-100);
        ctx.fillText("You Stupid Idiot.", c.width/2, c.height/2+100);
    }
}

document.addEventListener('keydown', chooseWinner);

function chooseWinner(e){
    if(currentState == 0){
        if(e.keyCode === 49){
            choice = 0;
            currentState = 1;
        }

        if(e.keyCode === 50){
            choice = 1;
            currentState = 1;
        }

        if(e.keyCode === 51){
            choice = 2;
            currentState = 1;
        }
    }

}



function main(){
    ctx.clearRect(0,0,c.width, c.height);
    startLine.draw();
    finishLine.draw();
    for(var i = 0; i<numCars; i++){
        car[i].draw();
    }

    gameStates[currentState]();
    timer = requestAnimationFrame(main);
}