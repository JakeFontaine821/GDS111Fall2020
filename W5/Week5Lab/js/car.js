var randomNumber = Math.round(Math.random()*(10 - 3) + 3);

// Math.rando() * (high - low) + low

function randomRange(high, low){
    return Math.round(Math.random() * (high - low) + low);
}

console.log(randomRange(10, -10));

// alert(randomNumber);


function Car(){
    this.x = 50;
    this.y = 50;
    this.w = 30;
    this.h = 30;
    this.color = 'purple';
    this.image = mario;

    this.draw = function(){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.w, this.h)
    }

    this.drawSprite = function(){
        ctx.drawImage(this.image, this.x, this.y, this.w, this.h)
    }
}