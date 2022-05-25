//Contador temporizador
const temporizador = document.getElementById("temporizador");
//Tiempo introducido
const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");
//Recibo botones
const btn = document.getElementById("btn");

/*Eventos
----------------------------------------------------------------------------------*/
btn.addEventListener("click",(boton)=>{
    const btnClickeado = boton.target;
    if(btnClickeado.id == "inicio"){
        ;
    } else if(btnClickeado.id == "detener"){
        ;
    } else if(btnClickeado.id == "restablecer"){
        ;
    }
});