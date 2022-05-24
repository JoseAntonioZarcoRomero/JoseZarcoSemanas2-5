/*Constantes formulario
-------------------------------------------------------------*/
const formcambie = document.getElementById("cambie");//Contenedor
const nPicos = document.getElementById("nPicos");
const picudo = document.getElementById("picudo");
const color = document.getElementById("color");
const relleno = document.getElementById("relleno");

/*Eventos formulario
si altero datos del formulario actualizo canvas
-------------------------------------------------------------*/
formcambie.addEventListener("change",actualizaCanvas);

/*Canvas
-------------------------------------------------------------*/
const canvas = document.getElementById("estrella");
const ctx = canvas.getContext("2d");

// Variables para mi canva
let centrox = canvas.width/2;
let centroy = canvas.height/2;
let radioGrande = 180, alt = false;
let radio, angulo, desplazarX, desplazarY;
ctx.lineWidth = 3;

function actualizaCanvas(){
    let numPicos = nPicos.value;
    if(numPicos == ""){
        alert("Por favor ingresa un número de picos")
    } else if (numPicos < 4 || numPicos > 30){
        alert("El número de picos ingresado es inválido");
    } else {
        //Crea un rectangulo para "borrar" canva anterior
        ctx.fillStyle = 'aliceblue';
        ctx.fillRect(0,0,canvas.width,canvas.height);

        //Recibo datos del formulario
        let picudez = picudo.value;
        let colorStar = color.value;
        let rellenoStar = relleno.checked;
        
        /*Estrella
        ----------------------------------------------------------------*/
        let radioChico = picudez;
        let numPuntos = numPicos*2;
        let fraccion = (Math.PI*2)/numPuntos;
        ctx.beginPath();
        for(let i=0; i<numPuntos; i++){
            if(alt === true){
                radio = radioChico;
                alt = false;
            } else {
                radio = radioGrande;
                alt = true;
            }
            angulo = i * fraccion;
            desplazarX = radio * Math.cos(angulo) + centrox;
            desplazarY = radio * Math.sin(angulo) + centroy;
            ctx.lineTo(desplazarX,desplazarY);
        }
        ctx.closePath();

        /*Agrega colores
        -------------------------------------------------------------*/
        ctx.fillStyle = 'aliceblue';
        if(rellenoStar == true){
            ctx.fillStyle = colorStar;
        }
        ctx.fill();
        ctx.strokeStyle = colorStar;
        ctx.stroke();
    }
}