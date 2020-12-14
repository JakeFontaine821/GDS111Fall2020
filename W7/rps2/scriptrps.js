var c = document.querySelector('canvas');
var ctx = c.getContext('2d');

//call Images
var banana = new Image();
banana.src = 'Images/Banana.png'

var apple = new Image();
apple.src = 'Images/apple.png'

var grapes = new Image();
grapes.src = 'Images/Grapes.png'

var strawberry = new Image();
strawberry.src = 'Images/strawberry.png'

var watermelon = new Image();
watermelon.src = 'Images/watermelon.png'

// player and computer pictures x and y
var pPicX = 250;
var pPicY = 370;

var cPicX = 680;
var cPicY = 430;

//Win counters
var PlayerW = 0;

var CompW = 0;

//Array of words
var rps = [];
rps[0] = `Banana` 
rps[1] = `Apple`
rps[2] = `Grapes`
rps[3] = `Strawberry`
rps[4] = `Watermelon`

//Array of Buttons
var btn = document.querySelectorAll(`a`)
//Changes the words in the buttons
btn[0].innerHTML = rps[0]
btn[1].innerHTML = rps[1]
btn[2].innerHTML = rps[2]
btn[3].innerHTML = rps[3]
btn[4].innerHTML = rps[4]


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
btn[3].addEventListener(`click`, function(e){
    play(3)
})
btn[4].addEventListener(`click`, function(e){
    play(4)
})


//original display
drawStuff();

//Play function accepts an integer
//generates an integer 0-2
//Displays the player's choice and computer's choice
function play(pChoice)
{    
    ctx.clearRect(0,0,c.width,c.height);


    var cChoice = Math.floor(Math.random()*4.999999)

    // put diplay of choices here -------
    drawStuff();

    ctx.fillStyle = 'Black';
    ctx.font = "75px Arial";
    ctx.textAlign = "center";
    

    switch(pChoice){
        case 0:
            ctx.onload = drawBanana(pPicX, pPicY);
            if(cChoice === 0)
            {
                ctx.onload = drawBanana(cPicX, cPicY);
                //display a tie
                ctx.fillText("Tied, shoulda guessed right", 500, 300);
            }
            else if(cChoice === 1)
            {
                //computer win
                CompW++;

                ctx.onload = drawApple(cPicX, cPicY);
                //display a loss
                ctx.fillText("You're bad, not surprised LOL", 500, 300);                
            }
            else if(cChoice === 2)
            {
                //computer win
                CompW++;

                ctx.onload = drawGrape(cPicX, cPicY);
                //display a win
                ctx.fillText("You're bad, not surprised LOL", 500, 300);
            }
            else if(cChoice === 3)
            {
               //Player win
               PlayerW++;

               ctx.onload = drawStrawberry(cPicX, cPicY);
               //display a loss
               ctx.fillText("All Luck", 500, 300); 
            }
            else
            {
                //Player win
                PlayerW++;

                ctx.onload = drawWatermelon(cPicX, cPicY);
                //display a win
                ctx.fillText("All Luck", 500, 300);
            }
        break;

        case 1:
            ctx.onload = drawApple(pPicX, pPicY);
            if(cChoice === 0)
            {
                //Player win
                PlayerW++;

                ctx.onload = drawBanana(cPicX, cPicY);
                //display a Lost
                ctx.fillText("All Luck", 500, 300);
            }
            else if(cChoice === 1)
            {
                ctx.onload = drawApple(cPicX, cPicY);
                //display a Tie
                ctx.fillText("Tied, shoulda guessed right", 500, 300);
            }
            else if(cChoice === 2)
            {
                //computer win
                CompW++;

                ctx.onload = drawGrape(cPicX, cPicY);
                //display a win
                ctx.fillText("You're bad, not surprised LOL", 500, 300);
            } 
            else if(cChoice === 3)
            {
               //computer win
               CompW++;

               ctx.onload = drawStrawberry(cPicX, cPicY);
               //display a loss
               ctx.fillText("You're bad, not surprised LOL", 500, 300); 
            }
            else
            {
                //Player win
                PlayerW++;

                ctx.onload = drawWatermelon(cPicX, cPicY);
                //display a win
                ctx.fillText("All Luck", 500, 300);
            }
            
        break;

        case 2:
            ctx.onload = drawGrape(pPicX, pPicY);
            if(cChoice === 0)
            {
                //Player win
                PlayerW++;
                
                ctx.onload = drawBanana(cPicX, cPicY);
                //display a tie
                ctx.fillText("All Luck", 500, 300);
            }
            else if(cChoice === 1)
            {
                //Player win
                PlayerW++;

                ctx.onload = drawApple(cPicX, cPicY);
                //display a loss
                ctx.fillText("All Luck", 500, 300);
            }
            else if(cChoice === 2)
            {
                ctx.onload = drawGrape(cPicX, cPicY);
                //display a win
                ctx.fillText("Tied, shoulda guessed right", 500, 300);
            }
            else if(cChoice === 3)
            {
                //computer win
                CompW++;
 
                ctx.onload = drawStrawberry(cPicX, cPicY);
                //display a loss
                ctx.fillText("You're bad, not surprised LOL", 500, 300); 
             }
             else
             {
                //computer win
                CompW++;

                ctx.onload = drawWatermelon(cPicX, cPicY);
                //display a win
                ctx.fillText("You're bad, not surprised LOL", 500, 300);
             }

        break;

        case 3:
            ctx.onload = drawStrawberry(pPicX, pPicY);
            if(cChoice === 0)
            {
                //computer win
                CompW++;
                
                ctx.onload = drawBanana(cPicX, cPicY);
                //display a tie
                ctx.fillText("You're bad, not surprised LOL", 500, 300);
            }
            else if(cChoice === 1)
            {
                //Player win
                PlayerW++;

                ctx.onload = drawApple(cPicX, cPicY);
                //display a loss
                ctx.fillText("All Luck", 500, 300);
            }
            else if(cChoice === 2)
            {
                //Player win
                PlayerW++;

                ctx.onload = drawGrape(cPicX, cPicY);
                //display a win
                ctx.fillText("All Luck", 500, 300);
            }
            else if(cChoice === 3)
            {
                ctx.onload = drawStrawberry(cPicX, cPicY);
                //display a loss
                ctx.fillText("Tied, shoulda guessed right", 500, 300); 
            }
            else
            {
                //computer win
                CompW++;

                ctx.onload = drawWatermelon(cPicX, cPicY);
                //display a win
                ctx.fillText("You're bad, not surprised LOL", 500, 300);
            }

        break;

        case 4:
            ctx.onload = drawWatermelon(pPicX, pPicY);
            if(cChoice === 0)
            {
                //computer win
                CompW++;
                
                ctx.onload = drawBanana(cPicX, cPicY);
                //display a tie
                ctx.fillText("You're bad, not surprised LOL", 500, 300);
            }
            else if(cChoice === 1)
            {
                //computer win
                CompW++;

                ctx.onload = drawApple(cPicX, cPicY);
                //display a loss
                ctx.fillText("You're bad, not surprised LOL", 500, 300);
            }
            else if(cChoice === 2)
            {
                //Player win
                PlayerW++;

                ctx.onload = drawGrape(cPicX, cPicY);
                //display a win
                ctx.fillText("All Luck", 500, 300);
            }
            else if(cChoice === 3)
            {
                //Player win
                PlayerW++;
                
                ctx.onload = drawStrawberry(cPicX, cPicY);
                //display a loss
                ctx.fillText("All Luck", 500, 300); 
            }
            else
            {
                ctx.onload = drawWatermelon(cPicX, cPicY);
                //display a win
                ctx.fillText("Tied, shoulda guessed right", 500, 300);
            }

        break;        
    }
}

