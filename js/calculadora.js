window.addEventListener('load',()=>{
    const display = document.querySelector('.display');
    const botones = document.getElementsByClassName('numeros');

    const botonesArray = Array.from(botones);

    botonesArray.forEach((button)=>{
        button.addEventListener('click', ()=>{
            calculadora(button, display);
        });
    })
});

function calculadora(button, display){
    switch (button.innerHTML) {
        case 'C':
            borrar(display);
            break;

            case '=':
            calcular(display);
            break;
    
        default:
            actualizar(display, button);
            break;
    }
}

function borrar (display){
    display.innerHTML=0;
}



function calcular (display){
    display.innerHTML = eval(display.innerHTML)
}
function actualizar (display, button){
    if(display.innerHTML== 0){
        display.innerHTML='';
    }
    display.innerHTML += button.innerHTML;
}
