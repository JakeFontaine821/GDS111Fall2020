var c = document.querySelector('canvas');
var ctx = c.getContext('2d');

//call Images
var Rock = new Image();
Rock.src = 'Images/rock.jpg'

var Paper = new Image();
Paper.src = 'Images/paper.jpg'

var Scissors = new Image();
Scissors.src = 'Images/scissors.jpg'

// player and computer pictures x and y
var pPic = 100;

var cPicX = 630;
var cPicY = 330;

//Array of words
var rps = [];
rps[0] = `Rock` 
rps[1] = `Paper`
rps[2] = `Scissors`

//Array of Buttons
var btn = document.querySelectorAll(`a`)
//Changes the words in the buttons
btn[0].innerHTML = rps[0]
btn[1].innerHTML = rps[1]
btn[2].innerHTML = rps[2]


//Makes the buttons clickable.
//Once clicked they call the play function
btn[0].addEventListener(`click`, function(e){
    play(0)
})
btn[1].addEventListener(`click`, function(e){
    play(1)
})
btn[2].addEventListener(`click`, function(e){
    play(2)
})

//original display
drawStuff();

//Play function accepts an integer
//generates an integer 0-2
//Displays the player's choice and computer's choice
function play(pChoice)
{    
    ctx.clearRect(0,0,c.width,c.height);


    var cChoice = Math.floor(Math.random()*2.999999)

    // put diplay of choices here -------
    drawStuff();

    ctx.fillStyle = 'Black';
    ctx.font = "75px Arial";
    ctx.textAlign = "center";
    

    switch(pChoice){
        case 0:
            drawRock(pPic, pPic);
            if(cChoice === 0)
            {
                drawRock(cPicX, cPicY);
                //display a tie
                ctx.fillText("Tied, shoulda guessed right", 500, 300);
            }
            else if(cChoice === 1)
            {
                drawPaper(cPicX, cPicY);
                //display a loss
                ctx.fillText("You're bad, not surprised LOL", 500, 300);
            }
            else
            {
                drawScissors(cPicX, cPicY);
                //display a win
                ctx.fillText("All Luck", 500, 300);
            }
        break;

        case 1:
            drawPaper(pPic, pPic);
            if(cChoice === 0)
            {
                drawRock(cPicX, cPicY);
                //display a Lost
                ctx.fillText("All Luck", 500, 300);
            }
            else if(cChoice === 1)
            {
                drawPaper(cPicX, cPicY);
                //display a Tie
                ctx.fillText("Tied, shoulda guessed right", 500, 300);
            }
            else
            {
                drawScissors(cPicX, cPicY);
                //display a win
                ctx.fillText("You're bad, not surprised LOL", 500, 300);
            } 
        break;

        case 2:
            drawScissors(pPic, pPic);
            if(cChoice === 0)
            {
                drawRock(cPicX, cPicY);
                //display a tie
                ctx.fillText("You're bad, not surprised LOL", 500, 300);
            }
            else if(cChoice === 1)
            {
                drawPaper(cPicX, cPicY);
                //display a loss
                ctx.fillText("All Luck", 500, 300);
            }
            else
            {
                drawScissors(cPicX, cPicY);
                //display a win
                ctx.fillText("Tied, shoulda guessed right", 500, 300);
            }
        break;
    }
}

function drawRock(x, y){
    ctx.drawImage(Rock, x, y,200,200)
}

function drawPaper(x, y){
    ctx.drawImage(Paper, x, y,200,200)
}

function drawScissors(x, y){
    ctx.drawImage(Scissors, x, y,200,200)
}

function drawStuff(){
    //background
    ctx.fillStyle = "white";
    ctx.fillRect(0,0,c.width,c.height);

    //Red Line
    ctx.lineWidth = 20;
    ctx.beginPath();
    ctx.strokeStyle = 'Red';
    ctx.moveTo(-20, c.height);
    ctx.lineTo(c.width, -11);
    ctx.stroke();
    // "you"
    ctx.font = "40px Arial";
    ctx.fillStyle = "Red";
    ctx.textAlign = "center";
    ctx.fillText("Your Choice", 120, 40);

    // Blue Line
    ctx.beginPath();
    ctx.strokeStyle = 'Blue';
    ctx.moveTo(4, c.height + 9);
    ctx.lineTo(c.width + 9, 7);
    ctx.stroke();
    //"Computer"
    ctx.fillStyle = "Blue";
    ctx.fillText("Computer", 900, 585);
}