let temporizador, unaVez=true, textcanvas= "--:--:--",tiempocanva,tiempoTotal=1;
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

/*Canvas
-------------------------------------------------------------*/
const canvas = document.getElementById("mi-canvas");
const ctx = canvas.getContext("2d");
actualizaCirculo();

function actualizaCirculo(){
    //"borro" canvas pasado
    ctx.fillStyle = 'black';
    ctx.fillRect(0,0,canvas.width,canvas.height);

    ctx.lineWidth = 15;

    //dibujo círculo
    ctx.beginPath();
    ctx.arc(canvas.width/2, canvas.height/2, 180, 0, Math.PI*2);
    ctx.strokeStyle = 'white';
    ctx.stroke();
    ctx.closePath();

    //tiempo
    if(tiempoTotal>0){
        let ang = (360*tiempoTotal)/tiempocanva;
        anguloTranscurrido = ((ang-90)*Math.PI/180);
        ctx.beginPath();
        ctx.arc(canvas.width/2, canvas.height/2, 180, ((0-90)*Math.PI/180), anguloTranscurrido);
        ctx.strokeStyle = 'green';
        ctx.stroke();
        ctx.closePath();
    } else if(tiempoTotal<=0){
        ctx.beginPath();
        ctx.arc(canvas.width/2, canvas.height/2, 180, 0, Math.PI*2);
        ctx.strokeStyle = 'red';
        ctx.stroke();
        ctx.closePath();
    }

    //pongo texto
    ctx.fillStyle = 'white';
    ctx.textAlign = "center";
    ctx.font = "50px monospace";
    ctx.fillText(textcanvas,canvas.width/2, canvas.height/2);
}

/*Eventos
----------------------------------------------------------------------------------*/
aceptar.addEventListener("click",()=>{
    checkValores();
    muestraTimer();
    tiempocanva = calcTiempoTotal();
});
btn.addEventListener("click",(boton)=>{
    const btnClickeado = boton.target;
    tiempoTotal = calcTiempoTotal();
    if(btnClickeado.id == "inicio"){
        if(unaVez==true){
            unaVez=false;
            checkValores();
            if(tiempoTotal > 0){
                temporizador = setInterval(()=>{
                    if(tiempoTotal < 0){
                        sonido.volume = .2;
                        sonido.play();
                        clearInterval(temporizador);
                        unaVez=true;
                        tiempoTotal=1;
                        horas.value=0;
                        minutos.value=0;
                        segundos.value=0;
                    } else {
                        muestraTimer();
                        // console.log(tiempoTotal);
                        // console.log(horas.value);
                        // console.log(minutos.value);
                        // console.log(segundos.value);
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
    } else if(btnClickeado.id == "pausa"){
        if(tiempoTotal > 0){
            clearInterval(temporizador);
            unaVez=true;
        }
    } else if(btnClickeado.id == "restablecer"){
        clearInterval(temporizador);
        unaVez=true;
        tiempoTotal=1;
        horas.value=0;
        minutos.value=0;
        segundos.value=0;
        contTemporizador.innerHTML = "--:--:--";
        textcanvas = "--:--:--";
        actualizaCirculo();
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
    textcanvas = txtHoras+":"+txtMinutos+":"+txtSegundos;
    actualizaCirculo();
}