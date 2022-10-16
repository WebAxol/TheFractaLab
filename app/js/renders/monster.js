function Stem(origin, size, angle,level = 1){
    
    let endX = origin.x + (Math.cos(angle / 57.3) * size) * scale;
    let endY = origin.y + (Math.sin(angle / 57.3) * size) * scale;

    var strokes = ['#ff0066','#ff0066','#ff0066','white'], actualStroke;

    if(strokes[level - 1]){
        actualStroke = strokes[level - 1];
    }
    else{
        actualStroke = strokes[strokes.length - 1];
    }


    //actualStroke = 'white';

    renderLine({
        from : { x : origin.x, y: origin.y},
        to   : { x : endX,y : endY},
        stroke : actualStroke,
        lineWidth: 10 - (level * 1.5)
    });

    if(size < 50){
        return;
    }

    Stem({ x : endX, y : endY },size * 0.9, angle + (wingAngle / level), level + 1);
    Stem({ x : endX, y : endY },size * 0.9, angle - (wingAngle / level), level + 1);


}


var _angle = 0, rotationVelocity = 0, rotationAcceleration = 0.1;
var wingAngle = 0;

function animationLoop(){
    requestAnimationFrame(animationLoop);




    if(rotationVelocity > 2 || rotationVelocity < -2){
        rotationAcceleration *= -1;
    }

    if(wingAngle < 50){
        wingAngle++;
    }


    c.clearRect(0,0,canvas.width,canvas.height);

    for(let i = 0; i < 5; i++){

        let angle = (360 / 15) * i;

        Stem({ x : (canvas.width / 2), y : canvas.height / 2}, 130, angle + _angle + 15);


    }


    for(let i = 0; i < 5; i++){

        let angle = (360 / 15) * i;

        Stem({ x : canvas.width / 2, y : canvas.height / 2}, 70, angle + 195 - _angle);
    }

    _angle += rotationVelocity;
    rotationVelocity += rotationAcceleration;
}

animationLoop();