

function Skull(origin, size, angle,level = 1,limit = Number.POSITIVE_INFINITY){
    
    let endX = origin.x + (Math.cos(angle / 57.3) * size) * scale;
    let endY = origin.y + (Math.sin(angle / 57.3) * size) * scale;

    var strokes = ['white','white','white','orange','#ff0066'], actualStroke;

    if(strokes[level - 1]){
        actualStroke = strokes[level - 1];
    }
    else{
        actualStroke = strokes[strokes.length - 1];
    }

    renderLine({
        from : { x : origin.x, y: origin.y},
        to   : { x : endX,y : endY},
        stroke : actualStroke,
        lineWidth: 10 - (level * 1.5)
    });

    if(size < 50 || level >= limit){
        return;
    }

    Skull({ x : endX, y : endY },size * 0.9, angle + (50 / level), level + 1,limit);
    Skull({ x : endX, y : endY },size * 0.9, angle - (50 / level), level + 1,limit);


}



function Stem(origin, size, angle,level = 1,limit = Number.POSITIVE_INFINITY){
    
    let endX = origin.x + (Math.cos(angle / 57.3) * size) * scale;
    let endY = origin.y + (Math.sin(angle / 57.3) * size) * scale;

    var strokes = ['white','white','white','orange','#ff0066'], actualStroke;

    if(strokes[level - 1]){
        actualStroke = strokes[level - 1];
    }
    else{
        actualStroke = strokes[strokes.length - 1];
    }

    renderLine({
        from : { x : origin.x, y: origin.y},
        to   : { x : endX,y : endY},
        stroke : actualStroke,
        lineWidth: 15 - (level * 1.5)
    });

    if(size < 50 || level >= limit){
        return;
    }

    Stem({ x : endX, y : endY },size * 0.9, angle + (wingAngle / level), level + 1,limit);
    Stem({ x : endX, y : endY },size * 0.9, angle - (wingAngle / level), level + 1,limit);


}


var _angle = 15, rotationVelocity = 0, rotationAcceleration = 0.1;
var wingAngle = 30;

function Catrina(){
    for(let i = 0; i < 5; i+= 2){

        let angle = (360 / 15) * i;

        if(i == 2){
            Stem({ x : (canvas.width / 2), y : canvas.height / 2 - 200}, 150, angle + _angle + 25, 3);
        }
        else{
            Stem({ x : (canvas.width / 2), y : canvas.height / 2 - 200}, 100, angle + _angle + 25);
        }
    }

    for(let i = 0; i < 5; i++){

        let angle = (360 / 15) * i;

        Skull({ x : canvas.width / 2, y : canvas.height / 2 - 200}, 70, angle + _angle + 205);
    }
}

function floor(){
    for(let i = 0; i < 2500; i++){
        renderCircle({
            x : Math.random() * canvas.width,
            y : ((canvas.height /  1.5) + Math.random() * ((canvas.height) / 3)),
            stroke : Math.random() > 0.3 ? 'orange' : '#ff0066',
            radius: 10
        })
    }
}



function animationLoop(){

    c.clearRect(0,0,canvas.width,canvas.height);
    floor();
    Catrina();
}

animationLoop();