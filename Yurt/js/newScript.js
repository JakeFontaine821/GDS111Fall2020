var c = document.querySelector('canvas');
var ctx = c.getContext('2d');

var myGamePiece;

function startGame() {
    myGameArea.start();
    myGamePiece = new component(30, 30, "red", 10, 120);
}

function drawPlayer(){
    ctx.fillStyle = 'red'
    ctx.fillRect(c.width / 2, c.height / 2, 20, 20); 
}

drawPlayer();


