const up = document.querySelector('.up');
const down = document.querySelector('.down');

let currentScroll = 0;
let y=200; //значение скрола для появления стрелок

document.addEventListener('scroll',hScroll);
function hScroll(e){
    const scrollSize = window.pageYOffset;

    if(scrollSize>y){
        down.style.display = 'none';
        up.style.display = 'inline';
        currentScroll = window.pageYOffset;
        console.log(currentScroll)

    }
    if(scrollSize<y && currentScroll){
        up.style.display = 'none';
        down.style.display = 'inline';
    }
}

function scrollObj(){
    this.up = () => {
        currnetScroll = window.pageYOffset;
        window.scrollTo(0,0);
    };
    this.down = () => {
        window.scrollTo(0,currentScroll);
        currnetScroll = 0;
    };

    let self = this;
    document.addEventListener('click',hClickForScroll);
    function hClickForScroll(e){
        if (!e.target.dataset.scroll) return;
        let action = e.target.dataset.scroll;
        console.log(action);
        self[action]();
    }
}
new scrollObj();
