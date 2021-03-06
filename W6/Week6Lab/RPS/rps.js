var c = document.querySelector('canvas');
var ctx = c.getContext('2d');

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

//background
ctx.fillStyle = "grey";
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
ctx.fillText("Your Choice", 10, 40);

// Blue Line
ctx.beginPath();
ctx.strokeStyle = 'Blue';
ctx.moveTo(4, c.height + 9);
ctx.lineTo(c.width + 9, 7);
ctx.stroke();
//"Computer"
ctx.fillStyle = "Blue";
ctx.fillText("Computer", 810, 585);


//Play function accepts an integer
//generates an integer 0-2
//Displays the player's choice and computer's choice
function play(pChoice)
{    
    ctx.clearRect(0,0,c.width,c.height);


    var cChoice = Math.floor(Math.random()*2.999999)

    // put diplay of choices here -------------------------------------------------------------------------------------------
    //background
    ctx.fillStyle = "grey";
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
    ctx.fillText("Your Choice", 10, 40);

    // Blue Line
    ctx.beginPath();
    ctx.strokeStyle = 'Blue';
    ctx.moveTo(4, c.height + 9);
    ctx.lineTo(c.width + 9, 7);
    ctx.stroke();
    //"Computer"
    ctx.fillStyle = "Blue";
    ctx.fillText("Computer", 810, 585);


    ctx.fillStyle = 'Black';
    ctx.font = "90px Arial";
    ctx.textAlign = "center";
    
    // alert(rps[pChoice] + " <- You | Computer -> " + rps[cChoice]) 

    switch(pChoice){
        case 0:
            if(cChoice === 0)
            {
                //display a tie
                ctx.fillText("You Tied!", 500, 300);
            }
            else if(cChoice === 1)
            {
                //display a loss
                ctx.fillText("You Lost!", 500, 300);
            }
            else
            {
                //display a win
                ctx.fillText("You Won!", 500, 300);
            }
            break;

            case 1:
                if(cChoice === 0)
                {
                    //display a Lost
                    ctx.fillText("You Win!", 500, 300);
                }
                else if(cChoice === 1)
                {
                    //display a Tie
                    ctx.fillText("You Tied!", 500, 300);
                }
                else
                {
                    //display a win
                    ctx.fillText("You Lost!", 500, 300);
                } 
            break;

            case 2:
                if(cChoice === 0)
                {
                    //display a tie
                    ctx.fillText("You Lost!", 500, 300);
                }
                else if(cChoice === 1)
                {
                    //display a loss
                    ctx.fillText("You Win!", 500, 300);
                }
                else
                {
                    //display a win
                    ctx.fillText("You Tied!", 500, 300);
                }
             break;
    }
}