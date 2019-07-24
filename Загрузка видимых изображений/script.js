let tmp = [];
const img = document.querySelectorAll('[realsrc]');


function loadVisible(){
    for(let i=0; i<img.length; i++){
        if ((img[i].getBoundingClientRect().top > document.documentElement.clientHeight) || (img[i].getBoundingClientRect().top + img[i].offsetHeight) < 0){
            if(img[i].src.slice(-3) === 'jpg') chAttr(img[i]);
        }
        else{ 
            if(img[i].src.slice(-3) === 'gif') chAttr(img[i]);
        }
    }    
}

function chAttr(elem){
        tmp.push(elem.getAttribute('realsrc'));
        tmp.push(elem.src);
        elem.setAttribute('realsrc', tmp.pop());
        elem.src = tmp.pop();
}

document.addEventListener('scroll', loadVisible);
loadVisible();
