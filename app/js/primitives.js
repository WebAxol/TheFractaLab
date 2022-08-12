'use strict'

const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');
var scale = 0.8;


function renderCircle(details){

    c.beginPath();

    c.fillStyle   = details.background  || null;
    c.strokeStyle = details.stroke;
    c.lineWidth   = details.lineWidth || 1;

    c.arc(
        details.x || 0,
        details.y || 0,
        details.radius || 10,
        0, Math.PI * 2
    );

    if (details.background != null) c.fill();
    if (details.stroke != null) c.stroke();

    c.closePath();
};


function renderLine(details){

    c.beginPath();

    c.strokeStyle = details.stroke || 'black';
    c.lineWidth   = details.lineWidth || 1;

    c.moveTo(details.from.x,details.from.y)
    c.lineTo(details.to.x,details.to.y);
    c.stroke();

    c.closePath();
}