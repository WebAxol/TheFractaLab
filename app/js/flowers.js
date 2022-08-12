
function Flower(x,y){

    function Petal(origin, size, angle,level = 1){
        let endX = origin.x + (Math.cos(angle / 57.3) * size) * scale;
        let endY = origin.y + (Math.sin(angle / 57.3) * size) * scale;

        var color = '70,210,80';

        if(size < 120 * scale){
            color = '251,0,63';
        }        

        if(size < 50 * scale){
            color = '255,255,255';
        }        

        if(size < 20 * scale){
            color = '255,0,255';
        }        

        renderCircle({
            x : endX,
            y : endY,
            radius : size,
            stroke :  `rgb(${color})`,
            background : `rgba(${color},0.1)`,
            lineWidth : 5
        })

        if(size * 0.65 > 7 * scale){
            Petal({ x : endX, y : endY },size * 0.65, angle + 30, level  + 1);
            Petal({ x : endX, y : endY },size * 0.65, angle - 30, level + 1);
        }
    }

    Petal({ x : x, y : y}, 150 * 1, -90)
    Petal({ x : x, y : y}, 150 * 1, 90)
    Petal({ x : x, y : y}, 150 * 1, 0)
    Petal({ x : x, y : y}, 150 * 1, 180)
    Petal({ x : x, y : y}, 125 * 1, 45)
    Petal({ x : x, y : y}, 125 * 1, -45)
    Petal({ x : x, y : y}, 125 * 1, 135)
    Petal({ x : x, y : y}, 125 * 1, -135)
}


function Stem(origin, size, angle,level = 1, end = false){
    
    let endX = origin.x + (Math.cos(angle / 57.3) * size) * scale;
    let endY = origin.y + (Math.sin(angle / 57.3) * size) * scale;

    renderLine({
        from : { x : origin.x, y: origin.y},
        to   : { x : endX,y : endY},
        stroke : 'lawngreen',
        lineWidth: 40 - (level * 1.5)
    });

    if(end == true || size < 10){
        Flower(endX, endY);
        return;
    }

    let _angle = angle + ((Math.random() * 10) * (Math.random() > 0.5 ? -1 : 1) / level);

    Stem({ x : endX, y : endY },size * 0.9, _angle, level + 1);

    for(let i = 0; i < 3; i++){
        if(Math.random() > 0.95 - (level / 10000)){

            _angle = angle + ((50 + (Math.random() * 20)) * (Math.random() > 0.5 ? -1 : 1));

            //Stem({ x : endX, y : endY },size * 0.95, _angle, level + 1);
        }
    }



}


//Flower(canvas.width / 2, canvas.height / 2);
Stem({ x : canvas.width / 2, y : canvas.height}, 130, -90)
Stem({ x : canvas.width / 4, y : canvas.height}, 100, -90)
Stem({ x : canvas.width / 4 * 3, y : canvas.height}, 100, -90)