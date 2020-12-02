var c = document.querySelector('canvas');
var ctx = c.getContext('2d');

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

//bring opacity down on index page so that when you start game it comes to full effect and looks nice
ctx.fillStyle = 'rgba(255,255,255,0.5)';
ctx.fillRect(0,0,c.width,c.height);



