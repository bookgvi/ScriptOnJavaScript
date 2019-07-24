let slider = document.querySelector('.slider');
let scale = document.querySelector('.scale');
let monitor = document.querySelector('.main');


let coordX = scale.getBoundingClientRect().left;
let hookedObj;


document.addEventListener('mousemove', hGetCoord);
function hGetCoord(e){
    e.preventDefault();

    let scaleStart = scale.getBoundingClientRect().left;
    let scaleEnd = scaleStart + scale.offsetWidth;

    if(e.clientX>scaleStart && (e.clientX+slider.offsetWidth)<scaleEnd)
        coordX = e.clientX;
    if(hookedObj){
        hookedObj.style.left = coordX + 'px';

    }
}

document.addEventListener('mousedown', hSliderMove);
function hSliderMove(e){
    e.preventDefault();
    if(e.target.classList.value === 'slider')
        hookedObj = e.target;
}

document.addEventListener('mouseup', hStop);
function hStop(e){
    e.preventDefault();
        hookedObj = null;
}

