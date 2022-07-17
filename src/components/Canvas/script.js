const canvas = document.querySelector('#drawingCanvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// const background = new Image();
const img_mov = document.createElement('img');
const img_mov2 = document.createElement('img');  

// background.src = './imagenes/page/logo.jpg';
img_mov.src = '../../assets/images/cursors/flower.jpg';
img_mov2.src = '../../assets/images/cursors/flower2.jpg';

let pincel = img_mov;

// background.onload = () => {
//     ctx.drawImage(background, 0, 0)
// }

const mouse_drawing = (evento) => {
    const left = evento.clientX;
    const top = evento.clientY;

    context.drawImage(pincel, left, top);

}

const click_drawing = () => {
    
    if (pincel === img_mov) {
        pincel = img_mov2;
    }
    else {
        pincel = img_mov;
    }
}

canvas.addEventListener('click', click_drawing);
canvas.addEventListener('mousemove', mouse_drawing);