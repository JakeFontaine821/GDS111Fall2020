var c = document.querySelector('canvas');
var ctx = c.getContext('2d');

function main(){
    drawRect();
    drawCircle();
    drawLine();
    drawStar();
    drawPentagon();
}

function drawRect(){
    ctx.fillStyle = 'yellow';
    ctx.strokeStyle = 'black';
    ctx.fillRect(85,302,100,100);
    ctx.beginPath();
    ctx.lineWidth = '5';
    ctx.rect(88,304,95,95);
    ctx.stroke();
}

function drawCircle(){
    ctx.fillStyle = '#ffff00';
    ctx.strokeStyle = 'red';
    ctx.beginPath();
    ctx.arc(385, 442, 65, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
}

function drawLine(){
    ctx.strokeStyle = 'rgb(255,0,0)';
    ctx.beginPath();
    ctx.moveTo(85,682);
    ctx.lineTo(278,550);
    ctx.stroke();
}

function drawStar(){
    ctx.fillStyle = '#ffff00';
    ctx.strokeStyle = 'rgb(32,32,32)';
    ctx.beginPath();
    ctx.moveTo(635,497);
    ctx.lineTo(668,554);
    ctx.lineTo(733,567);
    ctx.lineTo(689,617);
    ctx.lineTo(697,681);
    ctx.lineTo(635,655);
    ctx.lineTo(575,681);
    ctx.lineTo(583,617);
    ctx.lineTo(539,567);
    ctx.lineTo(604,554);
    ctx.lineTo(635,497);
    ctx.fill();
    ctx.stroke();
}

function drawPentagon(){
    ctx.fillStyle = '#ff00ff';
    ctx.strokeStyle = '#00ffff';
    ctx.beginPath();
    ctx.moveTo(557,309);
    ctx.lineTo(667,285);
    ctx.lineTo(724,380);
    ctx.lineTo(650,464);
    ctx.lineTo(549,421);
    ctx.lineTo(557,309);
    ctx.fill();
    ctx.stroke();
}

main();