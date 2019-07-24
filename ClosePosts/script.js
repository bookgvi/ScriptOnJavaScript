let div = document.querySelectorAll('.pane');
let cross = document.querySelector('.remove-button');
let crossArr = [];
for(let i=0; i<div.length; i++){
    crossArr[i] = cross.cloneNode(true);
    div[i].appendChild(crossArr[i]);
    crossArr[i].dataset.number = i;
}

    document.body.addEventListener('click', hClosePost);
    function hClosePost(e){
        if(e.target.dataset.number){
            let elem = e.target.parentElement;
            elem.style.display='none';
        }
    }

