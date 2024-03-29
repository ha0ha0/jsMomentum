const body = document.querySelector('body');

const IMG_NUMBER = 6;

//api에서 로드 할 경우
//function handleImgLoad(){
//    console.log('finished loading');
//}

function paintedImage(imgNumber){
    const image = new Image();
    image.src = `images/${imgNumber +1}.jpg`;
    image.classList.add('bgImage');
    body.prepend(image);
    //image.addEventListener('loadend' , handleImgLoad)
}

function genRandom(){
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

function init(){
    const randomNumber = genRandom();
    paintedImage(randomNumber);
}

init();