document.onkeydown=function(e){
    console.log("Key code is: ", e.keycode)

    if(e.keycode==38) {
        dino =document.querySelector('.dino');
        dino.classList.add('animateDino');
        setTimeout(() => {
            dino.classList.remove('animateDino') 
        }, 700);
    }

}
setInterval(() => {
    dino = document.querySelector('.dino');
    gameOver =  document.querySelector('.gameOver');
obstacle = document.querySelector('.obstacle');

    dx = window.getComputedStyle()

},100);



