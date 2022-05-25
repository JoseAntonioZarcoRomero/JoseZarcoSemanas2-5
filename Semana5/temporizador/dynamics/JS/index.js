let temporizador,unaVez=true;
const sonido = new Audio("./statics/media/audio/tiempo.mp3");
//Contador temporizador
const contTemporizador = document.getElementById("temporizador");
//Tiempo introducido
const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");
//Recibo botones
const aceptar = document.getElementById("aceptar");
const btn = document.getElementById("btn");

/*Eventos
----------------------------------------------------------------------------------*/
aceptar.addEventListener("click",()=>{
    checkValores();
    muestraTimer();
});
btn.addEventListener("click",(boton)=>{
    const btnClickeado = boton.target;
    if(btnClickeado.id == "inicio"){
        if(unaVez==true){
            unaVez=false;
            checkValores();
            let tiempoTotal = calcTiempoTotal();
            if(tiempoTotal > 0){
                temporizador = setInterval(()=>{
                    if(tiempoTotal < 0){
                        sonido.volume = .2;
                        sonido.play();
                        clearInterval(temporizador);
                        unaVez=true;
                        tiempoTotal=0;
                        horas.value=0;
                        minutos.value=0;
                        segundos.value=0;
                    } else {
                        muestraTimer();
                        console.log(tiempoTotal);
                        console.log(horas.value);
                        console.log(minutos.value);
                        console.log(segundos.value);
                        segundos.value--;
                        tiempoTotal-=1000;
                        if(segundos.value < 0 && minutos.value > 0){
                            segundos.value = 59;
                            minutos.value--;
                        } else if(segundos.value < 0 && minutos.value < 0 && horas.value > 0){
                            segundos.value = 59;
                            minutos.value=59;
                            horas.value--;
                        } else if(segundos.value < 0 && minutos.value == 0 && horas.value > 0){
                            segundos.value = 59;
                            minutos.value=59;
                            horas.value--;
                        }
                    }
                },1000);
            }
        }
    } else if(btnClickeado.id == "detener"){
        ;
    } else if(btnClickeado.id == "restablecer"){
        clearInterval(temporizador);
        unaVez=true;
        tiempoTotal=0;
        horas.value=0;
        minutos.value=0;
        segundos.value=0;
        contTemporizador.innerHTML = "--:--:--";
    }
});

/*Funciones
----------------------------------------------------------------------------------*/
function calcTiempoTotal(){
    let tiempoTotal = (horas.value*60*60*1000)+(minutos.value*60*1000)+(segundos.value*1000);
    return tiempoTotal;//regresa el tiempo introducido en milisegundos
}
function ajustaValores(valor){
    if(valor.value == "" || valor.value < 0){
        valor.value = 00;
    } else if(valor.value > 59){
        valor.value = 59;
    }
}
function checkValores(){
    ajustaValores(horas);
    ajustaValores(minutos);
    ajustaValores(segundos);
}
function muestraTimer(){
    //Carga los segundos 
    let txtSegundos;
    if(segundos.value < 10){
        txtSegundos = "0"+segundos.value;
    }else{
        txtSegundos = segundos.value;
    }
    //Carga los minutos 
    let txtMinutos;
    if(minutos.value < 10){
        txtMinutos = "0"+minutos.value;
    }else{
        txtMinutos = minutos.value;
    }
    //Carga las horas
    let txtHoras;
    if(horas.value < 10){
        txtHoras = "0"+horas.value;
    }else{
        txtHoras = horas.value;
    }
    contTemporizador.innerHTML = txtHoras+":"+txtMinutos+":"+txtSegundos;
}