function drawBanana(x, y){
    ctx.drawImage(banana, x, y,130,130)
}

function drawApple(x, y){
    ctx.drawImage(apple, x, y,130,130)
}

function drawGrape(x, y){
    ctx.drawImage(grapes, x, y,130,130)
}

function drawStrawberry(x, y){
    ctx.drawImage(strawberry, x, y,130,130)
}

function drawWatermelon(x, y){
    ctx.drawImage(watermelon, x, y,130,130)
}

function drawStuff(){
    var c = document.querySelector('canvas');
    var ctx = c.getContext('2d');

    ctx.textAlign = "center";
    //Your wins
    ctx.fillStyle = 'white';
    ctx.fillRect(8,12,250,50);
    ctx.fillStyle = 'red';
    ctx.font = "40px Arial";
    ctx.fillText('Your Wins: ' + PlayerW, 130,50);

    //Computer wins
    ctx.fillStyle = 'white';
    ctx.fillRect(643,12,340,50);
    ctx.fillStyle = 'blue';
    ctx.fillText('Opponent Wins: ' + CompW, 810,50);

    //create boxing ring look on index page
    //ring floor
    ctx.lineWidth = 20;
    ctx.strokeStyle = 'white';
    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.moveTo(300,350);
    ctx.lineTo(0,600);
    ctx.lineTo(1000,600);
    ctx.lineTo(700,350);
    ctx.lineTo(294,350);
    ctx.fill();
    ctx.stroke();

    //Youre corner and opponent
    ctx.fillStyle = 'red';
    ctx.font = "30px Arial";
    ctx.fillText('Your Corner',400,365);
    ctx.fillStyle = 'blue';
    ctx.fillText('Opponent',900,590)

    //ropes will go before corners so they go behind and look good
    //red line first
    ctx.beginPath();
    ctx.lineWidth = 10;
    ctx.strokeStyle = 'red';
    //top
    ctx.moveTo(0,460);
    ctx.lineTo(300,210);
    ctx.lineTo(700,210);
    //middle
    ctx.moveTo(0,510);
    ctx.lineTo(300,260);
    ctx.lineTo(700,260);
    //bottom
    ctx.moveTo(0,560);
    ctx.lineTo(300,310);
    ctx.lineTo(700,310);
    ctx.stroke();
    //blue lines second
    ctx.beginPath();
    ctx.strokeStyle = 'blue';
    //top
    ctx.moveTo(1000,460);
    ctx.lineTo(700,210);
    //middle
    ctx.moveTo(1000,510);
    ctx.lineTo(700,260);
    //bottom
    ctx.moveTo(1000,560);
    ctx.lineTo(700,310);
    ctx.stroke();

    //corners
    ctx.lineWidth = 20;
    ctx.beginPath();
    ctx.strokeStyle = 'red';
    ctx.moveTo(300,350);
    ctx.lineTo(300,200);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = 'black';
    ctx.moveTo(700,350);
    ctx.lineTo(700,200);
    ctx.moveTo(0,600);
    ctx.lineTo(0,450);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = 'blue';
    ctx.moveTo(1000,600);
    ctx.lineTo(1000,450);
    ctx.stroke();
}