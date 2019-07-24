let bigImg = document.querySelector('#largeImg');
let thumbsImg = document.querySelectorAll('#thumbs img');


//Cache
let cache = (url) => {
    return new Promise((resolve, reject)=>{
        let img = document.createElement('img');
        img.src = url;
        img.addEventListener('load', resolve);
        img.addEventListener('error', () => {reject(new Error())});
    });
}
for(let i=0; i<thumbsImg.length; i++){
    cache(thumbsImg[i].parentElement.href)
        .then(()=> {
            thumbsImg[i].parentElement.href;
        })
        .catch((error) => {console.error('Catched... ', error)});
}

thumbs.addEventListener('click',hClick);

function hClick(e){
    e.preventDefault();
    if(e.target.tagName === 'A'){
        // console.log(e.target.href);
        bigImg.src = e.target.href;
    }
    if(e.target.tagName === 'IMG'){
        // console.log(e.target.parentElement.href)
        bigImg.src = e.target.parentElement.href;
    }
}