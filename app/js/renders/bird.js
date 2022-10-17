function Stem(origin, size, angle,angl,level = 1,){
    
    let endX = origin.x + (Math.cos(angle / 57.3) * size) * scale;
    let endY = origin.y + (Math.sin(angle / 57.3) * size) * scale;

    var strokes = ['orange','orange','grey','grey'], actualStroke;

    if(strokes[level - 1]){
        actualStroke = strokes[level - 1];
    }
    else{
        actualStroke = strokes[strokes.length - 1];
    }

    if(size < 60){
        actualStroke =  '#ff0066';
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

    Stem({ x : endX, y : endY },size * 0.9, angle + (angl / level),angl,level + 1);
    Stem({ x : endX, y : endY },size * 0.9, angle - (angl / level),angl,level + 1);


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

    for(let i = 0; i < 2; i++){

        let angle = (360 / 30) * i;

        Stem({ x : (canvas.width / 2) + 30, y : (canvas.height / 2) - 30}, 150, angle + _angle -45 + 180,10);
        //Stem({ x : (canvas.width / 2), y : canvas.height / 2}, 130, angle + _angle + 90 + 180);
    }

    for(let i = 0; i < 10; i++){

        let angle = (360 / 30) * i;

        Stem({ x : (canvas.width / 2) + 150, y : (canvas.height / 2) - 150}, 120, angle + _angle + 90,wingAngle);
        //Stem({ x : (canvas.width / 2), y : canvas.height / 2}, 130, angle + _angle + 90 + 180);



    }

}

animationLoop();