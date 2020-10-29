//JavaScript goes here

var c = document.querySelector('canvas');
var ctx = c.getContext('2d');

var mario = new Image();
mario.src = 'Images/mario.png'

// this starts timer for animation
var timer = requestAnimationFrame(draw);

var x = 0;

//start and finish line
var start = 105;
var finish = 700;

//Fuel Values
var startFuel = 702;
var fuel = startFuel;

var barFullWidth = 300;

//Start Timer stuff
var sec = 3;
var fps = 60;
var frames = fps;

function draw() {
    //this will call the animation again
    timer = requestAnimationFrame(draw);
    //clear the screen
    ctx.clearRect(0, 0, c.width, c.height);

    //draws mario
    ctx.drawImage(mario, x, 100, 100, 100);

    //draws text
    ctx.fillStyle = 'Blue';
    ctx.lineWidth = 1;
    ctx.font = "50px Arial";
    ctx.textAlign = "center";
    ctx.fillText("Week 4 'Lab'", c.width / 2, 50);
    ctx.strokeText("Week 4 'Lab'", c.width / 2, 50);


    drawStartLine();
    drawFinishLine();
    drawCar();
    drawFuelBar();
    drawFuelText();

    //updating x
    if(sec > 0){
        runStartTimer();
        drawStartTimer();
    }
    else{
        if (fuel > 0) {
        x += 1;
        fuel -= 1;
        }

        //checks to see when we run out of fuel or pass finish line
        if (fuel <= 0 || x + 100 > finish) {
        drawResults();
        }
    }
}


function runStartTimer(){
    frames -= 1;

    if(frames < 0){
        frames = fps;
        sec -= 1;
    }
}

function drawStartTimer(){
    ctx.fillStyle = 'black';
        ctx.font = "30px Arial";
        ctx.textAlign = "center";
        ctx.fillText(sec, c.width / 2, c.height / 2);
}


function drawResults() {
    if (x + 100 > finish) {
        ctx.fillStyle = 'black';
        ctx.font = "30px Arial";
        ctx.textAlign = "center";
        ctx.fillText("You Made It! You Win", c.width / 2, c.height / 2);
    }
    else {
        ctx.fillStyle = 'black';
        ctx.font = "30px Arial";
        ctx.textAlign = "center";
        ctx.fillText("You Ran Out of Fuel, You Lost", c.width / 2, c.height / 2);
    }
}

function drawCar() {
    ctx.fillStyle = 'teal';
    ctx.fillRect(x, c.height / 2, 100, 50);
}

function drawStartLine() {
    ctx.fillStyle = 'green';
    ctx.fillRect(start, 100, 10, 400);
}

function drawFinishLine() {
    ctx.fillStyle = 'purple';
    ctx.fillRect(finish, 100, 10, 400);
}

function drawFuelText() {
    ctx.fillStyle = 'black';
    ctx.font = "30px Arial";
    ctx.fillText(fuel.toFixed(0), start, 45);
}


function drawFuelBar() {
    var currentBarWidth = barFullWidth * getFuelPercent();
    ctx.fillStyle = 'yellow';
    ctx.fillRect(start, 75, currentBarWidth, 20);
}

function getFuelPercent() {
    return fuel / startFuel;
}

