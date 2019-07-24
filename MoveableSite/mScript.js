'use strict';
function menu(choice) {        //Кнопки объеденины в объект, централизованное управление обработчиками событий по нажатию, легко масштабируется
    this.lock = function(){
        document.documentElement.removeEventListener('mousedown', hGetObj);
        document.documentElement.removeEventListener('mouseup', hPutObj);
    };
    this.unlock = function(){
         document.documentElement.addEventListener('mousedown', hGetObj);
         document.documentElement.addEventListener('mouseup', hPutObj);
    };
    var self = this;
    choice.onclick = function(e){
        let action = e.target.getAttribute('data-action');
        if(action)
            self[action]();
    };
}

new menu(header);

let timerId;
let coordX, coordY;
let curObj = 0;
let deltaX;  //Разница между текущим положением курсора по оси X и X координато левого верхнего угла элемента
let deltaY; //Разница между текущим положением курсора по оси Y и Y координатой верха элемента

document.documentElement.addEventListener('mousemove', hMouseMove);


function hGetObj(e){
    try{
        e.preventDefault();
        if (e.target!=e.currentTarget && curObj!=e.target && curObj==0){
            curObj = e.target;

            while(curObj!=document.documentElement){ // Проверка на клик по шапке страницы
                if(curObj==header) {
                    curObj = 0;
                    return;
                }
                curObj = curObj.parentNode;
            }
            curObj = e.target;
            deltaX = e.clientX - curObj.offsetLeft;
            deltaY = e.clientY - curObj.offsetTop;
        }
    }
    catch(err){}

}

function hPutObj(e){
    try{
        curObj.style.top = e.clientY - deltaY + 'px';
        curObj.style.left = e.clientX - deltaX + 'px';        
        curObj = 0;
    }
    catch{}
}

function hMouseMove(e){
    try{
        curObj.style.top = e.clientY - deltaY + 'px';
        curObj.style.left = e.clientX - deltaX + 'px';        
    }
    catch(err){}

}

