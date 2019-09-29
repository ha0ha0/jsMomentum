const textWrap = document.querySelector('.inner_wrap');
const textHight = textWrap.offsetHeight;

function contHeight(){
    const contTop = (window.innerHeight - textHight) / 2
    textWrap.style.top  = (contTop-200) + 'px';
    console.log(contTop)
}

function init(){
    contHeight();
}

init();