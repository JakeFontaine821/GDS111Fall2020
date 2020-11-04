//JavaScript goes here

var c = document.querySelector('canvas');
var ctx = c.getContext('2d');

var Car = new Image();
Car.src = 'Images/Car.png'

var Street = new Image();
Street.src = 'Images/Street.jpg'

var Start = new Image();
Start.src = 'Images/Start.png'

var Finish = new Image();
Finish.src = 'Images/Finish.png'

var FuelGreen = new Image();
FuelGreen.src = 'Images/FuelGreen.png'

var FuelYellow = new Image();
FuelYellow.src = 'Images/FuelYellow.png'

var FuelRed = new Image();
FuelRed.src = 'Images/FuelRed.png'

var Pumpkin = new Image();
Pumpkin.src = 'Images/Pumkin.png'

var llama = new Image();
llama.src = 'Images/llama.png'

// this starts timer for animation
var timer = requestAnimationFrame(draw);

var x = 0;

//start and finish line
var start = 58;
var finish = 956;

//Fuel Values
var startFuel = 900;
var fuel = startFuel;

var barFullWidth = 512;

//Start Timer stuff
var sec = 3;
var fps = 60;
var frames = fps;

function draw() {
    //this will call the animation again
    timer = requestAnimationFrame(draw);
    //clear the screen
    ctx.clearRect(0, 0, c.width, c.height);

    //draws text
    ctx.fillStyle = 'Blue';
    ctx.lineWidth = 1;
    ctx.font = "50px Arial";
    ctx.textAlign = "center";
    ctx.fillText("Week 4 'Lab'", c.width / 2, 50);
    ctx.strokeText("Week 4 'Lab'", c.width / 2, 50);

    drawStreet();
    drawStart();
    drawFinish();
    drawllama();
    drawPumpkin();
    FuelOutline()
    drawFuelBar();
    drawFuelText();

    //updating x
    if(sec > 0){
        runStartTimer();
        drawStartTimer();
    }
    else{
        if (fuel > 0) {
        x += 3;
        fuel -= 3;
        }

        //checks to see when we run out of fuel or pass finish line
        if (fuel <= 0 || x + 100 > finish) {
        drawResults();
        }
    }
}

function FuelOutline(){
    if(fuel > startFuel / 3 * 2){
        ctx.drawImage(FuelGreen,53,70,522,30)
    }
    if(fuel < startFuel / 3 * 2){
        ctx.drawImage(FuelYellow,53,70,522,30)
    }
    if(fuel < startFuel / 3){
        ctx.drawImage(FuelRed,53,70,522,30)
    }
}

function drawStreet(){
    ctx.drawImage(Street, 0,0,1024,768)
}

function drawStart(){
    ctx.drawImage(Start,58,0,60,768)
}

function drawFinish(){
    ctx.drawImage(Finish,956,0,60,768)
}

function drawllama(){
    ctx.drawImage(llama,x,200,130,110)
}

function drawPumpkin(){
    ctx.drawImage(Pumpkin,x,400,120,120)
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

